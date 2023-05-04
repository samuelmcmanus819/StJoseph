import { Box, Grid, Typography } from "@mui/material";
import { AccessTime, LocationOn, Mail, PhoneIphone } from '@mui/icons-material';

const StJosephMap = () => {
  return (
    <Box sx={{mt: "4vh", display: "flex", flexDirection: { xs: "column", lg: "row" }, px: '17%', textAlign: 'start', width: "100%", alignItems: {  xs: "center", lg: "inherit" }}}>
      <Grid container sx={{width: { xs: "100%", lg: "50%" }, mb: { xs: "4vh", lg: 0 }}}>
        <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: { xs: "center", lg: "inherit" }}}>
          <Typography variant="h3">Office Hours</Typography>
          <Box sx={{display: "flex", flexDirection: "row", mt: "4vh", width: 280, justifyContent: "start"}}>
            <LocationOn fontSize="large" sx={{mr: "2%"}} />
            <Typography variant="h6">
              101 Elmore St<br></br>
              New Waverly, TX 77358<br></br>
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "row", mt: "2vh", width: 280, justifyContent: "start"}}>
            <PhoneIphone fontSize="large" sx={{mr: "2%"}}/>
            <Typography variant="h6">
              (936) 344-6104
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "row", mt: "2.5vh", width: 280, justifyContent: "start"}}>
            <AccessTime fontSize="large" sx={{mr: "2%"}}/>
            <Typography variant="h6">
              Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   1 PM - 5 PM<br></br>
              Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        8 AM - 5 PM<br></br>
              Wednesday &nbsp;                                                    8 AM - 5 PM<br></br>
              Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                             1 PM - 5 PM<br></br>
              Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 AM - 4 PM
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "row", mt: "2.5vh", width: 280, justifyContent: "start"}}>
            <Mail fontSize="large" sx={{mr: "2%"}}/>
            <Typography variant="h6">
              stjosephnw@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{display: "flex", width: { xs: "100%", lg: "70%" }}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.4769584481264!2d-95.4836457243862!3d30.535825795122182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86471163bd3cefc5%3A0xb2ed9959c1df839d!2sSt%20Joseph%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1681872555634!5m2!1sen!2sus" width="100%" height="500" style={{border:0}} loading="lazy"></iframe>    </Box>
      </Box>
  );
}

export default StJosephMap;