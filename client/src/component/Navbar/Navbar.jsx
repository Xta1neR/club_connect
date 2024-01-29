import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'About Us', 'Log in', 'Register Now' ];
const settings = ['Profile','Logout'];

function Navbar(){

    //keep track of the anchor elements.
    const [anchorNav, setAnchorNav] = React.useState(null);
    const [anchorUser, setAnchorUser] = React.useState(null);

    //keep track of the menu items Selected or Not Selected.
    const handleOpenNavMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };

    return(
       <AppBar>
        
       </AppBar>
    )
}



export default Navbar