import React, {Component} from "react";
import './SearchReport.css'
import { withRouter } from 'react-router-dom';

class SearchReport extends Component { 
  render(){
    return (
      <form
      className = "custom-file-translate-scss"
      id='uploadForm' 
      action='http://localhost:8080/api/searchrepo' 
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
        <input className="input" type='submit' value='submit!' />
        </div>
    </form> 
          );
      };
}

export default withRouter(SearchReport);