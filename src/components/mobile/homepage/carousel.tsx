import { Box } from "@mui/material"
import { Slide } from "react-slideshow-image"

const MobileCarousel = (props: CarouselProps) => {
  return (
    <Box className="slide-container" sx={{display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }}}>
      <Slide arrows={false}>
        {props.images.map((image)=> (
          <img src={image} alt="" width="100%" height={300}/>
        ))} 
      </Slide>
    </Box>
  )
}

export default MobileCarousel;