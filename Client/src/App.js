
import Login from './Components/UserComponents/Login/Login'
import LawyerDashboard from './LawyerDashboard'
import ClientDashboard from './ClientDashboard'
import React, { Component } from 'react';
import axios from 'axios';
import address from './server_address';

axios.create({baseURL: address // the url of our server
})

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const isLawyer = props.isLawyer;
  if (isLoggedIn) {
    if(isLawyer)
      return <LawyerDashboard />;
    else
      return <ClientDashboard />;
  }
  else
    return <Login />;
}
class App extends Component {

  constructor(props) {
    super(props);
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

  handleLoginSubmit = (response) =>{
    console.log(response);
    this.setState(response);
  }

  
  
  render(){
    const {isLoggedIn, isLawyer} = this.state;
    
    return(
      <div className='background-blue'>
        {isLoggedIn ? 
        (isLawyer ? <LawyerDashboard /> : <ClientDashboard />)  
          :
          <Login handleLogin={this.handleLoginSubmit}/>
        }
      </div>
    )
  }
  
  // render() {
  //   const {isLoggedIn} = this.state
  //   const {isLawyer} = this.state
  //   return (
  //     <div className='background-blue'>
  //       {isLoggedIn ? 
  //         (isLawyer ? <LawyerDashboard /> 
  //           : 
  //           <ClientDashboard />)  
  //         :
  //         <Login />
  //       }
  //     </div>
  //   );
  // }
}

export default App;