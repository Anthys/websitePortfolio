import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ProductForm from './ProductForm';
import { useState } from 'react';
import BU from './1BU';
import Coords from './2Inscri';
import Hebergement from './3Hebergement';
import Transport from './4Transport';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectWithError } from './myThings/fieldsWithError';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        COMPANY
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['BU', 'Coordonnées', 'Hébergement', 'Transport'];

function getStepContent(step, nextStep, prevStep, handleInputData, formData) {
  switch (step) {
    case 0:
      return <BU nextStep={nextStep} handleFormData={handleInputData} values={formData}></BU>
      // return <ProductForm nextStep={nextStep} handleFormData={handleInputData} values={formData} />;
    case 1:
      return <Coords nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}></Coords>
      // return <AddressForm nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
    case 2:
      return <Hebergement nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
    case 3:
      return <Transport nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  // const [validationStep, setValidationStep] = useState(0);
  // 0 = not validated
  // 1 = to be validated
  // 2 = validated

  // const [checkoutData, setCheckoutData] = useState({});

  const [formData, setFormData] = useState({
    pBU : "",
    pFirstName : "",
    pLastName : "",
    pGenre : "",
    pPhone : "",
    pEmail : "",
    pPerimetre : "",
    pPoste : "",
    pNomMagasin : "",
    pKOMPresence : "",
    pPresenceLancementFrance : "",
    pPresenceSoiree : "",
    pLangues : "",
    pRegimeAlimentaire : "",
    pParticularite : "",
    pTalentParticulier : "",

    pHebergementVeilleKOM : "",
    pHebergementKOM : "",
    pPersonnePartageChambre : "",
    pBesoinSupplementaire : "",
    pProblemeMedical : "",

    pCommentViensTu : "",
    pLieuArrivee : "",
    pDateHeureArrivee : "",
    pCommentReparsTu : "",
    PLieuDepart : "",
    pDateHeureDepart : "",

  });

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  // const handleInputData = input => e => {
  //   console.log(input);
  //   console.log(e);
  //   console.log(formData);
  //   // input value from the form
  //   const {value } = e.target;

  //   //updating for data state taking previous state and then adding new value to create new object
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [input]: value
  // }));
  // }

  const handleInputData = (e,v) => {
    // console.log(input);
    // console.log(e);
    // console.log(formData);
    // input value from the form
    // const value = v;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [e]: v
  }));
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            COMPANY
          </Typography>
        </Toolbar>
      </AppBar>
      
      <FormControl fullWidth>
         <InputLabel 
            required id="selectBU">BU DEBUG DEMO</InputLabel>
          <SelectWithError
            values={formData}
            handleFormData={handleInputData}
            errors = ""
            setErrors = {() => {}}
            required
            labelId="selectBU"
            id="selectBU"
            label="BU DEBUG DEMO" 
            identifier="pBU"
          >
          <MenuItem value={"World services"}>World services</MenuItem>
          <MenuItem value={"Logistique Lauwin Planque"}>Logistique Lauwin Planque</MenuItem>
          <MenuItem value={"KIFS"}>KIFS</MenuItem>
          <MenuItem value={"France succursales"}>France succursales ou services centraux / Invité au KOM</MenuItem>
          <MenuItem value={"France affiliés"}>France affiliés / Invité au KOM</MenuItem>
        </SelectWithError>
        </FormControl>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Plateforme d'inscription COMPANY Kick-Off Meeting 2023
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Votre inscription a bien été prise en compte!
              </Typography>
              <Typography variant="subtitle1">
                Vous recevrez bientôt un email de confirmation.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, nextStep, prevStep, handleInputData, formData)}
              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box> */}
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
