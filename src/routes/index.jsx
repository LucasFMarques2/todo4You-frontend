import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../context/userAuthContext'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Carregando...</div>
  }

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
