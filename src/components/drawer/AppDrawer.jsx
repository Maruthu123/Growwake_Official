import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';


function AppDrawer() {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  if (!isMobile) return null;

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} className="menu-button">
        <MenuIcon />
      </IconButton>
      
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List className="drawer-list">
          {['Home', 'About', 'Services', 'Careers', 'Contact'].map((text, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <Link to={`/${text.toLowerCase()}`} className='nav_list_link'>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;
