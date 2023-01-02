import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Status({successData,usdcAddress,cryptoAmnt,setNextDisabled }) {
  let responseStatus = successData;

  let usdcAddressF = usdcAddress;

  let cryptoAmntI = cryptoAmnt;

  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h6">{responseStatus}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {cryptoAmntI} USDC has been deposited to
          {usdcAddressF}
          <br />
          <Link>Check status on polyscan</Link>
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
