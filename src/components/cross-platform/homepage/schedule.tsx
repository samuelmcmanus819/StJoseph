import { BorderBottom } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material"

const Schedule = () => {
  return (
    <Grid xs={12} md={6}  sx={{textAlign: 'center'}}>
      <Typography sx={{fontSize: "xx-large"}} >
        Mass and Reconciliation
      </Typography>
      <Grid container sx={{mt: "3vh", display: 'flex', justifyContent: 'center'}}>
        <Grid xs={8} md={4} sx={{borderTop: { xs: .5, md: 0 }, borderBottom: { xs: .5, md: 0 }, borderColor: "gray", py: "1vh"}}>
          <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold"}}>
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
          <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold"}}>
            St. Stephen Mass
          </Typography>
          <Typography sx={{mt: "1.15vh", fontWeight: "bold"}}>
            Saturday
          </Typography>
          <Typography sx={{mt: ".5vh"}}>
            4:30 PM - English
          </Typography>
        </Grid>
        <Grid xs={8} md={4} sx={{borderTop: { xs: .5, md: 0 }, borderBottom: { xs: .5, md: 0 }, borderColor: "gray", py: "1vh"}}>
          <Typography sx={{fontSize: { xs: "x-large", md: "large", xl: "x-large" }, px: "2vh", fontWeight: "bold"}}>
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
    </Grid>
  )
}

export default Schedule;