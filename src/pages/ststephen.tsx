import PageTitle from "@/components/common/pagetitle";
import StStephenMap from "@/components/ststephen/map";
import StStephenSchedule from "@/components/ststephen/schedule";
import { Box } from "@mui/material";

const StStephen = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: '3vh'}}>
      <PageTitle title="St Stephen Church"/>
      <StStephenSchedule />
      <StStephenMap />
    </Box>   
  )
}

export default StStephen;