
import Login from './Components/UserComponents/Login/Login'
import Dashboard from './Dashboard'
import React, { Component } from 'react';
import axios from 'axios';

axios.create({baseURL: `http://localhost:8080` // the url of our server
})

class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoggedIn: false
    }
  }

  setLogged = (logged) =>{
      this.setState({isLoggedIn: logged});
  }

  async componentDidMount(){
    axios.get('/log')
    .then(response => {
      this.setLogged(response.data.succeed)
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