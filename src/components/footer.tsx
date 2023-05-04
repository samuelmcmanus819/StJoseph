import { Facebook, Google } from "@mui/icons-material";
import { Box, Typography } from "@mui/material"
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{backgroundColor: "white", pt: { xs: 0, sm: "3vh" }, pb: { xs: "1vh", sm: 0 }, display: "flex", flexDirection: "column"}}>
      <Box sx={{display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center"}}>
        <Box sx={{width: { xs: "100%", md: "50%" }, textAlign: "center", pt: { xs: "2vh", sm: 0 }, pb: { xs: "1vh", sm: 0 }, pl: { xs: 0, sm: "15%"}}}>
          <Typography sx={{fontSize: "large", fontWeight: "bold"}}>
            St. Joseph Church
          </Typography>
          <Typography sx={{mt: "1vh"}}>
            101 Elmore St<br></br>
            New Waverly, TX 77358<br></br>
            Phone: (936) 344-6104
          </Typography>
        </Box>
        <Box sx={{width: { xs: "100%", md: "50%" }, textAlign: "center", pt: { xs: "1vh", sm: 0 }, pr: { xs: 0, sm: "15%"}}}>
          <Typography sx={{fontSize: "large", fontWeight: "bold"}}>
            St. Stephen the Martyr Mission
          </Typography>
          <Typography sx={{mt: "1vh"}}>
            101 State Coach Rd<br></br>
            Point Blank, TX 77364<br></br>
            Phone: (936) 344-6104
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{width: "100%", display: "flex", justifyContent: "center", pt: { xs: "1vh", sm: "3vh" }, pb: { xs: "2vh", sm: 0 }}}>
        <Link href="https://facebook.com/profile.php?id=145460195513510">
          <Facebook sx={{mx: ".5vh"}} />
        </Link>
        <Link href="https://goo.gl/maps/RUr1UDpkkm1jGmrw5">
          <Google sx={{mx: ".5vh"}} />
        </Link>
      </Box>
    </Box>
  )
}

export default Footer;