import React, {Component} from "react";
import '../css/AddG4.css'
import { withRouter } from 'react-router-dom';
import address from '../server_address'

class AddG4 extends Component {
  render(){
    return (
      <form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action={address + '/addg4'}
        method='post' 
        encType="multipart/form-data">
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type="file" name="sampleFile" />
        </div>
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type='submit' onClick={() => {alert('הקובף הועלה בהצלחה!');}} value='submit!' />
        </div>
    </form> 
    );
  }
}

export default withRouter(AddG4);
