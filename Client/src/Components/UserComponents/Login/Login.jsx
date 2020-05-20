import React, { Component, Redirect } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom';


class Login extends Component {

    handleClick = () => {
      fetch("https://localhost:8080/login", {
        method: "post",
      })
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
      });

      console.log('The link was clicked.');
      // fetch('http://localhost:8080/login')
      // .then(response => response.json())
      // .then(data => console.log(data));
      // return <Redirect to="/" />;
      this.props.history.push('/');
    }

   render(){
        return (
            <form
              className = "custom-file-translate-scss"
              id='login' 
              action='http://localhost:8080/login' 
              method='post' 
              encType="multipart/form-data">
                <h3>Login</h3>

                <div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
   }
    }

    export default withRouter(Login);



// import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import {PostData} from '../../../PostData';
// import './login.css';

// class Login extends Component {

//   constructor(){
//     super();
   
//     this.state = {
//      username: '',
//      password: '',
//      redirectToReferrer: false
//     };

//     this.login = this.login.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   login() {
//     if(this.state.username && this.state.password){
//       PostData('',this.state).then((result) => {
//         console.log('naus');
//        let responseJson = result;
//        if(responseJson.userData){         
//          sessionStorage.setItem('userData',JSON.stringify(responseJson));
//          this.setState({redirectToReferrer: true});
//        }  
//       });
//     }  
//    }

//   onChange(e){
//     this.setState({[e.target.name]:e.target.value});
//    }

//   render() {
//      if (this.state.redirectToReferrer) {
//       return (<Redirect to={'/'}/>)
//     }
//     if(sessionStorage.getItem('userData')){
//       return (<Redirect to={'/'}/>)
//     }
//      return (
//       <div className="row" id="Body">
//         <div className="medium-5 columns left">
//         <h4>Login</h4>
//         <label>Username</label>
//         <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
//         <label>Password</label>
//         <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
//         <input type="submit" className="button success" value="Login" onClick={this.login}/>
//         <a href="/signup">Registration</a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;


