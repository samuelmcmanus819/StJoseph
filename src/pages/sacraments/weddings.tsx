import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItemText, Typography } from "@mui/material";

const RCIA = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Weddings"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', my: "4vh"}}>
        <img src="/sacraments/weddings.png" width={200}/>
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start"}}>Planning for Weddings</Typography>
        <Typography sx={{pt: "2vh"}}>The sacrament of matrimony is reserved for those Catholics who are registered, attending, and supporting the parish for at least one year. Arrangements should be made with the priest or deacon of your intent to marry at least six months prior to the preferred wedding date. The celebration of marriage between two Catholics should normally be celebrated during Mass.<br></br><br></br></Typography>
        <Typography>Mass is not permitted when either bride or groom is non-Christian. In marriage of a Catholic and a baptized person of another faith, the rite for celebrating within Mass may be used.If the parties are from different parishes, either parish is appropriate for the celebration. If the bride or groom belongs to an Eastern Catholic rite, the celebration may take place in the church of either rite. If one party is not Catholic, the wedding can take place in the Catholic church, or with dispensation, in the church of the non-Catholic. Non-Catholic clergy may be present in the ritual of marriage in a Catholic Church and may offer  prayers and ask a blessing on the couple. A Catholic priest or deacon may assist in a non-Catholic church in ways in accord with the ritual of the host church.<br></br><br></br></Typography>
        <Typography>When one or both of the parties have had a previous marriage, it is necessary to ascertain if there has been a thorough recovery from that past experience. When there has been divorce involved, it is necessary to determine what kind of an annulment process is called for before allowing a date to be set for a wedding.<br></br><br></br></Typography>
        <Typography>It is a violation of civil law for a priest or deacon to witness marriage without a civil license. Even in the case of a validation, the couple is required to obtain a duplicate civil license. A waiting period of 72 hours between application for the license and celebration of the marriage rites is required by Texas State law.<br></br><br></br></Typography>
        <Typography>In validations, there is a need to review with the couple their relationship with the church, the religious training of any children and their motives for the requested validation. If in the case of pregnancy, the final decision to proceed with marriage, the preparation requirements are not to be altered to shorten the preparation time. In cases of cohabitation, the minister is to help the couple examine the realities of commitment, fidelity, and permanence.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>The engaged couple shall:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}>Notify the Church of their intent to marry at least six months prior to the preferred wedding date.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Take a communication survey approved by the Diocese as the first step in preparation.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Acquire necessary documents as required by Canon and Civil law.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Comply with a mutually agreed upon schedule of appointments during the preparation time.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Enroll in and complete a marriage preparation program recommended by your marriage minister.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Collaborate with the priest, deacon, or other minister in preparing the liturgical celebration.</ListItemText>
        </List>
        <Typography sx={{alignSelf: "start"}}>Seek counseling when:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}>One of the couple is under age 18</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>There is evidence of lack of maturity, compatibility or emotional stability</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>There is pregnancy involved with or prior to child birth</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>There is evidence of undue pressure to marry</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>A prior marriage is affecting expectations of the new relationship</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>There is an indication of current or past substance abuse by one or both parties</ListItemText>
        </List>
        <Typography sx={{alignSelf: "start"}}><b>Call the parish office to make arrangements with the priest or deacon for marriage preparation - <a href={`tel:(936) 344-6104`}>(936) 344-6104</a></b></Typography>
      </Box>
    </Box>
  )
}

export default RCIA;