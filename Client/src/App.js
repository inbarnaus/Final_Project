
import Login from './Components/UserComponents/Login/Login'
import LawyerDashboard from './LawyerDashboard'
import ClientDashboard from './ClientDashboard'
import React, { Component } from 'react';
import axios from 'axios';
import {Permissioned} from  'react-permissions';

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
    let response = await axios.get('/log');
    // .then(response => {
      console.log('/////');
      console.log(response);
      console.log('/////');
      if(response.data !== "" && response.data.succeed !== undefined){
        this.setLogged(response.data.succeed);
      }
      // this.setType(response.data.res.isLawyer)
    // })  
  }
  
  render() {
    const {isLoggedIn} = this.state
    const {isLawyer} = this.state
    return (
      <div className='background-blue'>
        {isLoggedIn ? 
        (isLawyer ? <LawyerDashboard /> : <ClientDashboard />)  
          :
          <Login />
        }
      </div>
    );
  }
}

export default App;