import { Box, Typography } from "@mui/material";

const PageTitle = (props: PageTitleProps) => {
  return (
    <Box sx={{direction: 'flex', flexDirection: 'column', px: '15%', width: '100%', pt: '2vh', pb: '2vh', textAlign: { xs: 'center', md: 'start' }}}>
      <Typography sx={{fontSize: "xxx-large", borderBottom: { xs: 0, md: .5 }, borderColor: 'primary.dark', pl: 2, color: 'primary.dark', fontWeight: 'bold'}} >
        {props.title}
      </Typography>
    </Box>
  );
}

export default PageTitle;