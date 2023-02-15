import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
// style
import './index.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
  </React.StrictMode>,
)
