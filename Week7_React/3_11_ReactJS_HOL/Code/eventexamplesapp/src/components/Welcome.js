import React from 'react'

const Welcome = () => {

    function handleWelcome(){
        alert("Welcome")
    }

  return (
    <div>
      <button onClick={handleWelcome}>Say Welcome</button>
    </div>
  )
}

export default Welcome
