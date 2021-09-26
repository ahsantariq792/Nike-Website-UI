import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import "../App.css";
import Hoodies from './pages/Hoodies';
import Shoes from './pages/Shoes';
import Trousers from './pages/Trousers';
import Secondtab from './Secondtab';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Secondtab/>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="sm">
            <Tabs className="tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Shoes" {...a11yProps(0)} />
              <Tab label="Trousers" {...a11yProps(1)} />
              <Tab label="Hoodies" {...a11yProps(2)} />
            </Tabs>
        </Container>
      </Box>


      <TabPanel value={value} index={0}>
        <Shoes />
      </TabPanel>


      <TabPanel value={value} index={1}>
        <Trousers />
      </TabPanel>


      <TabPanel value={value} index={2}>
        <Hoodies />
      </TabPanel>

    </Box>
  );
}
