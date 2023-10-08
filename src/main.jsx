import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './routes/Register.jsx';
import ConfirmationEmail from './routes/ConfirmationEmail';
import CompleteYourProfile from './routes/CompleteYourProfile'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Projects from './routes/Projects'
import OpenMediGen from './routes/OpenMediGen';
import Blogs from './routes/Blogs';
import QuantumFrontier from './routes/QuantumFrontier';

const routes = [
  {
    path: '/',
    element: <Register/>,
  },
  {
    path: '/email-confirmation',
    element: <ConfirmationEmail />
  },
  {
    path: '/complete-your-profile',
    element: <CompleteYourProfile />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/blog',
    element: <Blogs />
  },
  {
    path: '/OpenMediGen',
    element: <OpenMediGen />
  },
  {
    path: '/QuantumFrontier',
    element: <QuantumFrontier />
  }
]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/O-science/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
