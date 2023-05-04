import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: { xs: 'center', lg: 'start' }, my: "3vh", mt: { xs: 0, md: "3vh" }, px: '17%'}}>
      <Box sx={{ mb: { xs: "2vh", lg: "8vh" }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center' }}>
        <img src="stjosephchurch2.jpeg" width={500} height={400}/>
        <Box sx={{ml: { xs: 0, lg: '7%' }, mt: { xs: '4vh', md: 0 }}}>
          <Typography variant="h5" sx={{mb: '3vh'}}>About St. Joseph Church</Typography>
          <Typography>
            St. Joseph Catholic Parish Community of New Waverly, Texas, originating from Polish families and submitting to the authority of our Holy Father, the Chief Shepherd of the Church, and under the direction of the Cardinal of the Archdiocese of Galveston-Houston and guidance of our Pastor, appointed by the Cardinal, is a close, diverse and growing family of Baptized believers.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: {xs: "2vh", lg: "8vh" }, display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, alignItems: 'center' }}>
        <Box sx={{mr: { xs: 0, lg: '7%' }, mt: { xs: '4vh', md: 0 }}}>
          <Typography variant="h5" sx={{mb: '1vh'}}>Mission Statement</Typography>
          <Typography>
            Our Prime mission is to respond to our baptismal call to live and spread Gods good news in scripture and our valued traditions through the celebration of the Sacraments of the Church instituted by Jesus Christ, especially our Sunday Eucharist, which inspires all within the parish  family to draw together into the body of Christ.
            <br></br><br></br>
            We recognize our sacred duty to spread the Gospel of Jesus Christ and Christian values, to share our faith with all especially the young and the non-believers and to assist those who need our help and compassion while working towards sanctification and eternal salvation through God's grace.
          </Typography>
        </Box>
        <img src="stjoseph.jpeg" width={500} height={400}/>
      </Box>
    </Box>
  );
}

export default About;