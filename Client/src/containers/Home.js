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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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

  async componentDidMount(){
    axios.get(address + '/unreported')
    .then(response => {
        this.setState({
            report: response.data.res
        })
        console.log(this.state)
    })
  }

  render(){
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
      <Form className = "custom-file-translate-scss"
        id='uploadForm' 
        action={address + '/reports'}
        method='post' 
        encType="multipart/form-data">
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">דווח</StyledTableCell>
              <StyledTableCell align="right">(קובץ סריקה (האם קיים</StyledTableCell>
              <StyledTableCell align="right">דירה</StyledTableCell>
              <StyledTableCell align="right">בניין</StyledTableCell>
              <StyledTableCell align="right">מגרש</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Form>
    );
  }
}
  // return (
  //   <div className="Home">
  //     <div className="lander">
  //       <h1>דיווחים</h1>
  //       <p>כאן יופיעו רשימת דיווחים שטרם טופלו</p>
  //     </div>
  //   </div>
  // );

export default withRouter(Home);