
import Login from './Components/UserComponents/Login/Login'
import LawyerDashboard from './LawyerDashboard'
import ClientDashboard from './ClientDashboard'
import React, { Component } from 'react';
import axios from 'axios';
import address from './server_address';

axios.create({baseURL: address // the url of our server
})

class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoggedIn: false,
      isLawyer: true
    }
  }

  setLogged = (logged) =>{
    this.setState({isLoggedIn: logged});
  }

  setType = (bool) =>{
    this.setState({isLawyer: bool});
  }

  handleLoginSubmit = (isLoggedIn) =>{
    this.setState({isLoggedIn});
  }

  
  
  render() {
    const {isLoggedIn} = this.state
    const {isLawyer} = this.state
    return (
      <div className='background-blue'>
        {isLoggedIn ? 
        (isLawyer ? <LawyerDashboard /> : <ClientDashboard />)  
          :
          <Login handleLogin={this.handleLoginSubmit}/>
        }
      </div>
    );
  }
}

export default App;