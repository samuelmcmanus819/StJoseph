import PageTitle from "@/components/common/pagetitle";
import About from "@/components/stjoseph/about";
import StJosephMap from "@/components/stjoseph/map";
import StJosephSchedule from "@/components/stjoseph/schedule";
import { Box } from "@mui/material"

const StJoseph = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: '3vh', px: {xs: '10%', lg: 0}}}>
      <PageTitle title="St Joseph Church"/>
      <About />
      <StJosephSchedule />
      <StJosephMap />
    </Box>    
  )
}

export default StJoseph;