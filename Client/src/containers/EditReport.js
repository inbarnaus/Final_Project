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
      <form action="/">
        <h1>עריכת פרטי רכישה</h1>
        <div className="item">
          <p>פרטי רוכש/ים</p>
          <div className="name-item">
            <input type="text" name="name" placeholder="תז רוכש 1" />
            <input type="text" name="name" placeholder="שם רוכש 1" />
          </div>
          <div className="name-item">
            <input type="text" name="name" placeholder="תז רוכש 2" />
            <input type="text" name="name" placeholder="שם רוכש 2" />
          </div>
        </div>
        
        <div className="item">
          <p>פרטי הרשומה</p>
          <input type="text" name="name" placeholder={"מספר דירה: " + this.state.report.apartNum} disabled/>
          <input type="text" name="name" placeholder={"מספר בניין: " + this.state.report.buildNum} disabled/>
          <input type="text" name="name" placeholder={"מספר בלוק: " + this.state.report.blockNum} disabled/>

          <div className="item">
          <input type="text" name="name" placeholder={"מספר כיוונים: " + this.state.report.dir} disabled/>
          <input type="text" name="name" placeholder={"מספר חדרים: " + this.state.report.roomNum} disabled/>
          <input type="text" name="name" placeholder={"מספר קומה: " + this.state.report.level} disabled/>
          </div>

          <div className="item">
          <input type="text" name="name" placeholder={"שטח מרפסת/גינה: " + this.state.report.balconyArea} disabled/>
          <input type="text" name="name" placeholder={"שטח דירה אקווילנטי: " + this.state.report.apartAreaAq} disabled/>
          <input type="text" name="name" placeholder={"שטח דירה: " + this.state.report.apartArea} disabled/>
          </div>
          <div className="item">
          <input type="text" name="name" placeholder={"מספר חניה 2: " + this.state.report.parkingQuantity2} />
          <input type="text" name="name" placeholder={"מספר חניה 1: " + this.state.report.parkingQuantity1} />
          <input type="text" name="name" placeholder={"מספר חניות: " + this.state.report.parkingNum} />
          </div>

          <div className="item">
          <input type="text" name="name" placeholder={"מספר מחסן: " + this.state.report.warehouseNum} />
          <input type="text" name="name" placeholder={"שטח מחסן: " + this.state.report.warehouseArea} />
          </div>

          <div className="item">
          <input type="text" name="name" placeholder={"מחיר דירה ממודד: " + this.state.report.apartMMDprice} />
          <input type="text" name="name" placeholder={"מחיר במסגרת מחיר למשתכן: " + this.state.report.apartTenantPrice} />
          <input type="text" name="name" placeholder={"מחיר דירה נומינלי: " + this.state.report.apartNumPrice} />
          </div>
        </div>
        <div className="item">
          <p>הערות</p>
        <textarea rows="4">{this.state.report.notes}</textarea>
        </div>
        
        <div className="item">
        <p>הכנס תאריך רכישה</p>
        <input type="date" id="start" name="trip-start"/>
        </div>
        
        <div className="item">
          <p>Name</p>
          <div className="name-item">
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
        </div>
        <div className="item">
          <p>Daytime Phone</p>
          <input type="text" name="name"/>
        </div>
        <div className="item">
          <p>Your Address</p>
          <input type="text" name="name" placeholder="Street address"/>
          <input type="text" name="name" placeholder="Street address line 2"/>
          
        </div>
        
        <div className="item">
          <p>Email</p>
          <input type="text" name="name"/>
        </div>
        <div className="btn-block">
          <button type="submit" href="/">SEND</button>
        </div>
      </form>
    </div>
        );
    };
}

export default withRouter(EditReport);