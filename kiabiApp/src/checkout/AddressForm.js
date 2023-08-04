import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function AddressForm(props) {

  
  const [errors, setErrors] = React.useState({
    cFirstName: '',
    cLastName: '',
    cAdd1: '',
    cCity: '',
    cPostalCode: '',
    cCountry: '',
  });

  
  useEffect(() => {
    console.log(props);
    var errors = {};
    if (props.validationStep == 1) {

    }
  });

  function validate(){
    console.log("VALIDATION");
    console.log(props.values);
    var errors = {};
    if (props.values.cFirstName == '') {
      console.log('error');
      errors.cFirstName = 'Please input your first name';
    }
    if (props.values.cLastName == '') {
      console.log('error');
      errors.cLastName = 'Please input your last name';
    }
    if (props.values.cLastName == '') {
      console.log('error');
      errors.cAdd1 = 'Please input your address';
    }
    if (props.values.cCity == '') {
      console.log('error');
      errors.cCity = 'Please input your city';
    }
    if (props.values.cPostalCode == '') {
      console.log('error');
      errors.cPostalCode = 'Please input your postal code';
    }
    if (props.values.cCountry == '') {
      console.log('error');
      errors.cCountry = 'Please input your country';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }else{
      props.nextStep();
    }
  }


  return (
    <form>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={props.values.cFirstName}
            onChange={ e=> props.handleFormData("cFirstName", e.target.value)}
          />
          {errors.cFirstName && <Typography color="red">{errors.cFirstName}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={props.values.cLastName}
            onChange={ e=> props.handleFormData("cLastName", e.target.value)}
          />
          {errors.cLastName && <Typography color="red">{errors.cLastName}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={props.values.cAdd1}
            onChange={ e=> props.handleFormData("cAdd1", e.target.value)}
          />
          {errors.cAdd1 && <Typography color="red">{errors.cAdd1}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            defaultValue={props.values.cAdd2}
            onChange={ e=> props.handleFormData("cAdd2", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={props.values.cCity}
            onChange={ e=> props.handleFormData("cCity", e.target.value)}
          />
          {errors.cCity && <Typography color="red">{errors.cCity}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            defaultValue={props.values.cState}
            onChange={ e=> props.handleFormData("cState", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={props.values.cPostalCode}
            onChange={ e=> props.handleFormData("cPostalCode", e.target.value)}
          />
          {errors.cPostalCode && <Typography color="red">{errors.cPostalCode}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            defaultValue={props.values.cCountry}
            onChange={ e=> props.handleFormData("cCountry", e.target.value)}
          />
          {errors.cCountry && <Typography color="red">{errors.cCountry}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
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
    </form>
  );
}
