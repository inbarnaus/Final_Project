import React, {Component} from "react";
import '../css/AddG4.css'
import { withRouter } from 'react-router-dom';
import address from '../server_address'
import axios from 'axios';

class AddG4 extends Component {
  constructor (){
    super();
    this.state = {
        file: null
    }
    // this.submit = this.submit.bind(this);
  }

  submit = async(e) =>{
    e.preventDefault();
    const {file} = this.state;
    const data = new FormData();
    data.append('file', file);
    let response = await axios.post(address + '/addg4', data);
    if(response.data.succeed){
      alert("קובץ הועלה בהצלחה");
    }
    else{
      alert(response.data.res);
    }
  }

  onChangeFile=event=>{
    this.setState({
      file: event.target.files[0],
    })
  }

  render(){
    return (
      <form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        // action={address + '/addg4'}
        // method='post' 
        onSubmit={this.submit}
        encType="multipart/form-data">
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type="file" name="sampleFile" onChange={this.onChangeFile}/>
        </div>
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type='submit' value={this.state.file ? this.state.file.name : 'העלה קובץ'} />
        </div>
    </form> 
    );
  }
}

export default withRouter(AddG4);
