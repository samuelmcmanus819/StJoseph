import { Grid } from "@mui/material";
import Schedule from "./schedule";
import Announcements from "./announcements";

const HomepageMainContent = () => {
  return (
    <Grid container>
      <Schedule />
      <Announcements/>
    </Grid>
  )
}

export default HomepageMainContent;