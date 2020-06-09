import React, { Component }  from "react";
import './UploadPDF.css'
import { withRouter } from 'react-router-dom';
import axios from "axios";
class UploadPDF extends Component {
  
  // handleClick = async () => {
  //   let res = await axios.post('http://localhost:8080/uploadpdf', {});
  //   console.log(res);
  //   //return this.props.history.push('/');
  // }

  render(){
    return (
      <form
      className = "custom-file-translate-scss"
      id='uploadForm' 
      action='http://localhost:8080/uploadpdf' 
      method='Post' 
      encType="multipart/form-data">
        <div className="form-group">
        <label className="w3-text-blue"><b>מס' בלוק</b></label>
        <input className="w3-input w3-border" type="text" name="block"/>
        </div>
        <div className="form-group">
        <label className="w3-text-blue"><b>מס' בניין</b></label>
        <input className="w3-input w3-border" type="text" name="building"/>
        </div>
        <div className="form-group">
        <label className="w3-text-blue"><b>מס' דירה</b></label>
        <input className="w3-input w3-border" type="text" name="apartment"/>
        </div>
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <input className="input" type="file" name="sampleFile" />
        </div>
        <div className="form-group">
          
        <label className="w3-text-blue"><b></b></label>
        <button className="input" onClick={() => {alert('הקובף הועלה בהצלחה!');}} type='submit'>Submit</button>
        </div>
    </form> 
    );
}
}

export default withRouter(UploadPDF);
