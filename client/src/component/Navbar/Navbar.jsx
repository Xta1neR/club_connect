import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'

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


import dashboard from "../../Pages/Dashboard/Dashboard";
import home from "../../Pages/Home/Home";
import register from "../../Pages/Register/Register";
import login from "../../Pages/Login/Login";
import profile from "../../Pages/Profile/Profile";


import { Announcement, Login } from '@mui/icons-material';

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

                <NavLink to="/home"><HomeIcon /> Home</NavLink>

                <NavLink to="/login"><Login/>Login</NavLink>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;