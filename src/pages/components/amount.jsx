import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import validate from '../utils/validation';

export default function Kshsamount({data}) {
  

  let setamountInKshs = data.setamountInKshs

  let setNextDisabled = data.setNextDisabled

  let usdcAddress = data.usdcAddress;

  //Rate in %
  let rate = data.rate;

  //Maximum Amount in Kshs
  let maxAmount = process.env.NEXT_PUBLIC_maxAmount;

  //Minimum Amount in Kshs
  let minAmount = process.env.NEXT_PUBLIC_minAmount;
  

  const defaultAmount = data.amountInKshs || null;
  const [amountKshs, setKshsAmount] = React.useState(defaultAmount);
  setamountInKshs(amountKshs)

  const [helperText, sethelperText] = React.useState(null);

  //Keep track of the amount and enable or disable next
  useEffect(()=>{

  //Verify if true enable next button
  (validate('amount',amountKshs))  ? (setNextDisabled(false),sethelperText(null)) : 
  (setNextDisabled(true),sethelperText(`Max ${maxAmount} - Min ${minAmount}`));

  //Do clean up 
  return ()=>{

  //Verify if true enable next button
  (validate('usdc',usdcAddress))  ? setNextDisabled(false) : setNextDisabled(true);
  
  }
  },[amountKshs])




  return (
    <React.Fragment>
      <Grid>
        <Typography component="h1" variant="h6" align="center" sx={{ m: 1 }}>
          1 USDC = {rate} Kenyan Shillings 
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ m: 1 }}
          align="center"
          color="text.secondary"
        >
          AVAILABLE USDC IN TREASURY : - {maxAmount}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle2" sx={{ m: 1 }}>
          Enter amount you wish to spend
        </Typography>

        <TextField
          required
          id="amountKshs"
          name="amountKshs"
          fullWidth
          type="number"
          variant="standard"
          value={amountKshs}
          onChange={e => setKshsAmount(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="end" sx={{ m: 1 }}>Kshs </InputAdornment>,
          }}
        />
        <Typography variant="caption" sx={{ m: 1 }}>
          {helperText}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
