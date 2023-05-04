import { Grid, Typography } from "@mui/material";
import Schedule from "./schedule";

const HomepageMainContent = () => {
  return (
    <Grid container sx={{py: "4vh"}}>
      <Grid xs={12} md={6} sx={{textAlign: 'center', px: "2vh"}}>
        <Typography sx={{fontSize: "xx-large"}}>
          Announcements
        </Typography>
      </Grid>
      <Schedule />
    </Grid>
  )
}

export default HomepageMainContent;