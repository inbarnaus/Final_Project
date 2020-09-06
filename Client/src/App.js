
import Login from './Components/UserComponents/Login/Login'
import LawyerDashboard from './LawyerDashboard'
import ClientDashboard from './ClientDashboard'
import React, { Component } from 'react';
import axios from 'axios';

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

  // setState = (state) => {
  //   this.setState({isLoggedIn: state.data.succeed});
  //   this.setState({isLawyer: state.data.res.isLawyer});
  // }

  setLogged = (logged) =>{
      this.setState({isLoggedIn: logged});
  }

  setType = (bool) =>{
    this.setState({isLawyer: bool});
}

  async componentDidMount(){
    axios.get('/log')
    .then(response => {
      if(response.data !== ""){
        console.log(response.data)
        this.setLogged(response.data.succeed)
        this.setType(response.data.res.isLawyer)
      }
    })  
  }
  
  render() {
    const {isLoggedIn} = this.state
    const {isLawyer} = this.state
    return (
      <div className='background-blue'>
        {isLoggedIn ? <LawyerDashboard />
          // (isLawyer ? <LawyerDashboard /> 
          //   : 
          //   <ClientDashboard />)  
          :
          <Login />
        }
      </div>
    );
  }
}

export default App;