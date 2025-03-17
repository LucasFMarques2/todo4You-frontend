import { AvatarContainer, Avatar } from './styles'
import { FiArrowLeft, FiCamera, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { api } from '../../services/api'
import { useAuth } from '../../context/userAuthContext'
import avatarDefault from '../../assets/default.jpeg'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/avatars/${user.avatar.split('/').pop()}`
    : avatarDefault

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(event) {
    event.preventDefault()
    const updated = {
      name,
      newPassword: passwordNew,
      oldPassword: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <AvatarContainer>
      <div>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h2>Editar perfil</h2>
      </div>
      <form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          icon={<FiUser />}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          onChange={(e) => setPasswordOld(e.target.value)}
          icon={<FiLock />}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          onChange={(e) => setPasswordNew(e.target.value)}
          icon={<FiLock />}
        />
        <Button
          type={'submit'}
          onClick={handleUpdate}
          title={'Salvar perfil'}
        />
      </form>
    </AvatarContainer>
  )
}
