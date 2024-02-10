import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route index element={<Signin />} />
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
