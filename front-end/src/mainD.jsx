import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PagInicial from './PagInicial.jsx'
import './Dort.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PagInicial />

  </StrictMode>,
)
