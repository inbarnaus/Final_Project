
import Login from './Components/UserComponents/Login/Login'
import Dashboard from './Dashboard'
import React, { Component } from 'react';
import axios from 'axios';
import {Permissioned} from  'react-permissions';

axios.create({baseURL: `http://localhost:8080` // the url of our server
})

class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoggedIn: false,
      isLawyer: false
    }
  }

  setLogged = (logged) =>{
      this.setState({isLoggedIn: logged});
  }

  setType = (bool) =>{
    this.setState({isLawyer: bool});
}

  async componentDidMount(){
    axios.get('/log')
    .then(response => {
      this.setLogged(response.data.succeed)
      this.setType(response.data.res.isLawyer)
    })  
  }
  
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className='background-blue'>
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