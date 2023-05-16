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
      <Box ref={componentRef} sx={{display: 'flex', flexDirection: 'column', px: "10%", alignItems: 'start', width: '100%'}}>
        <Typography variant="h3" sx={{width: '100%', textAlign: 'center', mt: '5vh'}}>St. Joseph Catholic Church</Typography>
        <Typography variant="h3" sx={{width: '100%', textAlign: 'center', mt: '1vh'}}>CCE Registration</Typography>
        <FormControl sx={{display: 'flex', flexDirection: 'row', textAlign: 'center', mt: '7vh'}}>
          <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%'}}>Date:</FormLabel>
          <TextField variant="standard"/>
        </FormControl>
        <Typography sx={{display: 'flex', alignSelf: 'center', mt: '5vh'}}><b>Child's Information (Información del niño)</b></Typography>
        <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '2vh', width: '70%'}}>
          <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Child’s Full Name (Nombre completo del niño):</FormLabel>
          <TextField variant="standard"/>
        </FormControl>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', mt: '2vh'}}>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Age (edad):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', ml: '3%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Grade (grado):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
        </Box>
        <FormControl sx={{display: 'flex', flexDirection: 'row', textAlign: 'center', width: '70%', mt: '2vh'}}>
          <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Date of Birth (fecha de nacimiento):</FormLabel>
          <TextField variant="standard"/>
        </FormControl>
        <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '70%', mt: '2vh'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Address(dirección):</FormLabel>
            <TextField variant="standard" sx={{width: '100%'}}/>
          </FormControl>
        <Box sx={{display: 'flex', flexDirection: 'row', mt: '2vh'}}>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>City(ciudad):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mx: '3%', width: '100%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>State(estado):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', mt: '2vh'}}>
          <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Zip Code (código postal):</FormLabel>
          <TextField variant="standard"/>
        </FormControl>
        </Box>
        
        <Box sx={{display: 'flex', flexDirection: 'column', mt: '2vh', width: '100%'}}>
          <Typography sx={{display: 'flex', alignSelf: 'center', mt: '5vh'}}><b>Father's Information (Información del padre)</b></Typography>
          <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Father's Full Name (Nombre completo del niño):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Phone (número de teléfono):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Work (trabajo) /Cell (cellular):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Email (correo electrónico): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', mt: '2vh', width: '100%'}}>
          <Typography sx={{display: 'flex', alignSelf: 'center', mt: '5vh'}}><b>Mother's Information (Información del madre)</b></Typography>
          <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Mother's Full Name (Nombre completo del niño):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Phone (número de teléfono):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Work (trabajo) /Cell (cellular):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Email (correo electrónico): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', mt: '1vh', width: '100%'}}>
          <Typography sx={{display: 'flex', alignSelf: 'center', mt: '2vh'}}><b>Sacraments (Sacramentos)</b></Typography>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: '2vh', width: '70%'}}>
            <FormLabel sx={{color: 'black', mr: '3%'}}>Baptism (Bautismo):</FormLabel>
            <RadioGroup row sx={{mr: '3%', width: '35%'}}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes (sí)"/>
              <FormControlLabel value="No" control={<Radio />} label="No"/>
            </RadioGroup>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Date (fecha):</FormLabel>
            <TextField sx={{width: '40%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Church (iglesia): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>City & State (ciudad y estado): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: '2vh', width: '80%'}}>
            <FormLabel sx={{color: 'black', mr: '3%', width: '35%'}}>1st Communion (Primera Comunión):</FormLabel>
            <RadioGroup row sx={{width: '35%'}}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes (sí)"/>
              <FormControlLabel value="No" control={<Radio />} label="No"/>
            </RadioGroup>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Date (fecha):</FormLabel>
            <TextField sx={{width: '40%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Church (iglesia): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>City & State (ciudad y estado): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Email (correo electrónico): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: '2vh', width: '80%'}}>
            <FormLabel sx={{color: 'black', mr: '3%', width: '35%'}}>1st Communion (Primera Comunión):</FormLabel>
            <RadioGroup row sx={{width: '35%'}}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes (sí)"/>
              <FormControlLabel value="No" control={<Radio />} label="No"/>
            </RadioGroup>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Date (fecha):</FormLabel>
            <TextField sx={{width: '40%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Church (iglesia): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>City & State (ciudad y estado): </FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', mt: '2vh', width: '100%'}}>
          <Typography sx={{display: 'flex', alignSelf: 'center', mt: '5vh'}}><b>Emergency Information</b></Typography>
          <Typography sx={{display: 'flex', alignSelf: 'center', mt: '.5vh'}}><b>Información de Emergencia</b></Typography>
          <Typography sx={{display: 'flex', mt: '3vh'}}>Provide the name(s) of person(s), other than parents, allowed to pick up the student: (Person must be in 9th grade or older and have official ID)</Typography>
          <Typography sx={{display: 'flex', mt: '1vh'}}>Proporcione el nombre(s) de la persona(s), aparte de los padres, que les permite recoger al estudiante: (La persona debe estar en noveno grado o más y tener una identificación oficial)</Typography>
          <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '4vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>1. Full Name (Nombre Completo):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Phone (número de teléfono):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Work (trabajo) /Cell (cellular):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '80%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Relationship to Student (Relación con el estudiante):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '4vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>2. Full Name (Nombre Completo):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Phone (número de teléfono):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Work (trabajo) /Cell (cellular):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '80%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Relationship to Student (Relación con el estudiante):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', mt: '4vh', width: '70%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>3. Full Name (Nombre Completo):</FormLabel>
            <TextField variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Phone (número de teléfono):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '60%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Work (trabajo) /Cell (cellular):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',  mt: '2vh', width: '80%'}}>
            <FormLabel sx={{display: 'flex', color: 'black', alignItems: 'end', mr: '3%', whiteSpace: 'nowrap'}}>Relationship to Student (Relación con el estudiante):</FormLabel>
            <TextField sx={{width: '100%'}} variant="standard"/>
          </FormControl>
        </Box>


        
      </Box>
      <Typography sx={{my: '5vh', width: '100%', textAlign: 'center', px: "15%"}}>
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