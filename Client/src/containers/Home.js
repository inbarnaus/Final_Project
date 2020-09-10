import React, {Component} from "react";
import "../css/Home.css";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {Form} from "react-bootstrap";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import address from '../server_address';

function createData(blockNum, buildNum, apartNum, purchaseDate, reportDate) {
  return { blockNum, buildNum, apartNum, purchaseDate, reportDate };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    size: "small",
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Home extends Component {
  constructor(){
    super()

    this.state = {
      reports: [{
        blockNum: '',
        buildNum: '',
        apartNum: '',
        purchaseDate: '',
        reportDate: ''
      }]
    }
  }
  

  UNSAFE_componentWillMount() {
    axios.get('/reports')
        .then(response => {
          console.log(response.data)
          if(response.data !== null)
              this.setState({
                reports: response.data.res
              })
            console.log(this.state.reports)
        })
  }

  makerows(){
    var rows = [];
    this.state.reports.forEach(element => {
      rows.push(createData(element.blockNum, element.buildNum, element.apartNum, element.purchaseDate, element.reportDate))
    });
    return rows;
  }

  render(){
    const rows = this.makerows()
    
    console.log(this.state.reports)
    return (
      <Form className = "custom-file-translate-scss"
        id='uploadForm' 
        action={address + '/reports'}
        method='post' 
        encType="multipart/form-data">
          <div className="Home">
          <div className="lander">
          <h1>דיווחים- טרם דווחו</h1>
          </div>
          </div>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">תאריך אחרון לדיווח</StyledTableCell>
              <StyledTableCell align="right">תאריך רכישה</StyledTableCell>
              <StyledTableCell align="right">דירה</StyledTableCell>
              <StyledTableCell align="right">בניין</StyledTableCell>
              <StyledTableCell align="right">מגרש</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell align="right" href="/" key={2}>דווח</StyledTableCell>
                <StyledTableCell align="right" key={3}>{row.reportDate}</StyledTableCell>
                <StyledTableCell align="right" key={4}>{row.purchaseDate}</StyledTableCell>
                <StyledTableCell align="right" key={5}>{row.apartNum}</StyledTableCell>
                <StyledTableCell align="right" key={6}>{row.buildNum}</StyledTableCell>
                <StyledTableCell align="right" key={7}>{row.blockNum}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Form>
    );
  }
}

export default Home;

  // return (
  //   <div className="Home">
  //     <div className="lander">
  //       <h1>דיווחים</h1>
  //       <p>כאן יופיעו רשימת דיווחים שטרם טופלו</p>
  //     </div>
  //   </div>
  // );