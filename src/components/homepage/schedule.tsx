import { Box, Grid, Typography } from "@mui/material"

const Schedule = () => {
  return (
      <Box sx={{direction: 'flex', flexDirection: 'column', px: '10%', width: '100%', pr: { md: '10%' }, py: '5vh'}}>
        <Typography sx={{fontSize: "xx-large", borderBottom: .5, borderColor: 'primary.dark', pl: 2, display: { xs: 'none', md: 'block' }, color: 'primary.dark', fontWeight: 'bold'}} >
          Mass and Reconciliation
        </Typography>
        <Grid container sx={{mt: { xs: "0vh", md: "3vh"}, display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
          <Grid xs={8} md={4} sx={{ py: "1vh" }}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
              St. Joseph Mass
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Friday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              8:00 AM - English
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
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
              St. Stephen Mass
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              Saturday
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              4:30 PM - English
            </Typography>
          </Grid>
          <Grid xs={8} md={4} sx={{ py: "1vh" }}>
            <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold", color: 'primary.dark'}}>
              Reconciliation
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              St. Stephen
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              4:00 PM - Saturday
            </Typography>
            <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
              St. Joseph
            </Typography>
            <Typography sx={{mt: ".5vh"}}>
              6:30 PM - Saturday
            </Typography>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Schedule;