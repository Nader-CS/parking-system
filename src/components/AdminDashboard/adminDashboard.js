import React, { useEffect } from "react";
import styles from "./admin.module.css";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomizedTables from "./table";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getGarages } from "../../redux/slices/adminSlice";
import { CircularProgress } from "@mui/material";
const AdminDashboard = () => {
  const [value, setValue] = React.useState("1");
  // const approvedNum = useSelector(
  //   (state) => state.admin.approvedGarages.length
  // );
  // const unApprovedNum = useSelector(
  //   (state) => state.admin.unApprovedGarages.length
  // );
  const { approvedGarages } = useSelector((state) => state.admin);
  const { unApprovedGarages } = useSelector((state) => state.admin);
  const { adminData } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGarages());
    dispatch(getAdmin());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="row mx-0">
        {adminData && 
        <div className={`${styles.side_bar} col-2`}>
            {console.log(adminData)}
        <span
          className={`${styles.PicCon} d-flex justify-content-center align-items-center mx-auto mb-4 rounded-circle`}
        >
          <i className="fa-solid fa-user fa-4x text-white"></i>
        </span>
        <div>
          <p>Admin: {adminData.adminName} </p>
        </div>
      </div> }
      {approvedGarages.length === 0 ? <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'400px'
  }}><CircularProgress color="secondary" /></div>:<div className="col-10 m-5 w-75">
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
     
<TabList
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      > 
        <Tab label={`Approved ${approvedGarages.length}`} value="1" />
        <Tab label={`Unapproved ${unApprovedGarages.length}`} value="2" />
      </TabList>
      
    </Box>
    <TabPanel value="1">
      <CustomizedTables data={approvedGarages} flag={true} />
    </TabPanel>
    <TabPanel value="2">
      <CustomizedTables data={unApprovedGarages} />
    </TabPanel>
  </TabContext>
</div>}
        
      </div>
    </div>
  );
};
export default AdminDashboard;
