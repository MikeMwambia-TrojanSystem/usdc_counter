import React from 'react';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Verifypay(){
        return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Enter Phone Number to verify payment
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Enter phone number"
                fullWidth
                variant="standard"
                />
            </Grid>
        </Grid>
    </React.Fragment>
        )
    }