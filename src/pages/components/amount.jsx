import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Kshsamount() {
  let amountInTreasury = "Kshs 3,200,000";
  let minAmount = "Kshs 250";
  return (
    <React.Fragment>
      <Grid>
        <Typography component="h1" variant="h6" align="center" sx={{ m: 1 }}>
          1 USDC = 125 Kenyan Shillings
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ m: 1 }}
          align="center"
          color="text.secondary"
        >
          AVAILABLE USDC IN TREASURY : - {amountInTreasury}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle2" sx={{ m: 1 }}>
          Enter amount you wish to spend (Max {amountInTreasury} - Min{" "}
          {minAmount})
        </Typography>

        <TextField
          id="amountInKshs"
          name="amountInKshs"
          label="Kshs"
          fullWidth
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
}
