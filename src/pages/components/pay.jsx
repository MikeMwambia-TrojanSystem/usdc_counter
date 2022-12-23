import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import validate from '../utils/validation';

export default function Paybill({data}) {


  let setphoneNumber = data.setphoneNumber

  let setNextDisabled = data.setNextDisabled

  const [phoneNumber, phoneNumberset] = React.useState(data.phoneNumber);
  setphoneNumber(phoneNumber)

  //Keep track of the phoneNumber and enable or disable next
  useEffect(()=>{

  //Verify if true enable next button
  (validate('phone',phoneNumber))  ? setNextDisabled(false) : setNextDisabled(true);

    },[phoneNumber])
  
    

  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6" align="center">
          Pay Kshs {data.amountInKshs} to MPESA PAYBILL NO. {data.paybillnumber}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center">
          Once paid enter Phone number and click next to verify
        </Typography>
      </Grid>

      <Grid>
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label="Phone number"
          fullWidth
          variant="standard"
          value={phoneNumber}
          onChange={e => phoneNumberset(e.target.value)}
        />
      </Grid>
    </React.Fragment>
  );
}
