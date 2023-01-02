import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import validate from "../utils/validation";

export default function Usdcaddress({usdcAddressI,amountInKshs,phoneNumber,setNextDisabledF,setusdcAddress,setcryptoAmntI }) {
  
  let setNextDisabled = setNextDisabledF;

  let usdcAddressH = setusdcAddress;

  let setcryptoAmnt = setcryptoAmntI;

  let rate = process.env.NEXT_PUBLIC_RATE;

  let kshsAmount = amountInKshs;

  let cryptoAmntT = Number(kshsAmount) / Number(rate);

  //Set the amount in crypto someone will get
  useEffect(() =>{
    setcryptoAmnt(cryptoAmntT);
  },[])

  const [usdcAddress, setusdcAddressU] = React.useState(usdcAddressI);


  const [helperText, sethelperText] = React.useState(null);



  useEffect(() => {

    //Set USDC wallet address
    usdcAddressH(usdcAddress);

    //Verify if true enable next button
    validate("usdc", usdcAddress)
      ? (setNextDisabled(false), sethelperText(null))
      : (setNextDisabled(true),
        sethelperText(`Enter polygon chain USDC address`));

    //Do clean up
    return () => {
      //Verify if true enable next button
      validate("amount", kshsAmount) && validate("phone", phoneNumber)
        ? setNextDisabled(false)
        : setNextDisabled(true);
    };
  }, [usdcAddress]);

  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6" align="center">
          You will recieve {cryptoAmntT} USDC for Kshs {kshsAmount}
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Enter USDC address to receive {cryptoAmntT} USDC Coins
        </Typography>

        <TextField
          id="usdcAddress"
          name="usdcAddress"
          label="USDC address"
          fullWidth
          value={usdcAddress}
          variant="standard"
          onChange={(e) => setusdcAddressU(e.target.value)}
        />
        <Typography variant="caption" sx={{ m: 1 }}>
          {helperText}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
