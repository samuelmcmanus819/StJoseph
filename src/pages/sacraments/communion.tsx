import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItemText, Typography } from "@mui/material";

  const Communion = () => {
  return (
    <Box sx={{px: "10%", pb: "4vh"}}>
      <PageTitle title="Communion"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src="/sacraments/communion.jpg" width={150}/>
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start"}}>
          Introduction
        </Typography>
        <Typography>
          The Eucharist is of such importance in our lives as faithful people that the Second Vatican Council stated that the Eucharist is &quot;the source and summit of the Christian life (Lumen Gentium, 11).&quot; Preparation for any sacrament is a journey of the heart that prepares us to meet the Risen Lord Jesus Christ. It involves reflection, prayer, faith sharing and ritual celebration with parents and other candidates.
        </Typography>  
        <Typography variant="h5" fontWeight="bold" sx={{mt: "2vh", alignSelf: "start"}}>Eucharist the Source and Summit</Typography>
        <Typography>
          &quot;They devoted themselves to the apostles&apos; teaching and fellowship, to the breaking of the bread and the prayers... Day by day, attending the temple together and breaking bread in their homes, they partook of food with glad and generous hearts .&quot; (Acts 2:42,46)<br></br><br></br>

          From the earliest days the community has gathered around the Eucharistic table. &quot;Initiated into the Christian mystery by Baptism and Confirmation, Christians are fully joined to the Body of Christ in the Eucharist (National Catechetical Directory , # 120).<br></br><br></br>

          The Eucharist is of such importance in our lives as faithful people that the Second Vatican Council stated that the Eucharist is &quot;the source and summit of the Christian life (Lumen Gentium, 11).&quot;<br></br><br></br>

          The basic principles of the Sacramental Guidelines are:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}>Sacraments are celebrations of the community.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>The celebration of Eucharist is the culmination of initiation.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>The Baptized, when suitably prepared and properly disposed, have a right to Eucharist.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>The criteria for preparation and celebration is readiness (not age or grade level).</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Parents, in dialogue with the parish staff, have the right and responsibility to determine the readiness of their own child.</ListItemText>
        </List>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>Preparation for the Sacrament</Typography>
        <Typography>
            Preparation for any sacrament is a journey of the heart that prepares us to meet the Risen Lord Jesus Christ. It involves reflection, prayer, faith sharing and ritual celebration with parents and other candidates.<br></br><br></br>

            This is not an educational process or a time to &quot;make up or catch up&quot; on catechetical material. In the case of preparation for First Communion, if a child is lacking age-appropriate foundational catechesis, the appropriate process is The Rite of Christian Initiation of Adults for Children of Catechetical Age.<br></br><br></br>

            Immediate catechesis for the Sacrament of Eucharist is to be short and focused on the preparation for the celebration of the sacrament. The goal of this catechesis is to help children participate in the Mass in a meaningful, reverent manner. The content of the preparation is to have at its core the format/structure of the Eucharistic celebration. Themes should include &quot;sharing, listening, eating, conversing, giving, thanking and celebrating (NCD, # 122).&quot;
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>The Importance of Parents</Typography>
        <Typography>
          Parents are the primary educators of their child/children. In celebrating the Rite of Baptism of Infants, parents publicly commit to forming their children in the life of faith. Parents are addressed:<br></br><br></br>

          &quot;Parents, you have asked to have your child baptized. In doing so you are accepting the responsibility of training them in the practice of the faith. It will be your duty to bring him/her up to keep God&apos;s commandments as Christ taught us, by loving God and neighbor. (RB # 39).&quot;<br></br><br></br>

          &quot;Parents have a right and duty to be intimately involved in preparing their children for First Communion. Catechesis aims to help parents grow in their understanding and appreciation of the Eucharist and participate readily in the catechizing of their children (NCD #121).&quot;<br></br><br></br>

          Parish programs of religious formation assist parents in this most important responsibility but never displace the rightful role of parents.<br></br><br></br>
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mt: "1vh", alignSelf: "start"}}>What is Readiness?</Typography>
        <Typography sx={{alignSelf: "start"}}>
          When speaking of the readiness of a child to celebrate a sacrament, there are three areas to address: the family, the individual and the parish community.
        </Typography>
        
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}>The family is the primary place where children are formed in faith.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Does your family participate in the life of the community in the areas of worship, formation (education) and service?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Has your child received appropriate formation for his/her age?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Does your family pray together at home?</ListItemText>
        </List>
          <Typography sx={{alignSelf: "start"}}>The readiness of the individual involves the following:</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}> Is the person baptized and does he/she have the use of reason (about the age of seven)?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Does the person express a desire to celebrate Eucharist?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Does the person participate in the worship life of the community on a regular basis?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Has the person been formed in faith in an age appropriate manner?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Is there a commitment from this person to continue formation and participation in the worship life of the community?</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>Can the person distinguish Eucharist from ordinary bread?</ListItemText>
        </List>
        <Typography sx={{alignSelf: "start"}}>Because sacraments are community celebrations, the parish also has a responsibility in sacramental preparation.</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: "start" }}>
          <ListItemText sx={{ display: "list-item" }}>The parish provides you (parents) with the necessary support and information to enable you to fulfill your role as primary educator of your child.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>The parish provides opportunities for life-long faith formation.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>The parish community welcome children into its life.</ListItemText>
        </List>
      </Box>
    </Box>
  )
  }

export default Communion;