import React, { Component }  from "react";
import './AddG4.css'
import { withRouter } from 'react-router-dom';

class AddG4 extends Component {
  
  // handleClick = () => {
  //   return this.props.history.push('/');
  // }

  render(){
    return (
      <body>
      <form
      className = "custom-file-translate-scss"
      id='addg4' 
      action='http://localhost:8080/addg4' 
      method='post' 
      encType="multipart/form-data">
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type="file" name="sampleFile" />
        </div>
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" onClick={() => {alert('הקובף הועלה בהצלחה!'); this.props.history.push('/');}}
         type="button"/>
        </div>
    </form> 
    </body> 
    );
}
}

export default withRouter(AddG4);