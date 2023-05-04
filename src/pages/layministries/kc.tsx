import PageTitle from "@/components/common/pagetitle";
import { AccessTime, LocationOn, Mail, PhoneIphone } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

const KnightsofColumbus = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Knights of Columbus"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src="/layministries/knights.jpg" width={450}/>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', pt: '4vh'}}>
          <img src="/fish1.jpg" width={100}/>
          <Typography sx={{mx: '2%'}}><b>K of C Fish Fry Every Friday of Lent 4:30pm to 7:00pm</b></Typography>
          <img src="/fish2.jpg" width={100}/>
        </Box>
        <Typography sx={{alignSelf: 'start', mt: '4vh'}}>From the founding in 1882, charity has been the first principle of the Knights of Columbus. We are men of faith and men of action.<br></br><br></br></Typography>
        <Typography sx={{display: 'flex', alignSelf: 'start'}}>Local councils are the basic unit of the Knights. Each local council works to assist with the needs of its community consistent with the principles of the Order. Our Council serves the Willis and New Waverly area.<br></br><br></br></Typography>
        <Typography>The  Knights of Columbus is the world's largest Catholic family fraternal service organization with 1.6 million members. It provides members and their families with volunteer opportunities in service to the Catholic Church, their communities, families and young people. As a member of the Knights of Columbus you and your family enjoy many benefits, eligibility to join the Knights of Columbus top-ranked life insurance program, and many more family and personal benefits. Membership in the Knights of Columbus is open to practicing Catholic men in union with the Holy See, who are at least 18 years old. A practicing Catholic is one who lives up to the Commandments of God and the precepts of the Church. Application blanks are available from any member of the Knights of Columbus.<br></br><br></br></Typography>
        <Typography>Active and in service to the St. Joseph Catholic community, you will see Knights ushering at the Masses, a Priest and a Deacon, choir members, lectors, and a host of other ministries and activities.  The Knights are always recruiting new members.  All Catholic men of St. Joseph Parish are encourage to join our council.  If  you need an application, see one of the Knights at any Mass.  They will be wearing name badges to help you identify them.</Typography>
        <Box sx={{mt: "4vh", display: "flex", flexDirection: { xs: "column", lg: "row" }, textAlign: 'start', width: "100%", alignItems: {  xs: "center", lg: "inherit" }, mb: '4vh'}}>
          <Grid container sx={{width: '100%', mb: { xs: "4vh", lg: 0 }}}>
            <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: { xs: "center", lg: "inherit" }}}>
              <Typography variant="h3">Meeting Hours</Typography>
              <Box sx={{display: "flex", flexDirection: "row", mt: "4vh", width: 280, justifyContent: "start"}}>
                  <LocationOn fontSize="large" sx={{mr: "2%"}} />
                  <Typography variant="h6">
                    16663 Hwy. 75<br></br>
                    Willis, TX 77364<br></br>
                  </Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row", mt: "2vh", width: 280, justifyContent: "start"}}>
                  <PhoneIphone fontSize="large" sx={{mr: "2%"}}/>
                  <Typography variant="h6">
                    (936) 344-6025
                  </Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row", mt: "2.5vh", width: 280, justifyContent: "start"}}>
                  <AccessTime fontSize="large" sx={{mr: "2%"}}/>
                  <Typography variant="h6">
                    First and Third Friday - TBD
                  </Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row", mt: "2.5vh", width: 280, justifyContent: "start"}}>
                  <Mail fontSize="large" sx={{mr: "2%"}}/>
                  <Typography variant="h6">TBD</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{display: "flex", width: '100%'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.3722311829883!2d-95.49617462408376!3d30.482214497696162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864716bdfc94c939%3A0xe7776c3ca5badc74!2sKnights%20of%20Columbus!5e0!3m2!1sen!2sus!4v1682566275966!5m2!1sen!2sus" width="100%" height="500" style={{border:0}} loading="lazy"></iframe></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default KnightsofColumbus;