import HomepageMainContent from '@/components/cross-platform/homepage/main';
import DesktopCarousel from '@/components/desktop/homepage/carousel';
import Footer from '@/components/footer';
import MobileCarousel from '@/components/mobile/homepage/carousel';
import { Box, Grid, Typography } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'


const images = ["/carousel-images/church.png","/carousel-images/church-people.png", "/carousel-images/adoration.png", "/carousel-images/father-kim.png"]

export default function Home() {
  return (
    <Box sx={{width: "100%", height: "20%"}}>
      <DesktopCarousel images={images}/>
      <MobileCarousel images={images}/>
      <HomepageMainContent />
      <Footer />
    </Box>
  )
}
