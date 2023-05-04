import { Box, Grid, Typography } from "@mui/material";

const StJosephSchedule = () => {
  return (
    <Box sx={{direction: 'flex', flexDirection: 'column', px: '15%', width: '100%', py: '5vh'}}>
        <Grid container sx={{mt: { xs: "0vh", md: "3vh"}, display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
          <Grid xs={8} md={4} sx={{ py: "1vh" }}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: '#074C86'}}>
              Weekend Mass
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Saturday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              7:00 PM - English
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Sunday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              9:00 AM - English
            </Typography>
            <Typography sx={{mt: ".25vh"}}>
              11:00 AM - Spanish
            </Typography>
          </Grid>
          <Grid xs={8} md={4} sx={{py: "1vh"}}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: '#074C86'}}>
              Weekday Mass
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Friday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              8:00 AM - English
            </Typography>
          </Grid>
          <Grid xs={8} md={4} sx={{ py: "1vh" }}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: '#074C86'}}>
              Reconciliation
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Saturday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              6:30 PM
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
}

export default StJosephSchedule;