import React from 'react'

const LoginPage = (props) => {
  return (
    <div>
      <h2>Please sign up.</h2>
      <button onClick={props.handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
