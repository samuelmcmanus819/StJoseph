import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItemText, Typography } from "@mui/material";

const Baptism = () => {
  return (
    <Box sx={{px: "10%", pb: "4vh"}}>
      <PageTitle title="Confirmation"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start'}}>
        <img src="/sacraments/confirmation.jpg" width={150}/>
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start"}}>Introduction</Typography>
        <Typography>
          This process is for Catholics who have already celebrated the other two Sacraments of Initiation (Baptism and Eucharist) and have received religious education in the past 2 years.<br></br><br></br>

          Confirmation is a sacrament of initiation that is closely connected to baptism and Eucharist. It completes the sacrament of baptism, brings an increase and deepening of baptismal grace and more clearly shows forth the gifts of the Spirit received in baptism. At the same time, the celebration of confirmation leads us to Eucharist as the way to live out being a fully initiated Catholic. Eucharist is the culmination of initiation.<br></br><br></br>

          The Catechism of the Catholic Church states that through the reception of the sacrament of Confirmation, “the baptized are more perfectly bound to the Church and are enriched with a special strength of the Holy Spirit.  Hence they are, as true witnesses of Christ, more strictly obliged to spread and defend the faith by word and deed.”  Clearly, the sacrament of Confirmation is not a solitary mystical experience.  Rather, it is about community. Confirmation is an ecclesial experience that, when approached with honesty and understanding, has the potential to profoundly strengthen the church and to build the Body of Christ.  Therefore, <b>the choice to be confirmed must be made with a personal commitment to the Gospel of Jesus Christ, and with a commitment to the Church.</b>  It is this rationale that forms the foundation for the Confirmation Program at St. Joseph Parish.<br></br><br></br>

          Those who have been baptized continue the path of Christian Initiation through the Sacrament of Confirmation. In this sacrament they receive the Holy Spirit who was sent upon the Apostles by the Lord on the day of Pentecost.<br></br><br></br>

          This gift of the Holy Spirit conforms believers more perfectly to Christ and strengthens them so that they may bear witness to Christ for the building up of His Body in faith and love. They are so marked with the character or seal of the Lord that the Sacrament of Confirmation cannot be repeated.
        </Typography>  
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start"}}>Overview</Typography>
        <Typography>
          The decision to be confirmed will be made through a discernment process that will include the student, his/her parents and the Confirmation Team. Not all candidates for Confirmation will be recommended, or choose, to be confirmed in the year that they participate in the program.  The candidate may not feel ready, the parent may not feel the candidate is ready or the parish may not feel the candidate is ready.  The decision to be confirmed needs to be made with a desire for commitment to the faith community and to the mission of the Church.  Confirming the baptism of a young person who is not ready to be confirmed fosters an “empty” commitment to faith.<br></br><br></br>
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText sx={{ display: "list-item" }}>Each candidate will be responsible for participating in service opportunities that specifically center around the corporal and spiritual works of mercy.  Candidates are required to keep a journal of these experiences. Each Candidate will prayerfully reflect on their service experiences.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>All Candidates are required to participate in a Retreat.  This retreat will  build and strengthen relationships that students have with each other and the faith community.  Participation in the Entire Retreat is required for the Candidate’s reception of the Sacrament.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Each Candidate will meet with his/her Parish Mentor for serious dialogue regarding their understanding of Confirmation.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Each Candidate will be asked to complete several essay questions and/or a test that pertains to the preparation process at the conclusion of the sessions.</ListItemText>
        </List>
        <Typography>
          <b>For baptized Catholics who seek Confirmation as adults</b><br></br>
          Some adult Catholics, for various reasons, were not Confirmed in their youth. The parish has structured a flexible program to meet the diversity of needs.  Adults will be grouped with other adults and not  placed in the catechetical process with adolescents.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "2vh", alignSelf: "start"}}>Qualifications of Candidates</Typography>
        <Typography>Each baptized Catholic has the right and the obligation to receive the Sacrament of Confirmation, but the candidate has the responsibility to personally choose to complete initiation into the faith life of the Church. The candidate may request the sacrament if he/she:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText sx={{ display: "list-item" }}>Is baptized and able to renew baptismal promises, unless a grave reason suggests otherwise</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Exhibits an active faith life and knowledge of the Church</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Participates in the sacramental life of the Church, especially Eucharistic liturgies</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Is willing to commit to active involvement in the parish Confirmation catechesis</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Is willing to respond to the call to active ministry</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Is willing to continue to learn and grow in faith following Confirmation and throughout his/her lifetime</ListItemText>
        </List>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Age of the Candidate</Typography>
        <Typography>
          The Archbishop of the Archdiocese of Galveston—Houston has established the 10th or 11th grade as the specific period for Confirmation preparation and reception of the sacrament. This is when a person is old enough to make his/her own decisions. The rite is seen as a strengthening of the rites of baptism and communion in which a person is now able take responsibility for his/her own faith and destiny.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Sponsors</Typography>
        <Typography>
          Sponsors represent in a personal way the witness and support of the parish community.  Opportunities for catechesis should be offered to the sponsors in order to assist them in fully understanding their role in the ongoing formation of the candidates. The sponsors should participate with the candidates in their preparation, as well as the celebration.<br></br><br></br>

          To perform the role of sponsor, it is necessary that a person:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText sx={{ display: "list-item" }}>Be designated by the one to be Confirmed, by the parents or the one who takes their place or, in their absence, by the pastor or minister and is to have the qualifications and intention of performing the role</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Have completed the sixteenth year, unless a different age has been established by the diocesan bishop or it seems to the pastor or minister that an exception is to be made for a just cause</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Be a Catholic who has been Confirmed and has already received the sacrament of the Eucharist and leads a life in harmony with faith and the role to be undertaken</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Not be bound by any canonical penalty legitimately imposed or declared</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Not be the father or the mother of the one to be Confirmed.</ListItemText>
        </List>
        <Typography>
          More than one can be used but only one is designated as the liturgical sponsor, standing with the candidate at Confirmation<br></br><br></br>
        
          A proxy may be used, but it is recommended that someone nearby be chosen to sponsor, so that he/she can become more involved in the candidate's preparatio
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Parents</Typography>
        <Typography sx={{alignSelf: "start"}}>
          For the Sacrament of Confirmation, the parental role is very much one of spiritual companion and advisor, that is, both parent and child learning and growing in understanding of Catholic traditions and beliefs. As part of their continuing support and witness, parents should attend catechetical sessions provided by the parish for their own faith formation. With the parish’s help, parents will be better able to share their own faith journey, thereby helping the candidate reach his/her own decision to go forward in faith.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Catechesis</Typography>
        <Typography  sx={{alignSelf: "start"}}>
          Keeping in mind that all catechesis should lead a person to a conscious, active and living faith, each parish should provide a process of immediate preparation to celebrate the Confirmation.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Celebration</Typography>
        <Typography>
          The celebration of Confirmation should be carefully prepared and well executed, following the Rite of Confirmation. The ceremony should normally be celebrated within the Eucharistic Liturgy. The sacrament of Confirmation should be held at a time when the parish community can witness and participate in this celebration of the growth of their parish family.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Use of Stoles</Typography>
        <Typography>
          It has become a practice in sortie communities for the candidate to be presented with stoles after the Confirmation rite. The Bishops Committee on the Liturgy has deemed this an inappropriate symbol and practice for Confirmation, and requested that it be discontinued.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Taking Another Name</Typography>
        <Typography>
          As greater emphasis is placed on the intimate connection between Baptism and Confirmation, the Baptismal name is seen as having greater significance. Candidates may choose a Confirmation name if they so desire. This is especially true if the Baptism name is not a saint's name.
        </Typography>
      </Box>
      
    </Box>
  )
}

export default Baptism;