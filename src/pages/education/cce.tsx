import PageTitle from "@/components/common/pagetitle";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const CCE = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="CCE"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: "4vh"}}>
        <img src="/education/cce.jpeg" width={200}/>
        <Typography sx={{pt: "2vh"}}>Religious education is a lifelong process that calls forth an explicit profession of faith for every man, woman, and child who makes up our Church. This teaching ministry of the Church is a form of the ministry of the Word of God, proclaiming and teaching about the Kingdom of God. Its purpose is to make the life of faith of the individuals within a parish conscious, living, and active. The director of the religious education guides the direction and focus for the religious education programs that are available for our children.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>In an effort to return to normalcy after such a trying time, we plan to launch a complete 2022- 2023 CCE Program. However, in order to make the Program a reality, we need your help. Our faith community is in need of a CCE Director and CCE catechists. While certain training is required for these positions, the Archdiocese is aware that this is an issue and has agreed to provide training as needed. Please note that applicants must be in good standing with the Church. All those interested, please submit your name, phone number, email address, and the position you are interested in to the church office by Friday, August 19, 2023. The Pastoral Council will conduct interviews and select the 2023-2024 CCE Director and catechists.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}><b>Registration will be held on weekends of Sept. 3 & 4, 10 & 11, 17 & 18 after all Masses.</b> Classes will be held on Wednesday beginning, Sept. 21. As part of the registration, copies of Birth Certificate, Sacramental records must be furnished for each child if applicable. A registration fee of $50 per child will be collected at time of registration.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}><b><u>Volunteers are welcomed as catechists, aids, and office staff.</u></b><br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>Religious education classes for children are held on Wednesday and include sessions for preschool, kindergarten,elementary-grades, high school levels and sacrament preparation . Our goal is to work with families to educate children in the Catholic faith and to encourage the children to have a living faith marked by active participation in the life of the Church. Since the family is the first place where faith is learned, lived, and interpreted, we feel that it is our role to assist parents in their role as catechists through liturgical celebrations and programs of systematic catechesis. Together with the family, we form a partnership in the responsibility of forming children in the Four Pillars of the Catholic faith: Creed, Holy Sacraments, Christian life, and Prayer.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>The director of the religious education guides the direction and focus for the religious education programs that are available for our children.<br></br><br></br></Typography>
        <Typography variant='h5' sx={{pt: "2vh", alignSelf: 'start'}}>Additional Links</Typography>
        <List sx={{ listStyleType: "disc", pl: 4, alignSelf: 'start' }}>
          <ListItemText sx={{ display: "list-item" }}>To register your child for CCE, please fill out the CCE Registration Form and bring it with you on the day of registration.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>To begin the process of first communion, please fill out the Communion Information Form and bring it to the office.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>To begin the process of confirmation, please fill out the Confirmation Information Form and bring it to the office.</ListItemText>
          <ListItemText sx={{ display: "list-item" }}>For more information on the class schedule, please see the Calendar.</ListItemText>
        </List>
      </Box>
    </Box>
  )
}

export default CCE;