import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layouts/main/MainLayout.jsx'
import Todos from './pages/to-do/Todos.jsx'
import Inprogress from './pages/in-progress/Inprogress.jsx'
import Completed from './pages/completed/Completed.jsx'
import AuthProvider from './provider/auth-provider/AuthProvider.jsx'
import Login from './pages/authentication/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path="/to-do's" element={<Todos></Todos>}></Route>
            <Route path="/in-progress" element={<Inprogress></Inprogress>}></Route>
            <Route path="/completed" element={<Completed></Completed>}></Route>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
