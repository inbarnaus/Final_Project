import React, { Component }  from "react";
import './UploadPDF.css'
import { withRouter } from 'react-router-dom';

class UploadPDF extends Component {

  handleClick = () => {
    console.log('The link was clicked.');
    // return <Redirect to="/" />;
    this.props.history.push('/');
  }

  render(){
    return (
      <body>
      <form
      className = "custom-file-translate-scss"
      id='uploadForm' 
      action='http://localhost:8080/uploadpdf' 
      method='post' 
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
        <button className="input" onClick={this.handleClick} type='submit'>Submit</button>
        </div>
    </form> 
    </body> 
    );
}
}

export default withRouter(UploadPDF);