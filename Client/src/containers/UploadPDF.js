import React, { useRef }  from "react";
import './UploadPDF.css'

export default function UploadPDF() {
  const inputRef = useRef('uploadForm');
    return (
      <body>
      <form ref = {inputRef}
      className = "custom-file-translate-scss"
      id='uploadForm' 
      action='http://localhost:8080/uploadpdf' 
      method='post' 
      encType="multipart/form-data">
        <input className="input" type="file" name="sampleFile" />
        <input className="input" type='submit' value='Upload!' />
        <br></br>
    </form> 
    </body> 
    );
}