import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import Blacklogo from '../media/personal-kit/Logos/blacksvg.svg'
import { Link as Rlink } from 'react-router-dom';
import Grid from '@mui/material/Grid'




const pages = ['Acerca de mí', 'Portafolio', 'Hoja de Vida (CV)'];


function Navbar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#121212' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: '0.5%' }}>
            <img src={Blacklogo} alt="logo" />
          </Icon>
          <Typography
            variant="h6"
            noWrap
            component={Rlink}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Juan Esteban Salazar
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component={Rlink}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter',
              fontWeight: 300,
              textDecoration: 'none',
            }}
            color={'secondary'}
          >
            /Científico de Datos
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component={Rlink}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Inter',
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Juan E. Salazar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} px={'5%'}>
            <Grid container spacing={'10'}>
              {pages.map((page) => (
                <Grid item>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'inherit', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Navbar1