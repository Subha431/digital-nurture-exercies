import React from 'react'

const LogoutPage = (props) => {
  return (
    <div>
      <h2>Welcome back</h2>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutPage
