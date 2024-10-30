import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import UserGated from './components/UserGated.jsx'
import TradingFee from './components/TradingFee.jsx'
import WalletRecovery from './components/WalletRecovery.jsx'
import ActiveLiquidity from './components/ActiveLiquidity.jsx'
import LoyaltyRetention from './components/LoyaltyRetention.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/user-gated' element={<UserGated/>}/>
    <Route path='/trading-fee' element={<TradingFee/>}/>
    <Route path='/wallet-recovery' element={<WalletRecovery/>}/>
    <Route path='/active-liquidity' element={<ActiveLiquidity/>}/>
    <Route path='/loyalty-retention' element={<LoyaltyRetention/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
  <RouterProvider router={router}/>
  </StrictMode>,
)
