import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import AppRoute from './AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoute/>
  </StrictMode>,
)
