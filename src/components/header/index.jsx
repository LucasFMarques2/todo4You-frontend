import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../context/userAuthContext'
import { Container, Profile, Logout } from './styles'
import { api } from '../../services/api'
import avatarDefault from '../../assets/default.jpeg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/avatars/${user.avatar.split('/').pop()}`
    : avatarDefault

  const navigation = useNavigate()

  function handleSingOut() {
    signOut()
    navigation('/')
  }

  return (
    <Container>
      <Profile to="/perfil">
        <img src={avatarUrl} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
