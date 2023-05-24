import HomepageMainContent from '@/components/homepage/main';
import { Box } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'
import Slideshow from '@/components/homepage/slideshow';


const images = ["/carousel-images/church.png","/carousel-images/church-people.png", "/carousel-images/adoration.png", "/carousel-images/father-kim.png"]

export default function Home() {
  return (
    <Box sx={{width: "100%", height: "20%"}}>
      <Slideshow images={images}/>
      <HomepageMainContent />
    </Box>
  )
}
