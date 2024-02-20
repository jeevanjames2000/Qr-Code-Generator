import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import QrCodeGenerator from "./QrcodeGenerator";
import LoadMoreData from "./LoadmoreData";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="QR Code Generator" />
        <Tab label="Load More Data" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <QrCodeGenerator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoadMoreData />
      </TabPanel>
    </Box>
  );
}
