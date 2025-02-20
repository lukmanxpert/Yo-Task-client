import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainLayout from './layouts/main/MainLayout.jsx'
import Todos from './pages/to-do/Todos.jsx'
import Inprogress from './pages/in-progress/Inprogress.jsx'
import Completed from './pages/completed/Completed.jsx'
import AuthProvider from './provider/auth-provider/AuthProvider.jsx'
import Login from './pages/authentication/Login.jsx'
import PrivateRoute from './provider/protected-route/PrivateRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Navigate to={"/to-do's"}/>} />
              <Route path="/to-do's" element={<Todos />} />
              <Route path="/in-progress" element={<Inprogress />} />
              <Route path="/completed" element={<Completed />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
