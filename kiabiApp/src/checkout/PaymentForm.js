import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function PaymentForm(props) {

  const [errors, setErrors] = React.useState({
    caName: '',
    caNumber: '',
    caExpDate: '',
    caCVV: '',
  });

  function validate(){
    console.log("VALIDATION");
    console.log(props.values);
    var errors = {};
    if (props.values.caName == '') {
      console.log('error');
      errors.caName = 'Please input your name';
    }
    if (props.values.caNumber == '') {
      console.log('error');
      errors.caNumber = 'Please input your card number';
    }
    if (props.values.caExpDate == '') {
      console.log('error');
      errors.caExpDate = 'Please input your expiry date';
    }
    if (props.values.caCVV == '') {
      console.log('error');
      errors.caCVV = 'Please input your CVV';
    }


    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }else{
      props.nextStep();
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={props.values.caName}
            onChange={ e=> props.handleFormData("caName", e.target.value)}
          />
          {errors.caName && <Typography color="red">{errors.caName}</Typography>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={props.values.caNumber}
            onChange={ e=> props.handleFormData("caNumber", e.target.value)}
          />
          {errors.caNumber && <Typography color="red">{errors.caNumber}</Typography>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={props.values.caExpDate}
            onChange={ e=> props.handleFormData("caExpDate", e.target.value)}
          />
          {errors.caExpDate && <Typography color="red">{errors.caExpDate}</Typography>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={props.values.caCVV}
            onChange={ e=> props.handleFormData("caCVV", e.target.value)}
          />
          {errors.caCVV && <Typography color="red">{errors.caCVV}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      {/* THIS COPY PASTE, SHOULD BE FORMATTED BETTER REFACTORED */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                
                  <Button onClick={props.prevStep} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>

                <Button
                  variant="contained"
                  onClick={validate}
                  sx={{ mt: 3, ml: 1 }}
                >
                 Next
                </Button>
              </Box>
    </React.Fragment>
  );
}
