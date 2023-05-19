import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItemText, Typography } from "@mui/material";

const RCIA = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="RCIA"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: "4vh"}}>
        <img src="/education/rcia.jpg" width={300}/>
        <Typography sx={{pt: "2vh"}}>RCIA is a formation process that informs, transforms, and affects all dimensions of life. RCIA prepares individuals and communities for transformation and conversion and leads one to surrender of oneself to God, to grow into the fullness of God’s design for us.<br></br><br></br></Typography>
        <Typography>RCIA is not a program — it is a sacramental formation process rooted within God’s unconditional love and the call to a covenant relationship. RCIA is intended to facilitate the experience of conversion and the response of faith.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>RCIA is for:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText key="1" sx={{ display: "list-item" }}>All adults (unbaptized, baptized non-Catholic, or baptized Catholic) who would like to ask questions and get answers so they can make an educated and informed decision about becoming or being a Catholic.</ListItemText>
          <ListItemText key="2" sx={{ display: "list-item" }}>Baptized Catholic adults who need to complete their Catholic lives by receiving the Sacrament(s) of:Eucharist, Reconciliation and/or Confirmation. </ListItemText>
          <ListItemText key="3" sx={{ display: "list-item" }}>Anyone interested in continuing education in Catholicism.</ListItemText>
        </List>
      </Box>
    </Box>
  )
}

export default RCIA;