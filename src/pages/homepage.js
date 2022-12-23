import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Kshsamount from "./components/amount";
import Paybill from "./components/pay";
import Status from "./components/status";
import Usdcaddress from "./components/usdcaddress";
import { StepContent } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Toaster } from 'react-hot-toast';


//Copyright
function Copyright() {
  return (
    <Container>
      <Typography variant="subtitle1" align="center">
        1500 Successfull trades.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Mzynga Technology
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}


function getStepContent(...theArgs) {

  const step = theArgs[0];
  const data = theArgs[1];

  switch (step) {
  
    case 0:
      //Check amount
      return <Kshsamount data={data}/>;

    case 1:
      //Check USDC address
      return <Usdcaddress data={data}/>;

    case 2:
      //Check phone number
      return <Paybill data={data}/>;

    case 3:
      //Show response of payments
      return <Status data={data}/>;

    default:
      throw new Error("Unkown step");
  }

}


//Theme
const theme = createTheme();

//Checkout function
export default function Checkout(props) {

  const { open, paybillnumber, maxAmount, rate } = props;


  const successData = 'Success';

  const [activeStep, setActiveStep] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(true);
  const [amountInKshs, setamountInKshs] = React.useState('');
  const [usdcAddress, setusdcAddress] = React.useState('');
  const [phoneNumber, setphoneNumber] = React.useState('');
  const [cryptoAmnt, setcryptoAmnt] = React.useState(0);

  //Amount component
  const amntData = {
                    maxAmount,
                    rate,
                    usdcAddress,
                    amountInKshs,
                    setamountInKshs:setamountInKshs,
                    setNextDisabled:setNextDisabled
                  };

  //USDC component
  const usdcData = {
                    amountInKshs,
                    usdcAddress,
                    phoneNumber,
                    setNextDisabled:setNextDisabled,
                    setusdcAddress : setusdcAddress,
                    setcryptoAmnt : setcryptoAmnt
                  };

  //Payment data
  const payData = {
                    amountInKshs,
                    phoneNumber,
                    paybillnumber,
                    setNextDisabled:setNextDisabled,
                    setphoneNumber : setphoneNumber
                  }

  //Status data
  const statusData = {
                     successData,
                     usdcAddress,
                     cryptoAmnt,
                     setNextDisabled:setNextDisabled
                    }

  const steps = [
    {
      title: "Enter Amount",
      component: getStepContent(0,amntData)
    },
    {
      title: "Enter USDC Address",
      component: getStepContent(1,usdcData)
    },
    {
      title: "Make Payment",
      component: getStepContent(2,payData)
    },
    {
      title: "Recieve USDC",
      //Or Error depending
      component: getStepContent(3,statusData)
    },
  ];



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  
  return (
    <ThemeProvider theme={theme}>
      <Toaster/>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/images/footerDope.svg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 2 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h6" align="center">
            Buy USDC at affordable price.
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
            orientation="vertical"
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label.title}</StepLabel>
                <StepContent>
                  {label.component}
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button
                        disabled={open === false || nextDisabled} 
                        onClick={handleNext} 
                        size="small">
                        {index === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      <Button
                        disabled={index === 0 || open === false }
                        onClick={handleBack}
                        size="small">
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Status : - {(open=== false) ? 
                <span>Closed <ErrorIcon/></span>: 
                <span>Open <ThumbUpIcon/></span>
                }
              </Typography>
              <Typography variant="subtitle1">
                Status of the transaction and time out status.
              </Typography>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

//Get server side props
export const getServerSideProps = async (context) => {
  //Status
  let open = true;//false; //default false

  //Error
  let error = null;

  //Check treasury amount
  const treasuryAddress = process.env.NEXT_PUBLIC_TREASURY;

  //Check the rate
  const rate = process.env.NEXT_PUBLIC_RATE;

  //Paybill
  const paybillnumber = process.env.NEXT_PUBLIC_PAYBILL;

  //Maximum Amount in Kshs
  let maxAmount = process.env.NEXT_PUBLIC_maxAmount; //0; default 0

  //Minimum Amount in Kshs
  let minAmount = process.env.NEXT_PUBLIC_minAmount;

  //USDC Balance in treasury
  let usdcBalance = 0;

  //Check balance
  try {
    async (treasuryAddress) => {
      //Call API to get balance
      usdcBalance = 47; //await getBalance(treasuryAddress);

      maxAmount = Number(usdcBalance) * Number(rate);

      open = Number(maxAmount) > 0 ? true : false;
    };
  } catch (err) {
    error = { ...err };
  }

  return {
    props: {
      open,
      error,
      paybillnumber,
      maxAmount,
      rate,
      minAmount
    },
  };
};

