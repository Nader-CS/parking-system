import React, { useEffect, useState } from "react";import styles from "./admin.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomizedTables from "./table";
const AdminDashboard = () => {
  const [value, setValue] = React.useState("1");
  const [approvedNum, setApprovedNum] = useState(0)
  const [unApprovedNum, setUnApprovedNum] = useState(0)

  useEffect(()=>{

  },[])
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
                aria-label="lab API tabs example"
              >
                <Tab label={`Approved ${approvedNum}`} value="1" />
                <Tab label={`Unapproved ${unApprovedNum}`} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <CustomizedTables />
            </TabPanel>
            <TabPanel value="2"></TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
