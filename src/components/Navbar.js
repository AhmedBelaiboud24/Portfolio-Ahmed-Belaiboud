import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from "./ThemeToggle";

function Navbar() {
const [open, setOpen] = useState(false);

const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }
    setOpen(open);
};

const DrawerList = (
    <div className="sideMenu" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
    <a href="#Moi">Qui suis-je ?</a>
    <a href="#formations">Formations</a>
    <a href="#competances">Compétences</a>
    <a href="#projets">Projets</a>
    <a href="#contact">Contact</a>
    </div>
);

return (
    <>
    <nav className='navbar'>
        <div className='navLinks'>
        <a href="#Moi">Qui suis-je ?</a>
        <a href="#formations">Formations</a>
        <a href="#competances">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        </div>
        <div className="themeToggle">
        <ThemeToggle />
        </div>
        <Button className="menuIcon" onClick={toggleDrawer(true)}>
        <MenuIcon />
        </Button>
    </nav>
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
    </>
);
}

export default Navbar;