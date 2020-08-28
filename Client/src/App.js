
import Login from './Components/UserComponents/Login/Login'
import LawyerDashboard from './LawyerDashboard'
import ClientDashboard from './ClientDashboard'
import React, { Component } from 'react';
import axios from 'axios';

axios.create({baseURL: `https://itayinbar.herokuapp.com` // the url of our server
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

  // async componentDidMount(){
  //   axios.get('https://itayinbar.herokuapp.com/log')
  //   .then(response => {
  //     console.log('/////');
  //     console.log(response);
  //     console.log('/////');
  //     if(response.data !== "" && response.data.succeed !== undefined){
  //       this.setLogged(response.data.succeed);
  //       this.setType(response.data.res.isLawyer)
  //     }
      
  //   })  
  // }

  // handleLoginSubmit = async (email, password) => {
  //   axios.post('/login').then(res => {
  //     if(res.data.succeed){
  //       this.setLogged(res.data.succeed);
  //     }
  //     else{
  //       alert(res.data.res);
  //     }
  //   });
  // }
  
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