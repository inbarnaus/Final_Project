
import Login from './Components/UserComponents/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoggedIn: true
    }
  }
  
  setLogged = (logged) =>{
      this.setState({isLoggedIn: logged});
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="App">
        {isLoggedIn ? 
          <Dashboard />
          :
          <Login />
        }
      </div>
    );
  }
}

export default App;