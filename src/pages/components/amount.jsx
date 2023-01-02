import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import validate from "../utils/validation";

export default function Kshsamount({
  usdcAddress,
  amountInKshs,
  setamountInKshs,
  setNextDisabled,
}) {
  let setAmountInKsh = setamountInKshs || 0;

  let setNextBDisabled = setNextDisabled || null;

  let cryptoAddress = usdcAddress || null;

  //USDC rate
  let kshRate = process.env.NEXT_PUBLIC_RATE;

  //Rate in %
  let usdrate = kshRate || 125;

  //Maximum Amount in Kshs
  let maxAmount = process.env.NEXT_PUBLIC_maxAmount;

  //Minimum Amount in Kshs
  let minAmount = process.env.NEXT_PUBLIC_minAmount;

  const defaultAmount = amountInKshs || "";
  const [amountKshs, setKshsAmount] = React.useState(defaultAmount);

  const [helperText, sethelperText] = React.useState("");

  //Keep track of the amount and enable or disable next
  useEffect(() => {
    //Set the amount
    setAmountInKsh(amountKshs);

    //Verify if true enable next button
    validate("amount", amountKshs)
      ? (setNextBDisabled(false), sethelperText(""))
      : (setNextBDisabled(true),
        sethelperText(`Max ${maxAmount} - Min ${minAmount}`));

    //Do clean up
    return () => {
      //Verify if true enable next button
      validate("usdc", cryptoAddress)
        ? setNextBDisabled(false)
        : setNextBDisabled(true);
    };
  }, [amountKshs]);

  return (
    <React.Fragment>
      <Grid>
        <Typography component="h1" variant="h6" align="center" sx={{ m: 1 }}>
          1 USDC = {usdrate} Kenyan Shillings
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ m: 1 }}
          align="center"
          color="text.secondary"
        >
          AVAILABLE USDC IN TREASURY : - {maxAmount}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle2" sx={{ m: 1 }}>
          Enter amount you wish to spend
        </Typography>

        <TextField
          required
          id="amountKshs"
          name="amountKshs"
          fullWidth
          type="number"
          variant="standard"
          value={amountKshs}
          onChange={(e) => setKshsAmount(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end" sx={{ m: 1 }}>
                Kshs{" "}
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="caption" sx={{ m: 1 }}>
          {helperText}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
