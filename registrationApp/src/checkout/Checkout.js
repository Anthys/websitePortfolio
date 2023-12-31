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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Planetary Drop Y
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Product', 'Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, nextStep, prevStep, handleInputData, formData) {
  switch (step) {
    case 0:
      return <ProductForm nextStep={nextStep} handleFormData={handleInputData} values={formData} />;
    case 1:
      return <AddressForm nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
    case 2:
      return <PaymentForm nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
    case 3:
      return <Review nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>;
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
    pName: '',
    pType: '',
    pTemp: 0,
    pLocation: '',
    pRings: false,
    pLife: false,
    pAtmo: false,
    pMoons: 0,

    cFirstName: '',
    cLastName: '',
    cAdd1: '',
    cAdd2: '',
    cCity: '',
    cState: '',
    cPostalCode: '',
    cCountry: '',

    caName: '',
    caNumber: '',
    caExpDate: '',
    caCVV: '',

  });

  // const handleNext = () => {
  //   setValidationStep(1);
  // };

  // useEffect(() => {
  //   console.log(validationStep);
  //   if (validationStep == 2) {
  //     setActiveStep(activeStep + 1);
  //     setValidationStep(0);
  //   }
  // }, [validationStep]);

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
            Planetary Drop Y
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Planetary drop register form
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
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
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
