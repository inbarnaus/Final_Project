
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
      isLoggedIn: true
    }
  }

  // async connect_server () {
  //   console.log('inbar');
  //   await axios.post('http://localhost:8080/login').then(res => {
  //     console.log(res.data.succeed);
  //     this.setLogged(res.data.succeed);
  //     console.log(this.isLoggedIn);
  //       // window.location.replace('http://localhost:3000');
  //       // window.history.pushState("", "", '/');
  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //   })//,  console.log('ghjk') );
  //   //   console.log('👉 Returned data:', response);
  //   // } catch (e) {
  //   //   console.log(`😱 Axios request failed: ${e}`);
  //   // }
  // }

  // conponentDidMount(){
  //   axios.get('http://localhost:8080/login').then(res=>{
  //     // if(res.body.success)
  //     return true; // TO CHANGE
  //   }).catch(error =>{
  //     console.log("Promise Rejected");
  //   });
  // }

  setLogged = (logged) =>{
      this.setState({isLoggedIn: logged});
  }
  
  render() {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn);
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