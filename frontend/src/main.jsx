import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import UserGated from './components/UserGated.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/user-gated' element={<UserGated/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
  <RouterProvider router={router}/>
  </StrictMode>,
)
