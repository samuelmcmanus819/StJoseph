import { Box, FormControl, FormLabel, MenuItem, Select, TextField } from "@mui/material"

const AddressForm = () => {
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia','Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ]
  
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
        <FormControl sx={{width: '100%'}}>
          <FormLabel sx={{color: 'black'}}>Address</FormLabel>
          <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
        </FormControl>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', mt: '5vh', width: '100%', justifyContent: 'center'}}>
        <FormControl sx={{mr: '3%', width: '100%'}}>
          <FormLabel sx={{color: 'black'}}>City</FormLabel>
          <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
        </FormControl>
        <FormControl sx={{mx: '3%', width: '100%'}}>
          <FormLabel sx={{color: 'black'}}>City</FormLabel>
          <Select sx={{'&.MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)', borderWidth: 1}}}}>
            {states.map((state) => {
              return <MenuItem value={state}>{state}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ml: '3%', width: '100%'}}>
          <FormLabel sx={{color: 'black'}}>ZIP</FormLabel>
          <TextField sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'rgba(0, 0, 0, 0.8)'}}}}/>
        </FormControl>
      </Box>
    </Box>
  )
}

export default AddressForm;