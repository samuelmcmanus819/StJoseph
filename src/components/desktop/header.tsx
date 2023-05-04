import { Box, Button, Typography } from '@mui/material';

const DesktopHeader = (props: headerProps) => {
  return (
    <>
      <Box sx={{ mr: 'auto' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Joseph Church
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            pl: 3,
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          St. Stephen the Martyr Mission
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, ml: 'auto' }}>
        {props.pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default DesktopHeader;