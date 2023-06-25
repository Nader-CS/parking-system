import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddTaskIcon from '@mui/icons-material/AddTask';
import './table.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../../redux/slices/adminSlice';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables({data}) {
    
    
  useEffect(()=>{
    
  },[])
  if (data.length ===0) return <div>Loading</div>
  return (
    <TableContainer component={Paper}>
        {console.log(data)}
      <Table
      style={{height:'450px'}}
       sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Garage Address</StyledTableCell>
            <StyledTableCell align="right">Garage Name</StyledTableCell>
            <StyledTableCell align="right">Avilable spots</StyledTableCell>
            <StyledTableCell align="right">Garage location</StyledTableCell>
            <StyledTableCell align="right">Price per hour</StyledTableCell>
            <StyledTableCell align="right">Price per hour</StyledTableCell>
            <StyledTableCell align="right">Price per hour</StyledTableCell>
            <StyledTableCell align="right">Approve</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.address}
              </StyledTableCell>
              <StyledTableCell align="right">{row.garageName}</StyledTableCell>
              <StyledTableCell align="right">{row.availableSpots}</StyledTableCell>
              <StyledTableCell align="right">{row.lat} , {row.lon}</StyledTableCell>
              <StyledTableCell align="right">{row.pricePerHour}</StyledTableCell>
              <StyledTableCell align="right">{row.pricePerHour}</StyledTableCell>
              <StyledTableCell align="right">{row.pricePerHour}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant='secondary'>
                    <AddTaskIcon style={{ color: '#ba68c8' }} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
