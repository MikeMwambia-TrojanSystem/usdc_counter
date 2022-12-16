import React from 'react';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Paybill(){
        return (
    <React.Fragment>
        <Grid>
            <Typography variant="h6"  
            align="center">
            Pay Kshs 1500 to MPESA PAYBILL NO. 345678
            </Typography>
            <Typography variant="subtitle1" 
            color="text.secondary"  
            align="center">
            Once paid enter Phone number and click next to verify
            </Typography>
        </Grid>

        <Grid>
            <TextField
            id="amountInKshs"
            name="amountInKshs"
            label="Phone number"
            fullWidth
            variant="standard"
            />
        </Grid>
    </React.Fragment>
        )
    }