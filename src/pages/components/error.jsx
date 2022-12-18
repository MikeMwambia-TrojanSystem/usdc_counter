import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Errorresponse() {
  return (
    <React.Fragment>
      <Grid>
        <Typography gutterBottom variant="h6" component="div">
          An error occured retry.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is the error details here
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Retry button
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
