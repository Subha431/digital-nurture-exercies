// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import LogoutPage from './components/LogoutPage';
import LoginPage from './components/LoginPage';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);

  function handleLogout(){
    setLoggedIn(false);
  }
  function handleLogin(){
    setLoggedIn(true);
  }

  if(isLoggedIn){
    return(
      <LogoutPage handleLogout={handleLogout}/>
    )
  }
  else{
    return(
      <LoginPage handleLogin={handleLogin}/>
    )
  }
}

export default App;
