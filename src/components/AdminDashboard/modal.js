import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './table.css'
import { Button } from '@mui/material';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

export default function BasicModal({id, open, close, data}) {
    
    const [garage, setGarage] = React.useState([]);
 
    React.useEffect(()=>{
        setGarage(data.filter(g=>g.id === id))
      },[data, id])
      if (garage.length === 0) return ""
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {garage[0].description}
          </Typography>
          {garage[0].imagesURL.length === 0? 
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            height:'100%'
          }}>Loading...</div>: 
          <div className="d-flex justify-content-between mt-4">
                      {garage[0].imagesURL.map((img) => (
                        <img
                          style={{ width: "20%", height: "100px" }}
                          src={img}
                          alt="img"
                        ></img>
                      ))}
                    </div>}
          
                    <Button onClick={close} color="secondary" style={{marginLeft:'90%', marginTop:'20px'}}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}