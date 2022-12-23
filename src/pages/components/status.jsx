import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Status({data}) {

  let responseStatus = data.successData;

  let usdcAddress = data.usdcAddress;

  let cryptoAmnt = data.cryptoAmnt;


    return (
        <React.Fragment>
        <Grid>
          <Typography variant="h6">{responseStatus}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {cryptoAmnt} USDC has been deposited to  
            {usdcAddress}
            <br />
            <Link>Check status on polyscan</Link>
          </Typography>
        </Grid>
      </React.Fragment>
    )
}