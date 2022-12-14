import React from 'react'
import './App.css';
import Home from './components/home/home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from  './components/sign-up/sign-up'  
import SignIn from './components/sign-in/sign-in'




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h1> MY CHATSCRUM </h1> */}
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }    
}

export default App;
