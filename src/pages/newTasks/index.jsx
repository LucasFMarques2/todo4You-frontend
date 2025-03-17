import {
  ButtonClose,
  ModalContent,
  ModalOverlay,
  SuccessIcon,
  TaskContainer,
} from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { api } from '../../services/api'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function NewTasks() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleNewTasks(event) {
    event.preventDefault()

    if (!title || !description || !tag) {
      setError('Todos os campos são obrigatórios!')
      return
    }

    try {
      await api.post('/tarefas', {
        title,
        description,
        tag,
      })
      setIsSuccessModalOpen(true)
    } catch (err) {
      setError('Erro ao cadastrar tarefa. Tente novamente.')
    }
  }

  return (
    <TaskContainer>
      <div>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h2>Nova tarefa</h2>
      </div>
      <form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Input
          placeholder="Título"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <Input
          placeholder="Observação"
          type="textArea"
          isTextArea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <div className="tag-input">
          <Input
            placeholder="Tag"
            type="text"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
            required
          />
        </div>
        <Button
          type={'submit'}
          onClick={handleNewTasks}
          title={'Criar nova tarefa'}
        />
      </form>
      <Dialog.Root
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
      >
        <Dialog.Portal>
          <ModalOverlay>
            <ModalContent>
              <SuccessIcon />
              <h2>Tarefa cadastrada com êxito</h2>
              <ButtonClose onClick={() => navigate('/')}>OK</ButtonClose>
            </ModalContent>
          </ModalOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </TaskContainer>
  )
}
