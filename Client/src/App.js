
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
<<<<<<< HEAD
      isLawyer: true
=======
      isLawyer: false
>>>>>>> version1
    }
  }

  setLogged = (logged) =>{
    this.setState({isLoggedIn: logged});
  }

  setType = (bool) =>{
    this.setState({isLawyer: bool});
  }

<<<<<<< HEAD
  handleLoginSubmit = (isLoggedIn) =>{
    this.setState({isLoggedIn});
  }

  
=======
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

>>>>>>> version1
  
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    const isLawyer = this.state.isLawyer;
    return(
      <div className='background-blue'>
<<<<<<< HEAD
        {isLoggedIn ? 
        (isLawyer ? <LawyerDashboard /> : <ClientDashboard />)  
          :
          <Login handleLogin={this.handleLoginSubmit}/>
        }
=======
        <Greeting isLoggedIn={isLoggedIn} isLawyer={isLawyer} />
>>>>>>> version1
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