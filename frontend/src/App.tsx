import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Signup } from './pages/Auth/Signup'
import { Login } from './pages/Auth/Login'
import axios from 'axios'

axios.defaults.baseURL = `http://localhost:8080`
axios.defaults.withCredentials = true

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
