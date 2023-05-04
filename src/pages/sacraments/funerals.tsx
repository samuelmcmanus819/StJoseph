import PageTitle from "@/components/common/pagetitle";
import { Box, Grid, Typography } from "@mui/material";

const Funerals = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Funerals"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: "4vh"}}>
        <img src="/mary.jpeg" width={300}/>
        <Typography sx={{pt: "2vh"}}>By means of the funeral rites, it is has been the practice of the Church, as a tender mother, not simply to commend the dead to God, but also to raise high the hope of its children and to give witness to its own faith in the future resurrection of the baptized with Christ.<br></br><br></br></Typography>
        <Typography>In the face of death, the Church confidently proclaims that God has created each person for eternal life and that Jesus, the Son of God, by his death and resurrection, has broken the chains of sin and death that bound humanity.<br></br><br></br></Typography>
        <Typography sx={{display: 'flex', alignSelf: 'start'}}>Christians celebrate the funeral rites to offer worship, praise and thanksgiving to God for the gift of life which has now been returned to God, the author of life and the hope of the just.  The celebration of the Christian funeral brings hope and consolation to the living.</Typography>
        <Box sx={{mt: "2vh", alignSelf: { xs: "start" }}}>
          <Typography fontWeight="bold">A Prayer for the Dead</Typography>
          <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: "3vh"}}>
            <Box>
              <Typography>God our Father,<br></br>Your power brings us to birth,<br></br>Your providence guides our lives,<br></br>and by Your command we return to dust.<br></br><br></br></Typography>
              <Typography>Lord, those who die still live in Your presence,<br></br>their lives change but do not end.<br></br>I pray in hope for my family,<br></br>relatives and friends,<br></br>and for all the dead known to You alone.<br></br><br></br></Typography>
            </Box>
            <Box sx={{ml: { xs: 0, sm: "7%" }, mr: { xs: 0, lg: "10%" }}}>
              <Typography>In company with Christ,<br></br>Who died and now lives,<br></br>may they rejoice in Your kingdom,<br></br>where all our tears are wiped away.<br></br>Unite us together again in one family,<br></br>to sing Your praise forever and ever.<br></br><br></br>Amen.</Typography>
            </Box>
            <Box sx={{display: { xs: 'none', lg: 'block' }}}>
              <img src="/sacraments/funerals.jpg" width={280}/>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}

export default Funerals;