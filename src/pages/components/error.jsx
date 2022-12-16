import React from 'react';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Errorresponse(){
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
    )
}