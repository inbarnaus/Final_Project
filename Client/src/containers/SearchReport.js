import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './SearchReport.css'

export default function SearchReport() {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="3">
        <br></br>
      <form id="form_login">
      <div class="form-group">
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          מס' ג4
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        </div>
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          מס' בלוק
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          מס' בניין
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          מס' דירה
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <div className="text-center mt-4">
                  <MDBBtn color="warning">
                    חפש
                    <MDBIcon far icon="paper-plane"/>
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

