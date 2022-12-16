import * as React from 'react';
import  CssBaseline  from '@mui/material/CssBaseline';
import  AppBar  from '@mui/material/AppBar';
import  Box from '@mui/material/Box';
import  Container  from '@mui/material/Container';
import  Toolbar  from '@mui/material/Toolbar';
import  Paper from '@mui/material/Paper';
import  Stepper  from '@mui/material/Stepper';
import  Step from '@mui/material/Step';
import  StepLabel  from '@mui/material/StepLabel';
import  Button  from '@mui/material/Button';
import  Link  from '@mui/material/Link';
import  Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import  { createTheme, ThemeProvider } from '@mui/material/styles';
import  Kshsamount from  './components/amount';
import  Errorresponse from './components/error';
import  Paybill from './components/pay';
import  Successpay from './components/success';
import  Usdcaddress from './components/usdcaddress';
import  Verifypay from './components/verifypay';


//Copyright 
function Copyright() {
    return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mzynga Technology
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
}

const steps = ['Enter Amount', 'Enter USDC Address', 'Make Payment','Recieve USDC'];

function getStepContent(step) {
    switch(step) {
        case 0 :
            return <Kshsamount />;

        case 1 : 
            return  <Usdcaddress />;

        case 2 : 
            return <Paybill />;

        case 3 : 
            return <Successpay />;

        case 4 :
            return <Errorresponse />;

        case 5 :
            return <Verifypay />;

        default : 
            throw new Error('Unkown step');

    }
}


//Theme
const theme = createTheme();

//Checkout function 
export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
               <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/footerDope.svg" />
              </IconButton>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h6" align="center">
              Buy USDC at affordable price.
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. Error or success return to homepage
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
  
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    );
  }



































// function HomePage() {

//     return <div>Welcome to Next.js!</div>
// }
  
// export default HomePage
  