import PageTitle from "@/components/common/pagetitle";
import About from "@/components/stjoseph/about";
import StJosephMap from "@/components/stjoseph/map";
import StJosephSchedule from "@/components/stjoseph/schedule";
import { Box, Typography } from "@mui/material"

const StJoseph = () => {
  {/* <Grid xs={12} md={5} sx={{ px: '5%', pl: { md: '10%' }, display: 'flex', justifyContent: 'center', flexDirection: 'column', py: '2vh'  }}>
        <img src="mary.jpeg" />
        <Typography sx={{textAlign: 'center', fontSize: 'large', pt: '2vh'}}>
        Hail, Holy Queen, mother of mercy, hail, our life, our sweetness, and our hope! To you do we cry poor banished children of Eve! To you do we send up our sighs, mourning and weeping in this vale of tears! Turn then, most gracious advocate, your eyes of mercy toward us; and after this, our exile, show unto us the blessed fruit of your womb, Jesus! O clement, O loving, O sweet Virgin Mary.
        </Typography>
      </Grid> */}
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: '3vh'}}>
      <PageTitle title="St Joseph Church"/>
      <About />
      <StJosephSchedule />
      <StJosephMap />
    </Box>    
  )
}

export default StJoseph;