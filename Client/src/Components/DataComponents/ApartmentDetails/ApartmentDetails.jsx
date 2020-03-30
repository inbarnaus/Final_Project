import React, { Component } from "react";

class ApartmentDetails extends Component{

    constructor(apartment_req){
        super();
        console.log(apartment_req);
        this.state = apartment_req;
        // {
        //     block: block, 
        //     building: building, 
        //     apartment: apartment
        // };
        // console.log(this.state);
        
    }

    render(){
        console.log(this.state);
        const {apartment_req} = this.state;
        console.log(apartment_req);
        const block = this.state['block']; 
        const building = this.state['building'];
        const apartment = this.state['apartment'];
        // const apartment_req = this.state;
        return(
            <section class="ftco-section ftco-property-details">
                <div class="container">
                    <div class="row justify-content-right">
                        <div class="col-md-8"></div>
                        <div class="col-md-2">
                            <a href="/apartments" class="form-control btn btn-primary">שנה דירה</a>
                        </div>
                        <div class="col-md-2">
                            <div class="property-details">
                                <div class="text">
                                    <h2>פרטי רשומה</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pills">
                                <div class="bd-example bd-example-tabs">
                                    <div class="d-flex">
                                        <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
        
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">פרטי דירה</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">פרטי רכישה</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">פרטי דיווח</a>
                                            </li>
                                        </ul>
                                    </div>
        
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <ul class="features">
                                                        <li class="check">{apartment}</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2">
                                                    <ul>
                                                        <li>:מספר דירה</li>
                                                        <li>:מספר מחסן</li>
                                                        <li>:כמות כיוונים</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2">
                                                    <ul class="features">
                                                            <li class="check">{building}</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2">
                                                    <ul class="features">
                                                        <li class="check">:מספר בניין</li>
                                                        <li class="check">:מספר חניות</li>
                                                        <li class="check">:מספר חדרים</li>
                                                        <li class="check">:מחיר</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2">
                                                    <ul class="features">
                                                        <li class="check">{block}</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-2">
                                                    <ul class="features">
                                                        <li class="check">:מספר מגרש</li>
                                                        <li class="check">:מספר קומה</li>
                                                        <li class="check">:גודל מחסן</li>
                                                        <li class="check">:מרפסת/גינה</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
            
                                    <div class="tab-pane fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">{apartment}</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר דירה</li>
                                                    <li class="check">:מספר מחסן</li>
                                                    <li class="check">:ת"ז רוכש 2</li>
                                                    <li class="check">:תאריך רכישה</li>
                                                    <li class="check">:סכום משכנתא</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">{building}</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר בניין</li>
                                                    <li class="check">:מספר חניה 2</li>
                                                    <li class="check">:שם רוכש 1</li>
                                                    <li class="check">:מחיר רכישה</li>
                                                    <li class="check">:בנק משכנתא</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">{block}</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר מגרש</li>
                                                    <li class="check">:מספר חניה 1</li>
                                                    <li class="check">:ת"ז רוכש 1</li>
                                                    <li class="check">:שם רוכש 2</li>
                                                    <li class="check">:מספר שומה</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8"></div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">טופס סריקה</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:טופס סריקה</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                        <div class="row">
                                            <div class="col-md-2">

                                            </div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר דירה</li>
                                                    <li class="check">:ת"ז רוכש 2</li>
                                                    <li class="check">:יום חתימה</li>
                                                    
                                                </ul>
                                            </div>
                                            <div class="col-md-2"></div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר בניין</li>
                                                    <li class="check">:שם רוכש 1</li>
                                                    <li class="check">:חסרי/משפרי דיור</li>
                                                    <li class="check">:דווח/ לא דווח</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2"></div>
                                            <div class="col-md-2">
                                                <ul class="features">
                                                    <li class="check">:מספר מגרש</li>
                                                    <li class="check">:ת"ז רוכש 1</li>
                                                    <li class="check">:שם רוכש 2</li>
                                                    <li class="check">:יום אחרון לדיווח</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <input type="submit" value="שלח דיווח" class="form-control btn btn-primary"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }
}
export default ApartmentDetails;