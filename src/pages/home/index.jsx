import { useEffect, useState } from 'react'
import { Container, Brand, Menu, Search, Content, NewTask } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Tasks } from './components/tasks'
import { api } from '../../services/api'

export function Home() {
  const [existsTask, setExistsTask] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchTask() {
      const response = await api.get('tarefas')
      setExistsTask(response.data)
    }
    fetchTask()
  }, [existsTask])

  return (
    <Container>
      <Brand>
        <h1>ToDo 4You</h1>
      </Brand>
      <Header />
      <Menu />
      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={<FiSearch />}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Search>

      <Content>
        <h1>Minhas tarefas</h1>
        {existsTask.tasks && existsTask.tasks.length > 0 ? (
          <>
            <Tasks tasks={existsTask.tasks} searchQuery={searchQuery} />
            <span className="InfoSpan">* Arraste suas tarefas *</span>
          </>
        ) : (
          <h2 className="taskEmpity">Crie uma nova tarefa</h2>
        )}
      </Content>
      <NewTask to="/tarefas">
        <FiPlus />
        Criar nota
      </NewTask>
    </Container>
  )
}
