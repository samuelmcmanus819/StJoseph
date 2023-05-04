import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MobileHeader = (props: headerProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box 
        sx={{ 
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          mr: 'auto', 
        }}
        >
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml: 'auto',
            display: { xs: 'block', sm: 'block', md: 'flex', lg: 'none' },
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: 'medium',
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Joseph Church
        </Typography>
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            pl: 3,
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: 'medium',
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Stephen the Martyr Church
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }, ml: 'auto' }}>
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
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          }}
        >
          {props.pages.map((page) => (
            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
              <Typography component="a" textAlign="center" href={page.link}>{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default MobileHeader;