import React, { Component } from 'react';
import {FormGroup, Button, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
import {MDBTable, MDBTableHead} from 'mdbreact';




const server_url = "http://localhost:8080/unreported";

class Unreported extends Component{

    header_attr = ['צפייה בפרטים', 'ימים לדיווח','דירה', 'בניין', 'מגרש'];

    constructor() {
        super();

            
        function header() {
            return <tr>
                <th>צפייה בפרטים</th>
                <th>ימים לדיווח</th>
                <th>דירה</th>
                <th>בניין</th>
                <th>מגרש</th>
                <th>#</th>
                </tr>;
        };

        
        function make_row(data){
            let watch_details = async(block, building, apartment) => {

            }
            return (
                <tr>
                <th>
                    <input type="submit" onClick={()=>watch_details(data['apartment_idx']['block'], data['apartment_idx']['building'], data['apartment_idx']['apartment'])}
                        value="לצפייה בפרטים" class="btn btn-primary py-3 px-5">
                    </input>
                </th>
                <th>{data['days_left']}</th>
                <th>{data['apartment_idx']['apartment']}</th>
                <th>{data['apartment_idx']['building']}</th>
                <th>{data['apartment_idx']['block']}</th>
                </tr>
            );
        }

        function make_table(data){
            let rows = []
            for(let i in data){
                
                rows.push(make_row(data[i]));
            }
            let ret = <tbody>{rows}</tbody>;
            
            return ret;
        }

        this.state = {
            propertie: <div>Loading...</div>
        };

        axios.get(server_url).then((res) => {
            console.log(res);
            this.setState({propertie : <MDBTable striped bordered hover>
            <MDBTableHead>
              {header()}
              </MDBTableHead>
              {make_table(res.data)}
              </MDBTable>
            });
        }).catch((err) => {
            console.log(err);
            this.setState ({propertie : <MDBTable striped bordered hover>
                <MDBTableHead>
                  {header()}
                  </MDBTableHead>
                  {make_table(err.data)}
                  </MDBTable>
            });
        });

        
    };

    render(){
        const {propertie} = this.state;
        return (
            <div>
            {propertie}
            </div>
        );
    }
}

export default Unreported;