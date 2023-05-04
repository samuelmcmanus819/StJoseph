import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import MobileHeader from '@/components/mobile/header';
import DesktopHeader from '@/components/desktop/header';
import Home from '.';

export default function App ({ Component, pageProps }: AppProps) {
  const pages = ['Home', 'St. Joseph', 'St. Stephen', 'Sacraments', 'CCE', 'Knights of Colombus'];

  return (
    <Box sx={{backgroundColor: "#D3D0D0"}}>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <DesktopHeader pages={pages}/>
            <MobileHeader pages={pages}/>
          </Toolbar>
        </Container>
      </AppBar>
      <Home />
    </Box>
    
  );
}

