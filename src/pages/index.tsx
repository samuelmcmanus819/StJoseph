import { Box } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const images = [
  { url: "/carousel-images/church.png" },
  { url: "/carousel-images/church-people.png" },
  { url: "/carousel-images/adoration.png" },
  { url: "/carousel-images/father-kim.png" }
]

export default function Home() {
  return (
    <Box sx={{width: "100%"}}>
      <Box>
        <Carousel>
          {images.map((image) => {
            return <img src={image.url} alt="" width={100} height={650}/>
          })}
        </Carousel>
      </Box>
    </Box>
  )
}
