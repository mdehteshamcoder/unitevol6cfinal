import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutsuccess } from '../store/auth/action';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';

import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export default function Navbar() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => {
    setState(open)
  }
  const handlelogout = () => {
    dispatch(logoutsuccess())
  }

  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      position="static"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
<Link to = "/">

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
</Link>



      </List>


      <List>
        <Link to="/cart">

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalGroceryStoreTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={"cart"} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>

      <List>
        <Link to="/individual">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalPharmacyIcon />
              </ListItemIcon>
              <ListItemText primary={"Indiviual"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <Divider />
      
      <List>
        {token ? <ListItem disablePadding>
          <ListItemButton onClick={handlelogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
          :
          <Link to="/login">
            <ListItemButton >
              <ListItemIcon>
                <LoginRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Log in"} />
            </ListItemButton>

          </Link>
        }

      </List>
    </Box>
  );







  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">

        <Drawer
          anchor={"left"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>

        <Toolbar>
          <IconButton
            onClick={() => toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>

          {token ? <Button style={{ marginLeft: "1000px" }} onClick={handlelogout} color="inherit">Log Out</Button> : <Link to="/login">
            <Button style={{ marginLeft: "1000px" }} color="inherit">Login</Button>
          </Link>}


        </Toolbar>
      </AppBar>
    </Box>
  );
}

