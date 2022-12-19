import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Usdcaddress(data) {
  let KshAmount = data.data.amountEntered;
  let UsdcAmount = data.data.cryptoAmnt;
  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6" align="center">
          You will recieve {UsdcAmount} USDC for Kshs {KshAmount}
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Enter USDC address to receive {UsdcAmount} USDC Coins
        </Typography>

        <TextField
          id="usdcAddress"
          name="usdcAddress"
          label="USDC address"
          fullWidth
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
}
