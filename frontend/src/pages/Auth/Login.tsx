import axios from "axios"
import { useState } from "react"

export const Login = () => {

  const [inputData, setInputData] = useState({ email: '', password: '' })

  const _login = async () => {
    try {
      const res = await axios.get(`/auth/login`)
      console.log(res.data)
    }
    catch (err) {
      console.error('errrror: ', err)
    }
  }
  return (
    <div className="Login">
      <input type="email" placeholder="email" onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} />
      <input type="password" placeholder="password" onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} />
      <button onClick={_login}>login</button>
    </div>
  )
}
