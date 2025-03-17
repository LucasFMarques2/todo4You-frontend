import { useState } from 'react'
import { Container, Brand, Menu, Search, Content, NewTask } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Tasks } from './components/tasks'

export function Home() {
  const [searchQuery, setSearchQuery] = useState('')

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
        <Tasks searchQuery={searchQuery} />
      </Content>
      <NewTask to="/tarefas">
        <FiPlus />
        Criar nota
      </NewTask>
    </Container>
  )
}
