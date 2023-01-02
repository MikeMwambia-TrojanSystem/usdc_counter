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
import ErrorIcon from "@mui/icons-material/Error";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Toaster } from "react-hot-toast";

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

  console.log(theArgs)
  console.log('hhhhhhhh')
  let usdcAddress = null;
  let amountInKshs = null;
  let phoneNumber = null;
  let setamountInKshs = null;
  let setNextDisabled = null;
  let setusdcAddress = null;


  switch (step) {

    case 0:
       usdcAddress = theArgs[1];
       amountInKshs = theArgs[2];
       setamountInKshs = theArgs[3];
       setNextDisabled = theArgs[4];

      return <Kshsamount usdcAddress={usdcAddress} amountInKshs ={amountInKshs} 
      setamountInKshs={setamountInKshs} setNextDisabled={setNextDisabled}/>;

    case 1:
      let usdcAddressI = theArgs[1];
      amountInKshs = theArgs[2];
      phoneNumber = theArgs[3];
      let setNextDisabledF = theArgs[4];
      setusdcAddress = theArgs[5];
      let setcryptoAmntI = theArgs[6];

      return <Usdcaddress usdcAddressI={usdcAddressI} amountInKshs={amountInKshs} phoneNumber = {phoneNumber} 
      setNextDisabledF={setNextDisabledF} setusdcAddress={setusdcAddress} setcryptoAmntI={setcryptoAmntI}/>;

    case 2:
      amountInKshs = theArgs[1];
      let phoneNumberI = theArgs[2];
      paybillnumber = theArgs[3];
      setNextDisabledF = theArgs[4];
      let setphoneNumberI = theArgs[5];

      //Check phone number
      return <Paybill amountInKshs={amountInKshs} phoneNumberI={phoneNumberI} paybillnumber={paybillnumber} 
      setNextDisabledF={setNextDisabledF} setphoneNumberI={setphoneNumberI}/>;

    case 3:
      //Show response of payments
      let successData = theArgs[1];
      usdcAddress = theArgs[2];
      cryptoAmnt = theArgs[3];
      setNextDisabled = theArgs[4];
      
      return <Status successData={successData} usdcAddress={usdcAddress} 
      cryptoAmnt={cryptoAmnt} setNextDisabled={setNextDisabled}/>;

    default:
      throw new Error("Unkown step");
  }
}

//Theme
const theme = createTheme();

//Checkout function
export default function Checkout(props) {
  const { open, paybillnumber, maxAmount, rate } = props;

  const successData = "Success";

  const [activeStep, setActiveStep] = React.useState(0);
  const [nextDisabled, setNextDisabled] = React.useState(true);
  const [amountInKshs, setamountInKshs] = React.useState("");
  const [usdcAddress, setusdcAddress] = React.useState("");
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [cryptoAmnt, setcryptoAmnt] = React.useState(0);

  //Amount component
  const amntData = {
    maxAmount,
    rate,
    usdcAddress,
    amountInKshs,
    setamountInKshs: setamountInKshs,
    setNextDisabled: setNextDisabled,
  };

  //USDC component
  const usdcData = {
    amountInKshs,
    usdcAddress,
    phoneNumber,
    setNextDisabled: setNextDisabled,
    setusdcAddress: setusdcAddress,
    setcryptoAmnt: setcryptoAmnt,
  };

  //Payment data
  const payData = {
    amountInKshs,
    phoneNumber,
    paybillnumber,
    setNextDisabled: setNextDisabled,
    setphoneNumber: setphoneNumber,
  };

  //Status data
  const statusData = {
    successData,
    usdcAddress,
    cryptoAmnt,
    setNextDisabled: setNextDisabled,
  };

  const steps = [
    {
      title: "Enter Amount",
      component: getStepContent(0,usdcAddress,amountInKshs,setamountInKshs,setNextDisabled)
    },
    {
      title: "Enter USDC Address",
      component: getStepContent(1,usdcAddress,amountInKshs,phoneNumber,setNextDisabled,setusdcAddress,setcryptoAmnt)
    },
    {
      title: "Make Payment",
      component: getStepContent(2,amountInKshs,phoneNumber,paybillnumber,setNextDisabled,setphoneNumber)
    },
    {
      title: "Recieve USDC",
      component: getStepContent(3,successData,usdcAddress,cryptoAmnt,setNextDisabled),
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
      <Toaster />
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
                        size="small"
                      >
                        {index === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      <Button
                        disabled={index === 0 || open === false}
                        onClick={handleBack}
                        size="small"
                      >
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
              Status : -{" "}
              {open === false ? (
                <span>
                  Closed <ErrorIcon />
                </span>
              ) : (
                <span>
                  Open <ThumbUpIcon />
                </span>
              )}
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
  let open = true; //false; //default false

  //Error
  let error = "";

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
      minAmount,
    },
  };
};
