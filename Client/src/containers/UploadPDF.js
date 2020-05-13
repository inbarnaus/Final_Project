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
        <div class="form-group">
        <label class="w3-text-blue"><b>מס' בלוק</b></label>
        <input class="w3-input w3-border" type="text" name="block"/>
        </div>
        <div class="form-group">
        <label class="w3-text-blue"><b>מס' בניין</b></label>
        <input class="w3-input w3-border" type="text" name="building"/>
        </div>
        <div class="form-group">
        <label class="w3-text-blue"><b>מס' דירה</b></label>
        <input class="w3-input w3-border" type="text" name="apartment"/>
        </div>
        <div class="form-group">
          
        <label class="w3-text-blue"><b></b></label>
        <input className="input" type="file" name="sampleFile" />
        </div>
        <div class="form-group">
          
        <label class="w3-text-blue"><b></b></label>
        <input className="input" type='submit' value='submit!' onClick="return handleClick();"/>
        </div>
    </form> 
    </body> 
    );
}