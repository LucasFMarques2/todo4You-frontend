import { useState, useEffect } from 'react' // Adicione o useEffect
import {
  Container,
  TasksContainer,
  TaskContainer,
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogContentDeleteConfirmation,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useDrag, useDrop } from 'react-dnd'
import { api } from '../../../../services/api'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../../../../components/input'

export function Tasks({ searchQuery }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
    )
  }

  const handleTaskDelete = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
  }

  const columns = ['pendente', 'em andamento', 'feito']

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get('/tarefas')
        setTasks(response.data.tasks)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error)
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes((searchQuery || '').toLowerCase()),
  )

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await api.put(`/tarefas/${taskId}`, { status: newStatus })
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      )
      setTasks(updatedTasks)
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
    }
  }

  if (loading) {
    return <Container>Carregando tarefas...</Container>
  }

  return (
    <Container>
      {columns.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
          title={status.charAt(0).toUpperCase() + status.slice(1)}
          tasks={filteredTasks.filter((task) => task.status === status)}
          onDropTask={handleStatusChange}
          navigate={navigate}
        />
      ))}
    </Container>
  )
}

function TaskColumn({
  status,
  title,
  tasks,
  onDropTask,
  navigate,
  onTaskUpdate,
  onTaskDelete,
}) {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDropTask(item.id, status),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  })

  return (
    <TasksContainer
      ref={drop}
      style={{ backgroundColor: isOver ? '#4b4b4b' : '' }}
    >
      <h2>{title}</h2>
      {tasks.map((task) => (
        <DraggableTask
          key={task.id}
          task={task}
          navigate={navigate}
          onStatusChange={onDropTask}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </TasksContainer>
  )
}

function DraggableTask({ task, onStatusChange, onTaskUpdate, onTaskDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    tag: task.tag,
    status: task.status,
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  })

  const handleSave = async () => {
    try {
      const response = await api.put(`/tarefas/${task.id}`, formData)
      onTaskUpdate(response.data)
      setIsEditing(false)
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error)
    }
  }

  // Modificado: Não exclui diretamente, apenas abre o modal de confirmação
  const handleDelete = () => {
    setShowDeleteConfirmation(true) // Abre o modal de confirmação
  }

  const handleDeleteConfirmation = async (confirmed) => {
    setShowDeleteConfirmation(false) // Fecha o modal de confirmação
    if (confirmed) {
      try {
        await api.delete(`/tarefas/${task.id}`)
        onTaskDelete(task.id)
        setIsEditing(false)
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error)
      }
    }
  }

  return (
    <Dialog.Root open={isEditing} onOpenChange={setIsEditing}>
      <Dialog.Trigger asChild>
        <TaskContainer
          ref={drag}
          $status={task.status}
          style={{ opacity: isDragging ? 0.5 : 1 }}
          onClick={() => setIsEditing(true)}
        >
          <h4>
            Título: <span className="taskContent">{task.title}</span>
          </h4>
          <h4>
            Descrição: <span className="taskContent">{task.description}</span>
          </h4>
          <div className="footer">
            <div className="tag">{task.tag}</div>
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task.id, e.target.value)}
              onClick={(e) => e.stopPropagation()}
            >
              {['pendente', 'em andamento', 'feito'].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </TaskContainer>
      </Dialog.Trigger>

      {/* Modal de Edição */}
      <Dialog.Portal>
        <StyledDialogOverlay className="DialogOverlay" />
        <StyledDialogContent className="DialogContent">
          <div className="DialogHeader">
            <Dialog.Title className="DialogTitle">Editar Tarefa</Dialog.Title>
            <Dialog.Close className="CloseButton">×</Dialog.Close>
          </div>

          <div className="FormGroup">
            <label>Título</label>
            <Input
              placeholder="Título"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="FormGroup">
            <label>Descrição</label>
            <Input
              placeholder="Descrição"
              type="textArea"
              isTextArea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="TagStatusGroup">
            <div className="FormGroup" style={{ flex: 1 }}>
              <label>Tag</label>
              <Input
                placeholder="Tag"
                type="text"
                value={formData.tag}
                onChange={(e) =>
                  setFormData({ ...formData, tag: e.target.value })
                }
              />
            </div>

            <div className="FormGroup" style={{ flex: 1 }}>
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                {['pendente', 'em andamento', 'feito'].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="ButtonGroup">
            <button type="button" className="SaveButton" onClick={handleSave}>
              Salvar
            </button>
            {/* Modificado: Chama o handleDelete para abrir o modal de confirmação */}
            <button
              type="button"
              className="DeleteButton"
              onClick={handleDelete}
            >
              Excluir
            </button>
          </div>
        </StyledDialogContent>
      </Dialog.Portal>

      {/* Modal de Confirmação de Exclusão */}
      <Dialog.Root
        open={showDeleteConfirmation}
        onOpenChange={setShowDeleteConfirmation}
      >
        <Dialog.Portal>
          <StyledDialogOverlay className="DialogOverlay" />
          <StyledDialogContentDeleteConfirmation className="DialogContent">
            <div className="DialogHeader">
              <Dialog.Title className="DialogTitle">
                Confirmar Exclusão
              </Dialog.Title>
              <Dialog.Close className="CloseButton">×</Dialog.Close>
            </div>
            <p>Tem certeza que deseja excluir esta tarefa permanentemente?</p>
            <div className="ButtonGroup">
              <button
                type="button"
                className="DeleteButton"
                onClick={() => handleDeleteConfirmation(true)}
              >
                Confirmar
              </button>
              <button
                type="button"
                className="CancelButton"
                onClick={() => handleDeleteConfirmation(false)}
              >
                Cancelar
              </button>
            </div>
          </StyledDialogContentDeleteConfirmation>
        </Dialog.Portal>
      </Dialog.Root>
    </Dialog.Root>
  )
}
