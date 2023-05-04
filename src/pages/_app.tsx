import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Container, Toolbar } from '@mui/material';
import MobileHeader from '@/components/mobile/header';
import DesktopHeader from '@/components/desktop/header';

export default function App ({ Component, pageProps }: AppProps) {
  const pages = ['Home', 'St. Joseph', 'St. Stephen', 'Sacraments', 'CCE', 'Knights of Colombus'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopHeader pages={pages}/>
          <MobileHeader pages={pages}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

