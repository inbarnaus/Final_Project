import React, {Component} from "react";
import '../css/ShowSearch.css'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ShowSearch extends Component { 
    constructor(props){
        super(props);
        this.state = {
            report: props.report
        }
    }

    // async componentDidMount(){
    //     axios.get('/showsearch')
    //     .then(response => {
    //         this.setState({
    //             report: response.data.res
    //         })
    //         console.log(this.state)
    //     })
    // }

    render(){
        return (
            <div>
                <br></br>
                <table className="w3-table">
                    <tbody>
                    <tr>
                    <th>כיוונים</th>
                    <th>מחיר דירה ממודד</th>
                    <th>הערות</th>
                    <th>מכירה במסגרת מחיר למשתכן</th>
                    <th>מחיר דירה נומינלי</th> 
                    <th>מספר חניות (כמות)</th>
                    <th>מספר מחסן</th>
                    <th>שטח מחסן</th>
                    <th>שטח מרפסת/גינה</th>
                    <th>שטח דירה אקווילנטי</th>
                    <th>שטח דירה</th>
                    <th>מס' חדרים</th>
                    <th>קומה</th>
                    <th>מספר דירה</th>
                    <th>מספר בניין</th>
                    <th>מספק בלוק</th>
                    </tr>
                    <tr>
                    <td>{this.state.report.dir}</td>
                    <td>{this.state.report.apartMMDprice}</td>
                    <td>{this.state.report.notes}</td>
                    <td>{this.state.report.apartTenantPrice}</td>
                    <td>{this.state.report.price}</td>
                    <td>{this.state.report.parkingNum}</td>
                    <td>{this.state.report.warehouseNum}</td>
                    <td>{this.state.report.warehouseArea}</td>
                    <td>{this.state.report.balconyArea}</td>
                    <td>{this.state.report.apartAreaAq}</td>
                    <td>{this.state.report.apartArea}</td>
                    <td>{this.state.report.roomNum}</td>
                    <td>{this.state.report.level}</td>
                    <td>{this.state.report.apartNum}</td>
                    <td>{this.state.report.buildNum}</td>
                    <td>{this.state.report.blockNum}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default withRouter(ShowSearch);