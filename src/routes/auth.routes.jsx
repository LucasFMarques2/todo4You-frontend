// src/routes/AuthRoutes.js
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/signIn'
import { SignUp } from '../pages/signUp'

export function AuthRoutes() {
  const user = localStorage.getItem('@todo4you:user')

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/cadastro" element={<SignUp />} />
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}
