import DesktopCarousel from '@/components/desktop/homepage/carousel';
import MobileCarousel from '@/components/mobile/homepage/carousel';
import { Box } from '@mui/material'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// const images = [
//   { url: "/carousel-images/church.png" },
//   { url: "/carousel-images/church-people.png" },
//   { url: "/carousel-images/adoration.png" },
//   { url: "/carousel-images/father-kim.png" }
// ]

// export default function Home() {
//   return (
//     <Box sx={{width: "100%"}}>
//       <Box>
//         <Carousel showArrows={false} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
//           {images.map((image) => {
//             return <img src={image.url} alt="" width={100} height={650}/>
//           })}
//         </Carousel>
//       </Box>
//     </Box>
//   )
// }

const images = ["/carousel-images/church.png","/carousel-images/church-people.png", "/carousel-images/adoration.png", "/carousel-images/father-kim.png"]

export default function Home() {
  return (
    <Box sx={{width: "100%"}}>
      <DesktopCarousel images={images}/>
      <MobileCarousel images={images}/>
    </Box>
  )
}
