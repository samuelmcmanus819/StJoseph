import PageTitle from "@/components/cross-platform/common/pagetitle";
import StStephenMap from "@/components/cross-platform/ststephen/map";
import StStephenSchedule from "@/components/cross-platform/ststephen/schedule";
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