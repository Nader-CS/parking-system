import React, { useEffect, useState } from "react";import styles from "./admin.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomizedTables from "./table";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/slices/adminSlice";
const AdminDashboard = () => {
 
  const [value, setValue] = React.useState("2");
  const approvedNum = useSelector(state=>state.admin.approvedGarages.length)
  const unApprovedNum = useSelector(state=>state.admin.unApprovedGarages.length)
  const { approvedGarages } = useSelector(state=>state.admin)
  const { unApprovedGarages } = useSelector(state=>state.admin)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData());
  },[dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="row mx-0">
        <div className={`${styles.side_bar} col-2`}></div>
        <div className="col-10 m-5 w-75">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab label={`Approved ${approvedNum}`} value="1" />
                <Tab label={`Unapproved ${unApprovedNum}`} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
                {/* <CustomizedTables data={approvedGarages} /> */}
            </TabPanel>
            <TabPanel value="2">
            <CustomizedTables data={unApprovedGarages} />
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
