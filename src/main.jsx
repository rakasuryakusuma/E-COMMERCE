import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter, Router, RouterProvider
} from 'react-router-dom'
import Shop from './pages/Shop/Shop.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'shop',
    element: <Shop />
  },
  {
    path: 'about',
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
