import { Box, Grid, Typography } from "@mui/material";

const StStephenSchedule = () => {
  return (
    <Box sx={{direction: 'flex', flexDirection: 'column', px: '15%', width: '100%', pb: '5vh', mt: "-2vh"}}>
        <Grid container sx={{mt: { xs: "0vh", md: "3vh"}, display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
          <Grid xs={8} md={4} sx={{ py: "1vh" }}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
              Weekend Schedule
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Saturday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              Rosary - 3:45 PM
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              Reconciliation - 4:00 PM
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              Mass - 4:30 PM
            </Typography>
          </Grid>
          <Grid xs={8} md={4} sx={{py: "1vh"}}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
              Weekday Schedule
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Wednesday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              Adoration - 9 AM to 10 AM
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              First Friday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              Annointing of the Sick - 4:30 PM
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
}

export default StStephenSchedule;