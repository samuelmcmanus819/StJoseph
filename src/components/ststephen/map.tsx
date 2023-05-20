import { LocationOn, Mail, PhoneIphone } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

const StStephenMap = () => {
    return (
      <Box sx={{mt: "4vh", display: "flex", flexDirection: { xs: "column", lg: "row" }, px: '17%', textAlign: 'start', width: "100%", alignItems: {  xs: "center", lg: "start" }}}>
        <Grid container sx={{width: { xs: "100%", lg: "50%" }, mb: { xs: "4vh", lg: 0 }}}>
          <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: { xs: "center", lg: "inherit" }}}>
            <Typography variant="h3">Visit Us</Typography>
            <Box sx={{display: "flex", flexDirection: "row", mt: "4vh", width: 280, justifyContent: "start"}}>
              <LocationOn fontSize="large" sx={{mr: "2%"}} />
              <Typography variant="h6">
                101 Stage Coach Rd<br></br>
                Point Blank, TX 77364<br></br>
              </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", mt: "2vh", width: 280, justifyContent: "start"}}>
              <PhoneIphone fontSize="large" sx={{mr: "2%"}}/>
              <Typography variant="h6">
                (936) 344-6104
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.00480494081!2d-95.20526711413642!3d30.7182653208318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647799118724ffb%3A0x70473001be37f82b!2sSt%20Stephen%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1681961983670!5m2!1sen!2sus" width="100%" height="500" style={{border:0}} loading="lazy"></iframe>
        </Box>
      </Box>
    );
}

export default StStephenMap;