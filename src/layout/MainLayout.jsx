// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Container, Aside, Brand, Content } from './styles'

export function MainLayout() {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>ToDo 4You</h1>
      </Brand>
      <Aside />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
