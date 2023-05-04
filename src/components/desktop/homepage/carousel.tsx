import { Box } from "@mui/material"
import { Slide } from "react-slideshow-image"

const DesktopCarousel = (props: CarouselProps) => {
  return (
    <Box className="slide-container" sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }}}>
      <Slide arrows={false}>
        {props.images.map((image)=> (
          <img src={image} alt="" width="100%" height={800}/>
        ))} 
      </Slide>
    </Box>
  )
}

export default DesktopCarousel;