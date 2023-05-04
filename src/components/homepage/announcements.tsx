import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

const Announcements = () => {
  const announcements = [{ 
                          title: 'CCE News',
                          text: 'No CCE Classes Wednesday Nov. 23. On Sunday, December 18, 2022, the CCE Program is planning to present a Christmas Sing Along with a Pot Luck Luncheon after the 11:00 AM Mass. Parents, we need your help. We would like for all of our CCE students to participate in the Christmas Sing Along. Practice will be Sunday Nov. 27, Dec. 4, and Dec. 11 after the 11:00am Mass.', 
                          image: 'carousel-images/adoration.png' 
                        }, 
                        { 
                          title: 'Adoration of the Blessed Sacrament',
                          text: 'Blessed Sacrament from Nov. 23 - Nov. 27 in observance of Thanksgiving Day. Volunteers are needed for morning, afternoon, and especially evening hours and Thursdays. Anyone wishing to dedicate an hour of prayer to the Blessed Sacrament, contact: Charlotte Schrader or Liz Billnoske.', 
                          image: 'carousel-images/father-kim.png' 
                        }, 
                        {  
                          title: 'Volunteers Needed to Decorate for Christmas',
                          text: 'We need help decorating the exterior of the church. The decorations are already bought and stored in the storage building. We need help setting it up in December and then taking them down in January. If youre interested, contact Liz at the parish office',
                          image: 'next.svg'
                        },
                        {  
                          title: 'Volunteers Needed to Decorate for Christmas',
                          text: 'We need help decorating the exterior of the church. The decorations are already bought and stored in the storage building. We need help setting it up in December and then taking them down in January. If youre interested, contact Liz at the parish office',
                          image: 'next.svg'
                        }]
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex((index + 1) % announcements.length);
  }

  const decrementIndex = () => {
    index == 0 ? setIndex(announcements.length - 1) : setIndex(index - 1)
  }
  
  return (
    <Box sx={{ backgroundColor: 'primary.main', width: '100%', pt: '4vh', pb: '6vh', color: 'background.default', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
        <Typography sx={{fontSize: "xx-large", pb: '3vh'}}>
          What's Happening
        </Typography>
        <Box sx={{display: { xs: 'none', lg: 'flex' }, flexDirection: 'row', justifyContent: 'center'}}>
          <IconButton onClick={decrementIndex}>
            <ArrowBackIosNew fontSize="large" sx={{alignSelf: 'center', zIndex: 100}}/>
          </IconButton>
          {Array.of(announcements[index], announcements[(index + 1) % announcements.length], announcements[(index + 2) % announcements.length]).map(announcement => 
            <Card sx={{mx: '1%', width: 300, height: { xl: '56vh', lg: '60vh' }}}>
              <img src={announcement.image} width={300} height={250}/>
              <CardContent>
                <Typography sx={{fontWeight: 'bold', mb: '1vh'}}>{announcement.title}</Typography>
                <Typography>{announcement.text && announcement.text?.length > 100 ? announcement.text?.substring(0, 99) + '...' : announcement.text}</Typography>
                <Link href="documents/bulletin.pdf">Read More</Link>
              </CardContent>
            </Card>)}
          <IconButton onClick={incrementIndex}>
            <ArrowForwardIos fontSize="large" sx={{alignSelf: 'center'}} />
          </IconButton>
        </Box>

        <Box sx={{display: { xs: 'none', md: 'flex', lg: 'none' }, flexDirection: 'row', justifyContent: 'center'}}>
          <IconButton onClick={decrementIndex}>
            <ArrowBackIosNew fontSize="large" sx={{alignSelf: 'center', zIndex: 100}}/>
          </IconButton>
          {Array.of(announcements[index], announcements[(index + 1) % announcements.length]).map(announcement => 
            <Card sx={{mx: '1%', width: 300, height: '60vh'}}>
              <img src={announcement.image} width={300} height={250}/>
              <CardContent>
                <Typography sx={{fontWeight: 'bold', mb: '1vh'}}>{announcement.title}</Typography>
                <Typography>{announcement.text && announcement.text?.length > 100 ? announcement.text?.substring(0, 99) + '...' : announcement.text}</Typography>
                <Link href="documents/bulletin.pdf">Read More</Link>
              </CardContent>
            </Card>)}
          <IconButton onClick={incrementIndex}>
            <ArrowForwardIos fontSize="large" sx={{alignSelf: 'center'}} />
          </IconButton>
        </Box>

        <Box sx={{display: { xs: 'flex', md: 'none' }, flexDirection: 'row', justifyContent: 'center'}}>
          <IconButton onClick={decrementIndex}>
            <ArrowBackIosNew fontSize="large" sx={{alignSelf: 'center', zIndex: 100}}/>
          </IconButton>
          {Array.of(announcements[index]).map(announcement => 
            <Card sx={{mx: '1%', width: 300, height: '56vh'}}>
              <img src={announcement.image} width={300} height={250}/>
              <CardContent>
                <Typography sx={{fontWeight: 'bold', mb: '1vh'}}>{announcement.title}</Typography>
                <Typography>{announcement.text && announcement.text?.length > 100 ? announcement.text?.substring(0, 99) + '...' : announcement.text}</Typography>
                <Link href="documents/bulletin.pdf">Read More</Link>
              </CardContent>
            </Card>)}
          <IconButton onClick={incrementIndex}>
            <ArrowForwardIos fontSize="large" sx={{alignSelf: 'center'}} />
          </IconButton>
        </Box>
          
    </Box>
    
  );
}

export default Announcements;