import React, {Component} from "react";
import './SearchReport.css'
import { withRouter } from 'react-router-dom';

class SearchReport extends Component { 
  constructor(){
    super()
    this.state = {reports: []}
  }

  componentDidMount(){
    fetch('/api/searchrepo')
    .then(res => res.json())
    .then(reports => this.setState({reports}, ()=>{console.log("Reports fetched..", reports)}))
    .catch(err => err);
  }

  render(){
    return (
      <form
      className = "custom-file-translate-scss"
      id='uploadForm'
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
        <button className="input" onClick={()=> this.props.history.push('/')} type='submit'>Submit</button>
        </div>
    </form> 
          );
      };
}

export default withRouter(SearchReport);