// Header.js
import { useEffect, useState } from 'react'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../context/userAuthContext'
import {
  Container,
  Profile,
  Logout,
  Weather,
  InformationContainer,
} from './styles'
import { api } from '../../services/api'
import avatarDefault from '../../assets/default.jpeg'
import { useNavigate } from 'react-router-dom'
import sunIcon from '../../assets/sun.png'
import rainIcon from '../../assets/rain.png'

export function Header() {
  const { signOut, user } = useAuth()
  const [weather, setWeather] = useState(null)
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/avatars/${user.avatar.split('/').pop()}`
    : avatarDefault
  const navigation = useNavigate()

  useEffect(() => {
    api
      .get('/weather')
      .then((response) => {
        setWeather({
          city: response.data.city,
          temp: response.data.temp,
          icon: response.data.icon,
        })
      })
      .catch((error) => console.error('Erro ao buscar clima:', error))
  }, [])

  function handleSingOut() {
    signOut()
    navigation('/')
  }

  return (
    <Container>
      <InformationContainer>
        <Profile to="/perfil">
          <img src={avatarUrl} alt="Foto do usuário" />
          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
        {weather && (
          <Weather>
            {weather.icon === 'rain' ? (
              <img src={rainIcon} alt="icone de chuva" />
            ) : (
              <img src={sunIcon} alt="icone de sol" />
            )}
            <div>
              <span>{weather.temp}°C</span>
              <span>{weather.city}</span>
            </div>
          </Weather>
        )}
      </InformationContainer>
      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
