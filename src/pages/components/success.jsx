import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Successpay() {
  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6">SUCCESS</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          3.4 USDC has been deposited to 8808080808dde008de
          <br />
          <Link>Check status on polyscan</Link>
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
