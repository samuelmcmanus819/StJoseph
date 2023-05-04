import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Box, Container, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

const pages = [{ title: 'Home', link: '/' }, { title: 'St. Joseph', link: '/stjoseph' }, { title: 'St. Stephen', link: '/ststephen' }, 
                  { title: 'Sacraments', link: '/sacraments' }, { title: 'CCE', link: '/cce' }, { title: 'Lay Orders', link: '/' }];
const theme = createTheme({
  palette: {
    primary: {
      main:'#287DC4',
      dark: '#074C86'
    },
    secondary: {
      main: '#D3D2D2'
    },
    background: {
      default: '#FEFFFE',
    }
  },
  typography: {
    h4: {
      fontSize: "14px"
    }
  }
})
export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor: "background.default", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <AppBar position="static" sx={{backgroundColor: "primary.main"}}>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <Header pages={pages}/>
            </Toolbar>
          </Container>
        </AppBar>
        {<Component {...pageProps} />}
        <Footer />
      </Box>
    </ThemeProvider>
    
  );
}

