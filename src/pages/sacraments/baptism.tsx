import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItemText, Typography } from "@mui/material";

const Baptism = () => {
  return (
    <Box sx={{px: "10%", pb: "4vh"}}>
      <PageTitle title="Baptism"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start'}}>
        <img src="/sacraments/baptism.jpg" width={150}/>
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start"}}>
          Introduction
        </Typography>
        <Typography>
          Christian initiation is accomplished by three sacraments together:  Baptism which is the beginning of new life; Confirmation which is its strengthening; and the Eucharist which nourishes the disciple with Christ's Body and Blood for his transformation in Christ. (CCC 1275)<br></br><br></br>

          The Sacrament of Baptism is the initial sacrament of faith.  In this sacrament, the person is immersed in to the passion, death and resurrection of Christ (Paul-Romans).  The effects of Original Sin are combated in that Baptism.  Baptism transforms the relationship between God and the believer and His light brings us out of darkness into the splendor of God&#39;s kingdom of light.  Through the waters of Baptism we enter a new kind of life, the life of the spirit.<br></br><br></br>    

          The Church baptizes infants/children on the faith of the parents &#8208; a faith that will be shared, by word and example, with the newly baptized infants as they grow into responsible young adulthood.  This ancient practice of Infant Baptism continues in the church today. <br></br><br></br>

          The goal of Christian Initiation is the formation of a spirit-filled adult community of deeply committed Christians who in bearing witness to their faith in Christ glorify their Father in heaven.   Baptism must be understood as a “new birth”. It is the first stage in an extended process of growth towards Christian maturity.  In choosing baptism for an infant, parents and the community accept the responsibility to continue the initiation of the baptized through the Eucharist and Confirmation.<br></br>
        </Typography>  
        <Typography variant="h5" fontWeight="bold" sx={{mt: "2vh", alignSelf: "start"}}>Basic Requirements for Parents</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText key="1" sx={{ display: "list-item" }}>Parents who are registered members are to contact the church office in the 4th or 5th month of pregnancy</ListItemText>
          <ListItemText key="2" sx={{ display: "list-item" }}>Parents must set up an appointment to meet with the priest or deacon in order to fix the date of the Baptism and fill in the necessary questionnaire.  Call the church office to make arrangements.  The  priest or deacon will contact you  to set an appointment.</ListItemText>
          <ListItemText key="3" sx={{ display: "list-item" }}>Parents who are Catholics but are not married in a Catholic Church (Civil Marriage) are required to contact the priest about validation of their marriage.</ListItemText>
          <ListItemText key="4" sx={{ display: "list-item" }}>Both parents are expected to be aware of the ritual of the Baptism Sacrament and the godparents too must be made aware of their responsibilities.</ListItemText>
          <ListItemText key="5" sx={{ display: "list-item" }}>It is customary in the Catholic Church to have one godmother and one godfather. Godparents must be Catholic, above 16 years of age, and have received the three sacraments of initiation (that is Baptism, Confirmation and Eucharist). Godparents must be actively practicing their faith.</ListItemText>
          <ListItemText key="6" sx={{ display: "list-item" }}>Baptism may be delayed or postponed for non-compliance with any of above and for non-practice of the Catholic faith.</ListItemText>
        </List>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Baptism Information</Typography>
        <Typography>
          Arrangements for Baptism are to be made through a personal conversation with the parish priest or designated minister &#8208; prior to the Baptism. Parents and godparents must attend baptism classes.<br></br><br></br>                   

          Parents who are seeking Baptism for their children are asking that their son/daughter be initiated into the Catholic Community and the local Church Community of St. Joseph. The Church baptizes infants/children on the faith of the parents. The ideal is that parents have a deep faith, which they actively live out in the experience of the Catholic Church Community.  Children's faith is learned from their parents.<br></br><br></br>
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Parents</Typography>
        <Typography>
          Arrangements for the date and time of a baptism must be made with the parish priest or designated minister. To assist parents in preparing for the baptism of their child, St. Joseph offers Baptism classes (2 are required). We ask that parents and godparents attend these classes or provide a written statement from the Catholic Church where the classes were taken.<br></br><br></br>
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Instructions to Parents</Typography>
        <Typography sx={{alignSelf: "start"}}>
          Meet with the priest or deacon to complete the registration form for Baptism at the Church Office.<br></br><br></br>

          Provide the child’s birth certificate (prior to the Baptism); a copy will be made in the Church Office and the original returned to you.<br></br><br></br>

          If you attend Mass at another parish, a letter of permission, from that parish, to have your child baptized here will be requested.<br></br><br></br>
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Godparents</Typography>
        <Typography  sx={{alignSelf: "start"}}>
        According to Canon Law:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText key="1" sx={{ display: "list-item" }}>A godparent for a Catholic Baptism must be a fully initiated practicing Catholic. Non-Catholics may not serve as godparents for a Catholic Baptism.</ListItemText>
          <ListItemText key="2" sx={{ display: "list-item" }}>At least one godparent is required; no more than two (one male and one female) are allowed.</ListItemText>
          <ListItemText key="3" sx={{ display: "list-item" }}>The Godparent needs to be a practicing Catholic who is at least sixteen (16) years of age.</ListItemText>
          <ListItemText key="4" sx={{ display: "list-item" }}>The godparent must be fully initiated in the Catholic Church, that is, they must have received the sacraments of Baptism, First Communion, and Confirmation.  Regular attendance at Mass is expected.  Regular participation in the Sacrament of Reconciliation is encouraged.</ListItemText>
          <ListItemText key="5" sx={{ display: "list-item" }}>If married, the godparent needs to be in a marriage considered valid in the Catholic Church. This may be proved with a recent copy of the person’s Baptismal certificate; the godparents may be asked to provide this document to the Church Office.</ListItemText>
          <ListItemText key="6" sx={{ display: "list-item" }}>In order to prepare for the celebration of this sacrament, we ask that godparents attend Baptism classes (here or elsewhere).</ListItemText>
        </List>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Baptism Classes</Typography>
        <Typography>
        Baptism interviews are normally held on the last Tuesday of the month with classes scheduled following the interview.  Classes are normally held in the Large Meeting Room in the Office Building.<br></br><br></br>
        <List sx={{ listStyleType: "disc", pl: 4, mt: -2 }}>
          <ListItemText key="1" sx={{ display: "list-item" }}>Attendance at classes is expected.</ListItemText>
          <ListItemText key="2" sx={{ display: "list-item" }}>Registration for the classes is required.</ListItemText>
          <ListItemText key="3" sx={{ display: "list-item" }}>Both parents and godparents should attend classes.</ListItemText>
          <ListItemText key="4" sx={{ display: "list-item" }}>If the classes are taken at another parish, a letter stating that they were completed is requested.</ListItemText>
        </List>
        We do offer our classes for those who are having their children baptized in another parish. Please stop by the Church Office to register for Baptism Classes only.  A Certificate/Letter will be provided upon successful attendance at the classes.<br></br><br></br>

        It is important that all the documents (registration form, birth certificate, etc.) and the attendance at class are completed prior to the Baptism. Your child’s baptism may be postponed if the necessary items have not been completed.<br></br><br></br>
      </Typography>
      </Box>
      
    </Box>
  )
}

export default Baptism;