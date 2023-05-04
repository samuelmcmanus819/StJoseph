import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link';

const DesktopHeader = (props: headerProps) => {
  const [sacramentsExpanded, setSacramentsExpanded] = useState(false);

  const sacramentsClicked = () => {
    setSacramentsExpanded(!sacramentsExpanded)
  }
  const closeSacraments = () => {
    setSacramentsExpanded(false)
  }

  return (
    <>
      <Box sx={{ mr: 'auto' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', lg: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Joseph Church
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            pl: 3,
            display: { xs: 'none', lg: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Stephen the Martyr Mission
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto'}}>
        <Link href="/"><Button sx={{color: 'white', position: 'absolute', right: 635, top: 15,}}>Home</Button></Link>
        <Link href="/stjoseph"><Button sx={{color: 'white', position: 'absolute', right: 535, top: 15,}}>St. Joseph</Button></Link>
        <Link href="/ststephen"><Button sx={{color: 'white', position: 'absolute', right: 425, top: 15,}}>St. Stephen</Button></Link>
        <Accordion variant="outlined" sx={{display: 'block', justifyContent: 'center', backgroundColor: '#287DC4', color: 'white', position: 'absolute', right: 290, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography sx={{fontSize: '14px', color: 'white'}}>EDUCATION</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', flexDirection: 'column'}}>
            <Link href="/education/cce"><Button sx={{color: 'white', textAlign: 'start'}}>CCE</Button></Link>
            <Link href="/education/rcia"><Button sx={{color: 'white', textAlign: 'start'}}>RCIA</Button></Link>
          </AccordionDetails>
        </Accordion> 
        <Accordion variant="outlined" expanded={sacramentsExpanded} onClick={sacramentsClicked} sx={{display: 'block', justifyContent: 'center', backgroundColor: '#287DC4', color: 'white', position: 'absolute', right: 145, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography sx={{fontSize: '14px', color: 'white'}}>SACRAMENTS</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', flexDirection: 'column'}}>
            <Link href="/sacraments/annointing"><Button onClick={closeSacraments} sx={{color: 'white'}}>Annointing <br></br> of the Sick</Button></Link>
            <Link href="/sacraments/baptism"><Button onClick={closeSacraments} sx={{color: 'white'}}>Baptism</Button></Link>
            <Link href="/sacraments/communion"><Button onClick={closeSacraments} sx={{color: 'white'}}>Communion</Button></Link>
            <Link href="/sacraments/confirmation"><Button onClick={closeSacraments} sx={{color: 'white'}}>Confirmation</Button></Link>
            <Link href="/sacraments/funerals"><Button onClick={closeSacraments} sx={{color: 'white'}}>Funerals</Button></Link>
            <Link href="/sacraments/penance"><Button onClick={closeSacraments} sx={{color: 'white'}}>Penance</Button></Link>
            <Link href="/sacraments/weddings"><Button onClick={closeSacraments} sx={{color: 'white'}}>Weddings</Button></Link>
          </AccordionDetails>
        </Accordion> 
        <Accordion variant="outlined" sx={{display: 'block', justifyContent: 'center', backgroundColor: '#287DC4', color: 'white', position: 'absolute', right: 0, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography sx={{fontSize: '14px', color: 'white'}}>LAY MINISTRIES</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', flexDirection: 'column'}}>
            <Link href="/layministries/kc"><Button sx={{color: 'white', textAlign: 'start'}}>Knights of<br></br>Columbus</Button></Link>
            <Link href="/layministries/svdp"><Button sx={{color: 'white', textAlign: 'start'}}>Saint Vincent<br></br>De Paul</Button></Link>
          </AccordionDetails>
        </Accordion> 
      </Box>
    </>
  );
}

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
      <Box sx={{ display: { xs: 'block', lg: 'none' }, mr: 'auto' }}>
        <Typography
        noWrap
        component="a"
        href="/"
        sx={{
            mr: {xs: 2, sm: 40, md: 80},
            ml: 'auto',
            display: { xs: 'block', md: 'flex', lg: 'none' },
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
            display: { xs: 'block', lg: 'none' },
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
    <Box sx={{ display: { xs: 'flex', lg: 'none' }, ml: 'auto' }}>
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
            display: { xs: 'block', lg: 'none' },
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

const Header = (props: headerProps) => {
  return (
    <>
    <DesktopHeader pages={props.pages}/>
    <MobileHeader pages={props.pages}/>
    </>
  )
}

export default Header;