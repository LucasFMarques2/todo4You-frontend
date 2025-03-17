import { Background, FormContainer, SingInContainer } from './styles'
import { useState } from 'react'
import { useAuth } from '../../context/userAuthContext'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(event) {
    event.preventDefault()

    if (!email || !password) {
      setError('Todos os campos são obrigatórios!')
      return
    }

    setError('')
    signIn({ email, password })
  }

  return (
    <SingInContainer>
      <FormContainer>
        <h1>ToDo 4You</h1>
        <p>Suas tarefas no azul</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder={'E-mail'}
          type="text"
          icon={<FiMail />}
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          required
        />

        <Input
          placeholder={'Password'}
          type="password"
          icon={<FiLock />}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        {error && <span className="erroSpan">{error}</span>}

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/cadastro">Criar conta</Link>
      </FormContainer>
      <Background />
    </SingInContainer>
  )
}
