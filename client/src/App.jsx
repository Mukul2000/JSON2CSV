import './App.css';
import React, { useState } from 'react';
import Login from "./Components/Login/Login.jsx";



function App() {
  const [isLoggedIn, setLogin] = useState(false);
  console.log(isLoggedIn);
  if (!isLoggedIn)
    return <Login setLogin={setLogin} />
  else {
    return (
      <div>Hi you're logged in</div>
      // <Home />
    );
  }
}

export default App;
