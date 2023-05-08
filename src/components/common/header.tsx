import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ClickAwayListener, IconButton, Menu, MenuItem, MenuList, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link';

const DesktopHeader = (props: headerProps) => {
  const [sacramentsExpanded, setSacramentsExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [layMinistriesExpanded, setLayMinistriesExpanded] = useState(false);

  const openSacraments = () => {
    setSacramentsExpanded(true)
  }
  const closeSacraments = () => {
    setSacramentsExpanded(false)
  }
  const openEducation = () => {
    setEducationExpanded(true)
  }
  const closeEducation = () => {
    setEducationExpanded(false)
  }
  const openLayMinistries = () => {
    setLayMinistriesExpanded(true)
  }
  const closeLayMinistries = () => {
    setLayMinistriesExpanded(false)
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
        <Link href="/"><Button sx={{color: 'white', position: 'absolute', right: 635, top: 15,}}>HOME</Button></Link>
        <Link href="/stjoseph"><Button sx={{color: 'white', position: 'absolute', right: 535, top: 15,}}>ST. JOSEPH</Button></Link>
        <Link href="/ststephen"><Button sx={{color: 'white', position: 'absolute', right: 425, top: 15,}}>ST. STEPHEN</Button></Link>
        <Accordion disableGutters={true} expanded={educationExpanded}  onMouseOver={openEducation} onMouseOut={closeEducation}variant="outlined" sx={{display: 'block', justifyContent: 'center', backgroundColor: 'primary.main', color: 'white', position: 'absolute', right: 290, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography variant="h4" sx={{color: 'white'}}>EDUCATION</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', flexDirection: 'column'}}>
            <Link href="/education/cce"><Button sx={{color: 'white', textAlign: 'start'}}>CCE</Button></Link>
            <Link href="/education/rcia"><Button sx={{color: 'white', textAlign: 'start'}}>RCIA</Button></Link>
          </AccordionDetails>
        </Accordion> 
        <Accordion disableGutters={true} variant="outlined" expanded={sacramentsExpanded} onMouseOver={openSacraments} onMouseOut={closeSacraments} sx={{display: 'block', justifyContent: 'center', backgroundColor: 'primary.main', color: 'white', position: 'absolute', right: 145, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography variant="h4" sx={{color: 'white'}}>SACRAMENTS</Typography>
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
        <Accordion disableGutters={true} expanded={layMinistriesExpanded} onMouseOver={openLayMinistries} onMouseOut={closeLayMinistries} variant="outlined" sx={{display: 'block', justifyContent: 'center', backgroundColor: 'primary.main', color: 'white', position: 'absolute', right: 0, zIndex: 5, top: 10, border: 0}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
            aria-controls="panel1a-content"
            sx={{mt: `${layMinistriesExpanded} ? 0 : -10}`}}
          >
            <Typography variant="h4" sx={{color: 'white'}}>LAY MINISTRIES</Typography>
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
  const [showNav, setShowNav] = useState(false);

  const handleOpenNavMenu = () => {
    setShowNav(!showNav);
  }
  const handleCloseNavMenu = () => {
    setShowNav(false);
  }
  
  return (
    <>
      <Box sx={{ display: { xs: 'block', lg: 'none' }, width: '100%'}}>
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
    <ClickAwayListener onClickAway={handleCloseNavMenu}>
      <Box sx={{ display: { xs: 'flex', lg: 'none' }, ml: 'auto', flexDirection: 'column', position: 'absolute', top: 5, right: 0, height: '100vh',  alignItems: 'center', minWidth: '25%' }}>
          <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{width: '2%'}}
          >
          <MenuIcon />
          </IconButton>
            <MenuList sx={{display: `${showNav ? 'flex' : 'none'}`, flexDirection: 'column', height: '100vh', textAlign: 'center', alignItems: 'center', width: '100%'}}>
              <Box sx={{display: 'flex', backgroundColor: 'secondary.main', justifyContent: 'center', height: '5vh', color: 'background.default', zIndex: '100', width: '100%', alignItems: 'center'}}>
                <Link onClick={handleCloseNavMenu} style={{textDecoration: "none", color: 'black', width: '100%'}} href='/'>
                  <Typography sx={{textAlign: 'center', width: '100%'}}>Home</Typography>
                </Link>
              </Box>
              <Box sx={{display: 'flex', backgroundColor: 'secondary.main', justifyContent: 'center', height: '5vh', color: 'background.default', zIndex: '100', width: '100%', alignItems: 'center'}}>
                <Link onClick={handleCloseNavMenu} style={{textDecoration: "none", color: 'black', width: '100%'}} href='/stjoseph'>
                  <Typography sx={{textAlign: 'center', width: '100%'}}>St. Joseph</Typography>
                </Link>
              </Box>
              <Box sx={{display: 'flex', backgroundColor: 'secondary.main', justifyContent: 'center', height: '5vh', color: 'background.default', zIndex: '100', width: '100%', alignItems: 'center'}}>
                <Link onClick={handleCloseNavMenu} style={{textDecoration: "none", color: 'black', width: '100%'}} href='/ststephen'>
                  <Typography sx={{textAlign: 'center', width: '100%'}}>St. Stephen</Typography>
                </Link>
              </Box>
              <Accordion sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'secondary.main', justifyContent: 'center', zIndex: '100', width: '100%', alignItems: 'center', '&:before': { display: 'none'}}} disableGutters>
                <AccordionSummary sx={{height: '5vh', pl: 6, backgroundColor: 'transparent', width: '100%'}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                  <Typography sx={{textAlign: 'center'}}>Sacraments</Typography>
                </AccordionSummary>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Button href="/sacraments/annointing" onClick={handleCloseNavMenu}><AccordionDetails sx={{mt: '-1vh', height: '6vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Annointing <br></br> of the Sick</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/baptism" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Baptism</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/communion" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Communion</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/confirmation" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Confirmation</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/funerals" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Funerals</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/penance" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Penance</Typography></AccordionDetails></Button>
                  <Button href="/sacraments/weddings" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Weddings</Typography></AccordionDetails></Button>
                </Box>
              </Accordion>
              <Accordion elevation={0} sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'secondary.main', justifyContent: 'center', zIndex: '100', width: '100%', alignItems: 'center', border: 1, borderColor: 'secondary.main', '&:before': { display: 'none'}}} disableGutters>
                <AccordionSummary sx={{height: '5vh', pl: 7, backgroundColor: 'transparent', width: '100%'}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                  <Typography sx={{textAlign: 'center'}}>Education</Typography>
                </AccordionSummary>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Button href="/education/cce" onClick={handleCloseNavMenu}><AccordionDetails sx={{mt: '-1vh', height: '3vh', color: 'black', width: '100%'}}><Typography>CCE</Typography></AccordionDetails></Button>
                  <Button href="/education/rcia" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '3vh', color: 'black', width: '100%'}}><Typography>RCIA</Typography></AccordionDetails></Button>
                </Box>
              </Accordion>
              <Accordion elevation={0} sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'secondary.main', justifyContent: 'center', zIndex: '100', width: '100%', alignItems: 'center', '&:before': { display: 'none'}}} disableGutters>
                <AccordionSummary sx={{height: '5vh', pl: 5, backgroundColor: 'transparent', width: '100%'}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                  <Typography sx={{textAlign: 'center'}}>Lay Ministries</Typography>
                </AccordionSummary>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Button href="/layministries/kc" onClick={handleCloseNavMenu}><AccordionDetails sx={{mt: '-1vh', height: '6vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Knights of<br></br>Columbus</Typography></AccordionDetails></Button>
                  <Button href="/layministries/svdp" onClick={handleCloseNavMenu}><AccordionDetails sx={{height: '7vh', color: 'black', width: '100%'}}><Typography sx={{fontSize: 15}}>Saint Vincent<br></br>De Paul</Typography></AccordionDetails></Button>
                </Box>
              </Accordion>
            </MenuList>          
          </Box>
        </ClickAwayListener>
          
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