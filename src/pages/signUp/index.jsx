import {
  ModalOverlay,
  ModalContent,
  SuccessIcon,
  ButtonClose,
  Background,
  FormContainer,
  SingInContainer,
} from './styles'
import { useState } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import confetti from 'canvas-confetti'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const navigate = useNavigate()

  const triggerSideCannons = () => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 1 },
      zIndex: 11,
    })
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 1 },
      zIndex: 11,
    })
  }

  async function handleSignIn(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      setError('Todos os campos são obrigatórios!')
      return
    }

    if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres!')
      return
    }

    api
      .post('/usuarios', { name, email, password })
      .then(() => {
        setIsSuccessModalOpen(true)
        triggerSideCannons()
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <SingInContainer>
      <FormContainer>
        <h1>ToDo 4You</h1>
        <p>Suas tarefas no azul</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder={'Nome'}
          type="text"
          icon={<FiUser />}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

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

        <Button title="Cadastrar" onClick={handleSignIn} />

        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </FormContainer>
      <Background />

      <Dialog.Root
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
      >
        <Dialog.Portal>
          <ModalOverlay>
            <ModalContent>
              <SuccessIcon />
              <h2>Usuário cadastrado com sucesso!</h2>
              <ButtonClose onClick={() => navigate('/')}>OK</ButtonClose>
            </ModalContent>
          </ModalOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </SingInContainer>
  )
}
