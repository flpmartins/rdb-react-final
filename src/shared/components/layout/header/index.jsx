import { Link } from 'react-router-dom'
import { Container } from './styles'
import { Box, Typography, Menu, MenuItem, Button, IconButton,Divider } from '@mui/material'
import logo from '../../../../assets/logo.jpeg'
import './styles.css'
import { useState, useEffect } from 'react'
import { Info, ShoppingBasket, ContactMail, Group, Menu as MenuIcon } from '@mui/icons-material';
import { useDrawerContext } from '../../../hooks/DrawerContext'

export const Header = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuButtonClick = () => {
    toggleDrawerOpen(true); 
  };

  return (
    <Container>
      <Box   
        className={`header-container ${fadeIn ? 'fade-in' : ''} ${scrolled ? 'scrolled' : ''}`} 
      >
        <Box className="header-top-bar"></Box>
        <Box className="header-content">
          <img src={logo} className="header-logo" alt="Logo" />
          <Box className="header-links">
            <Link to="/about">
              <Typography variant="h5" className="header-link">SOBRE NÓS</Typography>
            </Link>
            <Button onClick={handleClick} className="header-button">
              <Typography variant="h5" className="header-link">PRODUTOS</Typography>
            </Button>
            <Menu
              className="header-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem className="header-menu-itens" onClick={handleClose}>Produto 1</MenuItem>
              <Divider className="header-menu-divider header-menu-divider-animated" />
              <MenuItem className="header-menu-itens" onClick={handleClose}>Produto 2</MenuItem>
              <Divider className="header-menu-divider header-menu-divider-animated" />
              <MenuItem className="header-menu-itens" onClick={handleClose}>Produto 3</MenuItem>
              <Divider className="header-menu-divider header-menu-divider-animated" />
              </Menu>
            <Link to="/contact">
              <Typography variant="h5" className="header-link">CONTATO</Typography>
            </Link>
            <Link to="/equipe/objetivo">
              <Typography variant="h5" className="header-link">EQUIPE</Typography>
            </Link>
          </Box>
          <IconButton
            className="menu-button" 
            onClick={handleMenuButtonClick} 
          >
            <MenuIcon fontSize='30px'/>
          </IconButton>
        </Box>
      </Box>
      <Box className="header-top-bar"></Box>
    </Container>
  );
};
