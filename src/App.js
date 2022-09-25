import React from 'react'
import './App.css';
// import Home from './components/home/home'
// import SignUp from  './components/sign-up/sign-up'  
// import SignIn from './components/sign-in/sign-in'
// import {BrowserRouter, Route} from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
        <div className="App">
          <h1> MY CHATSCRUM </h1>
          {/* <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} /> */}
        </div>
      // </BrowserRouter>
    );
  }    
}

export default App;
