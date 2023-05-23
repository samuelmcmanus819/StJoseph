import PageTitle from "@/components/common/pagetitle";
import { Box, Typography } from "@mui/material";

const Annointing = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Annointing of the Sick"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src="/sacraments/annointing.jpg" width={150}/>
        <Typography sx={{pt: "2vh"}}>Suffering and illness have always been among the greatest problems that trouble the human spirit. Although closely linked with the human condition, sickness cannot as a general rule be regarded as a punishment inflicted on each individual for personal sins ( John 9.3). part of the plan laid out by God s providence is that we should fight strenuously against all sickness and carefully seek out the blessings of good health.<br></br><br></br>The Lord himself showed great concern for the bodily and spiritual welfare of the sick and commanded his followers to do likewise. This is clear from the gospels and above all from the existence of the Sacrament of the Anointing of the Sick, which he instituted and which is made known in the Letter of James.<br></br><br></br></Typography>
        <Typography>Those who are seriously ill need the special help of God s grace in this time of anxiety, lest they be broken in spirit and, under the pressure of temptation, perhaps weakened in their faith. This is why, through the Sacrament of Anointing of the Sick, Christ strengthens the faithful who are afflicted by illness, providing them with the strongest means of support .<br></br><br></br></Typography>
        <Typography sx={{display: 'flex', alignSelf: 'start'}}>Anointing of the Sick every first Friday of the month during 8:00 AM Mass. For emergency please call the parish office (936) 344-6104.</Typography>
      </Box>
    </Box>
  )
}

export default Annointing;