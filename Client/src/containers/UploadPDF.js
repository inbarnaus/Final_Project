import React from "react";
import { Form } from 'react-bootstrap';
import './UploadPDF.css'

export default function UploadPDF() {
    return (
        <Form inline className="custom-file-translate-scss">
        <Form.File
            id="custom-file-translate-scss"
          label="File input"
          custom
        />
      </Form>
    );
}