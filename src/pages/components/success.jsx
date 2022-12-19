import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Successpay(data) {
  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6">SUCCESS</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data.data.cryptoAmnt} USDC has been deposited to 
          {data.data.addressEntered}
          <br />
          <Link>Check status on polyscan</Link>
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
