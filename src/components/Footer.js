import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const Footer = props => (

    <Paper>
       <Tabs 
      
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      
     <Tab label="Home"  />
     <Tab label="User Organization" />
     <Tab label="User Repos"  />
  </Tabs> 
  </Paper>

  
 );
export default Footer;
