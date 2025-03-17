// context/userAuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const handleError = (err) => {
    const message =
      err.response?.data?.message || 'Ocorreu um erro. Tente novamente.'
    alert(message)
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('sessao', { email, password })
      const { user, acessToken } = response.data

      localStorage.setItem('@todo4you.com:user', JSON.stringify(user))
      localStorage.setItem('@todo4you.com:token', acessToken)

      api.defaults.headers.common.Authorization = `Bearer ${acessToken}`
      setData({ user, acessToken })
    } catch (err) {
      handleError(err)
    }
  }

  function signOut() {
    localStorage.removeItem('@todo4you.com:user')
    localStorage.removeItem('@todo4you.com:token')
    setData({})
  }

  async function updateProfile({ user, avatarFile, passwordOld, passwordNew }) {
    try {
      if (passwordOld || passwordNew) {
        if (!passwordOld || !passwordNew) {
          return alert('Preencha ambos os campos de senha.')
        }
        if (passwordNew.length < 8) {
          return alert('A nova senha deve ter pelo menos 8 caracteres.')
        }

        await api.put('/usuarios/senha', {
          old_password: passwordOld,
          password: passwordNew,
        })
      }

      if (avatarFile) {
        const validTypes = ['image/jpeg', 'image/png']
        if (!validTypes.includes(avatarFile.type)) {
          return alert('Formato de imagem inválido. Use JPEG ou PNG.')
        }
        if (avatarFile.size > 2 * 1024 * 1024) {
          return alert('A imagem deve ter no máximo 2MB.')
        }

        const fileUploadForm = new FormData()
        fileUploadForm.append('file', avatarFile)

        const response = await api.patch('usuarios/upload', fileUploadForm, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        user.avatar = response.data.avatarUrl
      }

      await api.patch('/usuarios/perfil', user)
      localStorage.setItem('@todo4you.com:user', JSON.stringify(user))
      setData({ user, token: data.token })
      alert('Perfil atualizado com sucesso!')
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@todo4you.com:user')
    const token = localStorage.getItem('@todo4you.com:token')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ acessToken: token, user: JSON.parse(user) })
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, updateProfile, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
