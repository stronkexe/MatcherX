import axios from "axios"
import { useState } from "react"
import './Signup.scss'

export const Signup = () => {

  const [inputData, setInputData] = useState({ firstName: '', lastName: '', username: '', gender: 1, email: '', password: '' })

  const _signup = async () => {
    try {
      console.log('input data: ', inputData)

      // // check data first
      const res = await axios.post(`http://localhost:8080/auth/signup`, {
        first_name: inputData.firstName,
        last_name: inputData.lastName,
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

  const handleGenderChange = (e: any) => {
    const x = e.target.value === 'Male' ? 1 : 0
    setInputData({ ...inputData, gender: x})
  }

  return (
    <div className="Signup">
      <div className="col-1">
        <input type="text" placeholder="first name" onChange={(e) => { setInputData({ ...inputData, firstName: e.target.value }) }} />
        <input type="text" placeholder="last name" onChange={(e) => { setInputData({ ...inputData, lastName: e.target.value }) }} />
      </div>
      <div className="col-2">
        <input type="text" placeholder="username" onChange={(e) => { setInputData({ ...inputData, username: e.target.value }) }} />
        <div className='roomType'>
            <span>
                <input type="radio" name="genderOptions" value="Male" onChange={handleGenderChange} />
                Male
            </span>
            <span>
                <input type="radio" name="genderOptions" value="Female" onChange={handleGenderChange} />
                Female
            </span>
        </div>
      </div>
      <div className="col-3">
        <input type="email" placeholder="email" onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} />
        <input type="password" placeholder="password" onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} />
        <input type="password" placeholder="confirm password" onChange={(e) => { setInputData({ ...inputData, password: e.target.value }) }} />
      </div>
      <div className="submit">
        <button onClick={_signup}>sign up</button>
        <a href="/login">you already have an account?</a>
      </div>
    </div>
  )
}
