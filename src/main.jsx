import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // main css file
import './index.scss'
import { MenuPageProvider } from './contexts/MenuPage'
// style

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenuPageProvider>
    <App />
    </MenuPageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
