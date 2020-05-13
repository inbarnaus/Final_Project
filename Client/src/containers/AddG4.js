import React from "react";
import './AddG4.css'

export default function UploadPDF() {
    return (
      <div className="custom-file-translate-scss">
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
        />
        <label className="custom-file-label" htmlFor="inputGroupFile01">
          Choose file
        </label>
      </div>
      <br></br>
      <br></br>
      <div className="input-group-prepend">
      <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
        </span>
      </div>
    </div>
    );
}