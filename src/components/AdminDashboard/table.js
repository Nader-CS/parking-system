import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { approveGarage, getData } from "../../redux/slices/adminSlice";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import BasicModal from "./modal";
import { CircularProgress } from "@mui/material";


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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ data, flag }) {
  const dispatch = useDispatch();
  const { isApprovedLoading } = useSelector((state) => state.admin)
  const [id, setID] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (id) => {
    setOpen(true)
    setID(id)
};

  if (data === []) return <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'400px'
  }}><CircularProgress color="secondary" /></div>;
  
  return (
    <TableContainer component={Paper}>
      {data.length === 0? <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'400px'
  }}>
    {flag?'There are no approved garages':'There are no Unapproved garages'}
  </div>:
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    
  <TableHead>
    <TableRow>
      <StyledTableCell align="center">Garage Address</StyledTableCell>
      <StyledTableCell align="center">Garage Name</StyledTableCell>
      <StyledTableCell align="center">Avilable spots</StyledTableCell>
      <StyledTableCell align="center">Garage location</StyledTableCell>
      <StyledTableCell align="center">Price per hour</StyledTableCell>
      <StyledTableCell align="center">Images</StyledTableCell>
      <StyledTableCell align="center" style={flag && { display: "none" }}>
        Approve
      </StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((row) => (
      <StyledTableRow key={row.id}>
        <StyledTableCell align="center" component="th" scope="row">
          {row.address}
        </StyledTableCell>
        <StyledTableCell align="center">{row.garageName}</StyledTableCell>
        <StyledTableCell align="center">
          {row.availableSpots}
        </StyledTableCell>
        <StyledTableCell align="center">
          {row.lat} , {row.lon}
        </StyledTableCell>
        <StyledTableCell align="center">
          {row.pricePerHour}
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button color="secondary" onClick={()=>{handleOpen(row.id)}}>
            Show Images
          </Button>
          <BasicModal 
          id={id}
          open={open}
          close ={handleClose}
          data = {data}
          ></BasicModal>
        </StyledTableCell>
        <StyledTableCell
          align="center"
          style={flag && { display: "none" }}
        >
          <Button
            color="secondary"
            onClick={() => {
              dispatch(approveGarage(row));
            }}
          >
            <AddTaskIcon style={{ color: "#ba68c8" }} />
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
</Table>}
      
    </TableContainer>
  );
}
