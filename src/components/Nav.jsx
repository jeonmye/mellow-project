import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LogoImg from '../assets/images/logo/logo.png';
import NAV_LIST from '../constant/navList';
import useViewport from '../hooks/useViewPort';

const Logo = styled.img`
  width: ${props => (props.$isMobile ? '90px' : '160px')};
  height: 100%;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1000;
`;

const DrawerAppBar = props => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleDropdownToggle = open => {
    setDropdownOpen(open);
  };

  const handleNavigate = path => {
    navigate(path);
    setDropdownOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" href="/" sx={{ my: 2, cursor: 'pointer' }} onClick={() => navigate('/')}>
        앤텔레콤
      </Typography>

      <Divider />
      <List>
        {NAV_LIST.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box justifyContent="center" sx={{ display: 'flex', bgcolor: 'white', height: 'auto' }}>
      <AppBar
        component="nav"
        position="static"
        sx={{ bgcolor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
      >
        <Container maxWidth="lg" height="100%">
          <Toolbar height="100%">
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo $isMobile={isMobile} src={LogoImg} alt="앤텔레콤" onClick={() => navigate('/')} />
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'start' }}
            ></Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'relative' }}>
              {NAV_LIST.map(item =>
                item.dropdown ? (
                  <Box
                    key={item.label}
                    onMouseEnter={() => handleDropdownToggle(true)}
                    onMouseLeave={() => handleDropdownToggle(false)}
                    sx={{ display: 'inline-block', position: 'relative' }}
                  >
                    <Button sx={{ color: 'black', mx: 2 }} onClick={() => handleNavigate(item.path)}>
                      {item.label}
                    </Button>
                    <DropdownMenu open={dropdownOpen}>
                      {item.dropdown.map(subItem => (
                        <Button
                          key={subItem.label}
                          onClick={() => handleNavigate(subItem.path)}
                          sx={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            color: 'grey',
                            padding: '8px 12px',
                            fontSize: 13,
                          }}
                        >
                          {subItem.label}
                        </Button>
                      ))}
                    </DropdownMenu>
                  </Box>
                ) : (
                  <Button key={item.label} onClick={() => navigate(item.path)} sx={{ color: 'black', mx: 2 }}>
                    {item.label}
                  </Button>
                ),
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
