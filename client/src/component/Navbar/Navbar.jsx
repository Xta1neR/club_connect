import * as React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import "./Navbar.css"

function Navbar(){
    return(
        
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label='menu'
                sx={{ mr: 2 }}
                >
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Club Connect
                </Typography>

                <Button color="inherit"><HomeIcon/> Home</Button>
                <Button color="inherit"><CampaignIcon/> Announcement</Button>
                <div className="dropdown">
                    <Button color="inherit" className ="dropbtn"> <AccountCircleIcon/> Profile
                    </Button>
                    <div className="dropdown-content">
                        <a href="#">Dashboard</a>
                        <a href="#">Messages</a>
                        <a href="#">Logout</a>
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;