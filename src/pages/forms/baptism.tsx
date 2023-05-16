import React, { ReactInstance, useRef } from 'react';
import { Box, FormControl, Typography, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormLabel, TextField } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import AddressForm from '@/components/forms/address';


const BaptismForm = () => {
  const componentRef = useRef();

  const printPDF = useReactToPrint({
    content: () => componentRef.current as unknown as ReactInstance,
  });

  return (
    <Box sx={{display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', py: '2vh'}}>
      <Box ref={componentRef} sx={{display: 'flex', flexDirection: 'column', px: "15%", alignItems: 'center', width: '100%'}}>
        <Typography variant="h3" sx={{width: '100%', textAlign: 'center'}}>Prebaptism Visit Form</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
          <FormControl sx={{mr: '3%', width: '100%'}}>
            <FormLabel sx={{color: 'black'}}>Father's Name</FormLabel>
            <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
          </FormControl>
          <FormControl sx={{ml: '3%', width: '100%'}}>
            <FormLabel sx={{color: 'black'}}>Mother's Name</FormLabel>
            <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
          </FormControl>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
          <FormControl sx={{mr: '3%', width: '100%'}}>
            <FormLabel sx={{color: 'black'}}>Email</FormLabel>
            <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
          </FormControl>
          <FormControl sx={{ml: '3%', width: '100%'}}>
            <FormLabel sx={{color: 'black'}}>Phone Number</FormLabel>
            <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
          </FormControl>
        </Box>
        <AddressForm />
        <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', mr: '5%', width: '80%'}}>
            <FormControl>
              <FormLabel sx={{color: 'black'}}>Registered Member in Parish?</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes"/>
                <FormControlLabel value="No" control={<Radio />} label="No"/>
              </RadioGroup>
            </FormControl>
            <FormControl sx={{mt: '3vh', width: '50%'}}>
              <FormLabel sx={{color: 'black'}}>Length of Membership in Parish</FormLabel>
              <Select sx={{height: '5vh', '&.MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}>
                <MenuItem value="Less Than 1 Year">Less Than 1 Year</MenuItem>
                <MenuItem value="More Than 1 Year">More Than 1 Year</MenuItem>
                <MenuItem value="More Than 2 Years">More Than 2 Years</MenuItem>
                <MenuItem value="More Than 5 Years">More Than 5 Years</MenuItem>
                <MenuItem value="More Than 10 Years">More Than 10 Years</MenuItem>
                <MenuItem value="More Than 20 Years">More Than 20 Years</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{mt: '2vh'}}>
              <FormLabel sx={{color: 'black'}}>Active Involvement in Parish?</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes"/>
                <FormControlLabel value="No" control={<Radio />} label="No"/>
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ml: '-1%', width: '100%'}}>
              <FormLabel sx={{color: 'black'}}>If yes, describe</FormLabel>
              <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
            </FormControl>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', ml: '5%', width: '100%', mt: '4vh'}}>
            <FormControl>
              <FormLabel sx={{color:'black'}}>Have you attended any previous pre-baptism classes?</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes"/>
                <FormControlLabel value="No" control={<Radio />} label="No"/>
              </RadioGroup>
            </FormControl>
            <FormControl sx={{mt: '2vh'}}>
              <FormLabel sx={{color: 'black'}}>If yes, when did you attend them?</FormLabel>
              <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
            </FormControl>
            <FormControl sx={{mt: '2vh'}}>
              <FormLabel sx={{color: 'black'}}>If yes, where did you attend them?</FormLabel>
              <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
        <FormControl sx={{width: '100%'}}>
            <FormLabel sx={{color: 'black'}}>Comments</FormLabel>
            <TextField multiline rows={4} sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
          </FormControl>
        </Box>
      </Box>
      <Typography sx={{my: '2vh', width: '100%', textAlign: 'center', px: "15%"}}>
        <b>Please print out this form by clicking the Print button.</b> <br></br>
      </Typography>
      <Typography sx={{width: '100%', px: "15%"}}>
        Pre-Baptism Interviews will be held the last Tuesday of the month. Please call the office @ (936) 344-6104 to confirm. Please provide the child's birth certificate at the interview; a copy will be made in the Church Office. If you attend Mass at another parish, a letter of permission, from that parish, to have your child baptized here will be requested.
      </Typography>
      <Button onClick={printPDF} sx={{mt: '3vh', backgroundColor: 'primary.main', color: 'white'}}>
        Print
      </Button>
    </Box>
    
  )
}
export default BaptismForm;