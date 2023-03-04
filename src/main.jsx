import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import './styles/css/styles.css'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>,
)