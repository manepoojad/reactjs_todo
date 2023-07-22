import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function LogIn() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const handleUserNameChange = (e) => {
    const { value, type, name } = e.target
    setUserName(value)
  }
  console.log(userName)

  const handlePasswordChange = (e) => {
    const { value, type, name } = e.target
    setPassword(value)
  }
  console.log(password)

  const handleSubmit = () => {
    const loginDetails = {
      userName: userName,
      password: password
    }
    console.log(loginDetails)

    const getNewStringifyData = JSON.stringify(loginDetails)
    localStorage.setItem("loginData", "getNewStringifyData")
    console.log(getNewStringifyData)
    navigate("/")

  }

  const handleCancelLogin = () => {
    setUserName("")
    setPassword("")

    // navigate("/project")
  }

  return (
    <div className='loginFormWrapper'>
      <form>
        <label><b>Username</b></label>
        <input
          type="text"
          name='userName'
          placeholder="Enter Username"
          value={userName}
          onChange={e => handleUserNameChange(e)}
        />
        <br />
        <label><b>Password</b></label>
        <input
          type="password"
          name='password'
          placeholder="Enter Password"
          value={password}
          onChange={e => handlePasswordChange(e)}
        />
        <br />
        <div>
          <button type="button" onClick={() => handleSubmit()}>LogIn</button>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn" onClick={() => handleCancelLogin()}>Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>

      </form>
    </div>
  )
}

export default LogIn