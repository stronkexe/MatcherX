import axios from "axios"
import { useState } from "react"

export const Signup = () => {

  const [inputData, setInputData] = useState({ firstName: '', lastName: '', username: '', gender: 1, email: '', password: '' })

  const _signup = async () => {
    try {
      console.log('input data: ', inputData)

      // check data first
      const res = await axios.post(`http://localhost:8080/auth/signup`, {
        firsName: inputData.firstName,
        lastName: inputData.lastName,
        username: inputData.username,
        gender: inputData.gender,
        email: inputData.email,
        password: inputData.password
      }, { withCredentials: true })
      console.log('res', res.data)
    }
    catch (err) {
      console.error('errrror: ', err)
    }
  }

  return (
    <div className="Signup">
      <input type="text" placeholder="first name" onChange={(e) => { setInputData({ ...inputData, firstName: e.target.value }) }} />
      <input type="text" placeholder="last name" onChange={(e) => { setInputData({ ...inputData, lastName: e.target.value }) }} />
      <input type="text" placeholder="username" onChange={(e) => { setInputData({ ...inputData, username: e.target.value }) }} />
      <input type="radio" onChange={(e) => { setInputData({ ...inputData, gender: e.target.value }) }} />
      <input type="radio" onChange={(e) => { setInputData({ ...inputData, gender: e.target.value }) }} />
      
      <input type="email" placeholder="email" onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} />
      <input type="password" placeholder="password" onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} />
      <input type="password" placeholder="confirm password" onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} />
      <button onClick={_signup}>sign up</button>
      <a href="/login">you already have an account?</a>
    </div>
  )
}
