// src/routes/app.routes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { NewTasks } from '../pages/newTasks'
import { MainLayout } from '../layout/MainLayout'
import { Profile } from '../pages/profile'

export function AppRoutes() {
  return (
    <Routes>
      {/* Rota Home fora do MainLayout */}
      <Route path="/" element={<Home />} />
      {/* Roteamento com o MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/tarefas" element={<NewTasks />} />
        <Route path="/perfil" element={<Profile />} />
      </Route>
    </Routes>
  )
}
