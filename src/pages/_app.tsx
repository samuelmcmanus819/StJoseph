import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

export default function App ({ Component, pageProps }: AppProps) {
  const pages = [{ title: 'Home', link: '/' }, { title: 'St. Joseph', link: '/stjoseph' }, { title: 'St. Stephen', link: '/ststephen' }, 
                  { title: 'Sacraments', link: '/sacraments' }, { title: 'CCE', link: '/cce' }, { title: 'Lay Orders', link: '/' }];

  return (
    <Box sx={{backgroundColor: "#fefffe", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <AppBar position="static" sx={{backgroundColor:'#287DC4'}}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Header pages={pages}/>
          </Toolbar>
        </Container>
      </AppBar>
      {<Component {...pageProps} />}
      <Footer />
    </Box>
  );
}

