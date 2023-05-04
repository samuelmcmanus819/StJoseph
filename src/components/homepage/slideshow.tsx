import { Box } from "@mui/material"
import { Slide } from "react-slideshow-image"

const DesktopSlideshow = (props: CarouselProps) => {
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

const MobileSlideshow = (props: CarouselProps) => {
  return (
    <Box className="slide-container" sx={{display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }}}>
      <Slide arrows={false}>
        {props.images.map((image)=> (
          <img src={image} alt="" width="100%" height={500}/>
        ))} 
      </Slide>
    </Box>
  )
}

const Slideshow = (props: CarouselProps) => {
  return (
    <Box>
      <DesktopSlideshow images={props.images} />
      <MobileSlideshow images={props.images} />
    </Box>
  )
}

export default Slideshow;