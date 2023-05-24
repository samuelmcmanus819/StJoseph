import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import jsonData from '../../../public/announcements/announcements.json'

const Announcements = () => {
  const announcements = JSON.parse(JSON.stringify(jsonData))
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
          What&apos;s Happening
        </Typography>
        <Box sx={{display: { xs: 'none', lg: 'flex' }, flexDirection: 'row', justifyContent: 'center'}}>
          <IconButton onClick={decrementIndex}>
            <ArrowBackIosNew fontSize="large" sx={{alignSelf: 'center', zIndex: 100}}/>
          </IconButton>
          {Array.of(announcements[index], announcements[(index + 1) % announcements.length], announcements[(index + 2) % announcements.length]).map(announcement => 
            <Card key={announcement.title} sx={{mx: '1%', width: 300, height: { xl: '56vh', lg: '60vh' }}}>
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
            <Card key={announcement.title} sx={{mx: '1%', width: 300, height: '60vh'}}>
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
            <Card key={announcement.title} sx={{mx: '1%', width: 300, height: '56vh'}}>
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