import PageTitle from "@/components/common/pagetitle";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Sacraments = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Sacraments"/>
      <Box sx={{px: { xs: 0, md: "15%" }}}>
        <Box sx={{mb: "2vh"}}>
          <Typography variant="h5" fontWeight="bold" sx={{mt: "-2vh", mb: "2vh"}}>Annointing of the Sick</Typography>
          <Typography>Suffering and illness have always been among the greatest problems that trouble the human spirit. Although closely linked with the human condition, sickness cannot as a general rule be regarded as a punishment inflicted on each individual for personal sins ( John 9.3). part of the plan laid out by God s providence is that we should fight strenuously against all sickness and carefully seek out the blessings of good health.<br></br><br></br>The Lord himself showed great concern for the bodily and spiritual welfare of the sick and commanded his followers to do likewise. This is clear from the gospels and above all from the existence of the Sacrament of the Anointing of the Sick, which he instituted and which is made known in the Letter of James.<br></br><br></br></Typography>
          <Typography>Those who are seriously ill need the special help of God s grace in this time of anxiety, lest they be broken in spirit and, under the pressure of temptation, perhaps weakened in their faith. This is why, through the Sacrament of Anointing of the Sick, Christ strengthens the faithful who are afflicted by illness, providing them with the strongest means of support .<br></br><br></br></Typography>
          <Typography>Anointing of the Sick every first Friday of the month during 8:00 AM Mass. For emergency please call the parish office <a href={`tel:(936) 344-6104`}>(936) 344-6104</a>.</Typography>
        </Box>
        <Box sx={{mb: "2vh"}}>
          <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh"}}>Baptism</Typography>
          <Typography>"Christian initiation is accomplished by three sacraments together: Baptism which is the beginning of new life; Confirmation which is its strengthening; and the Eucharist which nourishes the disciple with Christ's Body and Blood for his transformation in Christ. " - (CCC 1275). The Sacrament of Baptism is the initial sacrament of faith and through the waters of Baptism we enter a new kind of life, the life of the spirit.<br></br><br></br></Typography>
          <Typography>Baptism Interviews are the last Tuesday of the month by prior arrangement. Please go to the <Link href="/sacraments/baptismform">Pre-Baptism Visit Form</Link>, print and bring it with you to your initial visit. For more information on the sacrament of baptism, click <Link href="/sacraments/baptism">here</Link>.</Typography>
        </Box>
      </Box>
      <Box>
        
      </Box>

    </Box>
  )
}

export default Sacraments;