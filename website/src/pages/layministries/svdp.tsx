import PageTitle from "@/components/common/pagetitle";
import { Box, Grid, List, ListItemText, Typography } from "@mui/material";

const SVDP = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Saint Vincent de Paul"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src="/layministries/svdp.jpeg" width={450}/>
        <Box sx={{direction: 'flex', flexDirection: 'column', px: '10%', width: '100%', pt: '3vh', pb: '1vh'}}>
          <Grid container sx={{mt: { xs: "0vh", md: "3vh"}, display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Grid xs={8} md={4} sx={{ py: "1vh" }}>
              <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
                Food Bagging
              </Typography>
              <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
                Second Saturday
              </Typography>
              <Typography sx={{mt: ".5vh"}}>
                9:00 AM
              </Typography>
            </Grid>
            <Grid xs={8} md={4} sx={{py: "1vh"}}>
              <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
                Meeting
              </Typography>
              <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
                First Wednesday
              </Typography>
              <Typography sx={{mt: ".5vh"}}>
                4:00 PM
              </Typography>
            </Grid>
            <Grid xs={8} md={4} sx={{ py: "1vh" }}>
              <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
                Food Distribution
              </Typography>
              <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
                Third Saturday
              </Typography>
              <Typography sx={{mt: ".5vh"}}>
                9:00 AM
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography sx={{alignSelf: 'start', mt: '4vh'}}>Founded in 1833, the Society of St. Vincent de Paul is a worldwide organization of lay Catholics, following Christ’s call to serve the poor, the suffering, and the deprived. Through outreach programs, St. Vincent de Paul has helped countless families in New Waverly and surrounding areas, providing essential support and assistance to those who need it the most.<br></br><br></br></Typography>
        <Typography sx={{display: 'flex', alignSelf: 'start'}}>St. Vincent de Paul serves New Waverly&apos;s community by empowering people to achieve self-sufficiency and live a life of dignity. They are dedicated to helping those in need by providing various services, including emergency financial assistance, food assistance, and training people to be successful in the workforce.<br></br><br></br></Typography>
        <Typography>St. Vincent de Paul has a team of dedicated volunteers who work tirelessly to meet the needs of the community. St. Vincent de Paul is always open to new members. Additionally, non-members are always welcome to assist with working at or donating to the food pantry.<br></br><br></br></Typography>
        <Typography variant='h5' sx={{pt: "2vh", alignSelf: 'start'}}>Additional Links</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: 'start', pb: '5vh'}}>
          <ListItemText key="1" sx={{ display: "list-item" }}>If you need food assistance, then please fill out the Assistance Request form and bring it to the food pantry distribution.</ListItemText>
          <ListItemText key="2" sx={{ display: "list-item" }}>To become a member, please fill out the Member Application form and bring it to any of our events.</ListItemText>
        </List>
      </Box>
    </Box>
  );
}

export default SVDP;