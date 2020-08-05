import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import '../css/EditReport.css'
import axios from 'axios';

class EditReport extends Component { 
    constructor(){
        super();
        this.state = {
            // report:[]
            report: {
                apartArea: 70,
                apartAreaAq: "-",
                apartMMDprice: "-",
                apartNum: 2,
                apartNumPrice: 1200000,
                apartTenantPrice: 900000,
                balconyArea: 10,
                blockNum: 112,
                buildNum: 1,
                dir: 5,
                level: 2,
                notes: "היי, שלום עולם",
                parkingNum: 1,
                parkingQuantity1: 12,
                parkingQuantity2: "-",
                roomNum: 2,
                warehouseArea: 5,
                warehouseNum: 1
            }
        }
    }

    async componentDidMount(){
        axios.get('/editrepo')
        .then(response => {
            // this.setState({
            //     report: response.data.res
            // })
            console.log(this.state)
        })
    }

    render(){
        return (
            <div className="testbox">
        <form 
            className = "custom-file-translate-scss"
            id='uploadForm' 
            action='http://localhost:8080/addPurchase' 
            method='post' 
            encType="multipart/form-data">
            <h1>עריכת פרטי רכישה</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="item">
            <p>פרטי רוכש/ים</p>
            <br></br>
            <br></br>
            <div className="name-item">
                <input type="text" name="idclient1" placeholder="תז רוכש 1" size="60" />
                <input type="text" name="nameclient1" placeholder="שם רוכש 1" size="60" />
            </div>
            <div className="name-item">
                <input type="text" name="idclient2" placeholder="תז רוכש 2" size="60" />
                <input type="text" name="nameclient2" placeholder="שם רוכש 2" size="60" />
            </div>
            </div>
            
            <div className="item">
            <p>פרטי הרשומה</p>
            <br></br>
            <br></br>

            <div className="item">
            <input type="text" name="apart" value={this.state.report.apartNum} placeholder={this.state.report.apartNum} size={60} readonly="readonly"/>
            <lable> מספר בלוק </lable>
            <input type="text" name="block" value={this.state.report.blockNum} placeholder={this.state.report.blockNum} readonly="readonly"/>
            <lable> מספר בניין </lable>
            <input type="text" name="build" value={this.state.report.buildNum} placeholder={this.state.report.buildNum} readonly="readonly"/>
            <lable> מספר דירה </lable>
            </div>
            
            <div className="item">
            <input type="text" name="roomNum" placeholder={this.state.report.roomNum} disabled/>
            <lable> מספר קומה </lable>
            <input type="text" name="level" placeholder={this.state.report.level} disabled/>
            <lable> מספר כיוונים </lable>
            <input type="text" name="dir" placeholder={this.state.report.dir} disabled/>
            <lable> מספר חדרים </lable>
            </div>
            
            <div className="item">
            <input type="text" name="balconyArea" placeholder={this.state.report.balconyArea} disabled/>
            <lable> שטח דירה </lable>
            <input type="text" name="apartArea" placeholder={this.state.report.apartArea} disabled/>
            <lable> שטח דירה אקווילנטי </lable>
            <input type="text" name="apartAreaAq" placeholder={this.state.report.apartAreaAq} disabled/>
            <lable> שטח מרפסת/גינה </lable>
            </div>

            <br></br>

            <div className="item">
            <input type="text" name="parkingQuantity2" placeholder={this.state.report.parkingQuantity2} />
            <lable> מספר חניות </lable>
            <input type="text" name="parkingNum" placeholder={this.state.report.parkingNum} />
            <lable> מספר חניה 1 </lable>
            <input type="text" name="parkingQuantity1" placeholder={this.state.report.parkingQuantity1} />
            <lable> מספר חניה 2 </lable>
            </div>

            <div className="item">
            <input type="text" name="apartNumPrice" placeholder={this.state.report.apartNumPrice} />
            <lable> מספר מחסן </lable>
            <input type="text" name="warehouseNum" placeholder={this.state.report.warehouseNum} />
            <lable> שטח מחסן </lable>
            <input type="text" name="warehouseArea" placeholder={this.state.report.warehouseArea} />
            <lable> מחיר דירה </lable>
            </div>


            </div>
            <div className="item">
            <p>הערות</p>
            <textarea name="notes" type="text" rows="4">{this.state.report.notes}</textarea>
            </div>

            <br></br>
            
            <div className="item">
            <p>הכנס תאריך רכישה</p>
            <br></br>
            <br></br>
            <input type="date" id="start" name="purchaseDate"/>
            </div>
            
            <div className="btn-block">
            <button type="submit" href="/">שלח</button>
            </div>
        </form>
        </div>
        );
    };
}

export default withRouter(EditReport);