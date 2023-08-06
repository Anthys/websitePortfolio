import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TextFieldWithError, SelectWithError } from './myThings/fieldsWithError';
import { SingularPanelWithErrors } from './myThings/singularPanelWithErrors';

import { useTranslation } from "react-i18next";

export default function BU(props){

  const {t, i18n} = useTranslation();

  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };


    const [errors, setErrors] = React.useState({
    });

    // const handleChangeBU = (event) => {
    //     props.handleFormData("BU", event.target.value);
    // };

    // function validateBool(){
    //     for (let i = 0;i<Object.keys(errors).length;i++){
    //         if (errors[Object.keys(errors)[i]]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // const validate = () => {
    //     if (validateBool()){
    //         props.nextStep();
    //     }
    // }

    // const [HEV, setHEV] = React.useState({
    //     errors : {},
    //     setErrors : () => {},
    //     handleFormData : props.handleFormData,
    //     values : {}
    // });

    // let HEV = {
    //     errors : errors,
    //     setErrors : setErrors,
    //     handleFormData : props.handleFormData,
    //     values : props.values
    // }

    

    return <SingularPanelWithErrors 
        {... props}
        errors = {errors}
    >
     <Typography variant="h6" gutterBottom>
       {t('VotreBu')}
     </Typography>
     <Grid container spacing={3}>
       <Grid item xs={12}>
       <FormControl fullWidth>
         <InputLabel 
            required id="selectBU">BU</InputLabel>
          <SelectWithError
            {... props}
            required
            labelId="selectBU"
            id="selectBU"
            label="BU" 
            errors = {errors}
            setErrors = {setErrors}
            identifier="pBU"
            errorFunction = {(value) => value === ''}
          >
          <MenuItem value={"World services"}>World services</MenuItem>
          <MenuItem value={"Logistique Lauwin Planque"}>Logistique Lauwin Planque</MenuItem>
          <MenuItem value={"KIFS"}>KIFS</MenuItem>
          <MenuItem value={"France succursales"}>France succursales ou services centraux / Invité au KOM</MenuItem>
          <MenuItem value={"France affiliés"}>France affiliés / Invité au KOM</MenuItem>
        </SelectWithError>
        </FormControl>
        
        {/* <TextFieldWithError
        id="firstName"
        name="firstName"
        label="First name"
        autoComplete="given-name"
        variant="standard"
        HEV = {HEV}
        identifier="pBU"
            />
            {props.values.pBU} */}
        </Grid>
    </Grid>

    </SingularPanelWithErrors>

    // return <React.Fragment>
    // <Typography variant="h6" gutterBottom>
    //   Votre BU
    // </Typography>
    // <Grid container spacing={3}>
    //   <Grid item xs={12}>
    //   <FormControl fullWidth>
    //     <InputLabel 
    //         required id="selectBU">BU</InputLabel>
    //       <SelectWithError
    //         required
    //         labelId="selectBU"
    //         id="selectBU"
    //         label="BU" 
    //         HEV = {HEV}
    //         identifier="pBU"
    //         errorFunction = {(value) => value === ''}
    //       >
    //       <MenuItem value={0}>World services</MenuItem>
    //       <MenuItem value={1}>Logistique Lauwin Planque</MenuItem>
    //       <MenuItem value={2}>KIFS</MenuItem>
    //       <MenuItem value={3}>France succursales ou services centraux / Invité au KOM</MenuItem>
    //       <MenuItem value={4}>France affiliés / Invité au KOM</MenuItem>
    //     </SelectWithError>
    //     </FormControl>
        
    //     {/* <TextFieldWithError
    //     id="firstName"
    //     name="firstName"
    //     label="First name"
    //     autoComplete="given-name"
    //     variant="standard"
    //     HEV = {HEV}
    //     identifier="pBU"
    //         />
    //         {props.values.pBU} */}
    //     </Grid>
    // </Grid>
    // <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                

    //             <Button
    //               variant="contained"
    //               onClick={validate}
    //               sx={{ mt: 3, ml: 1 }}
    //               disabled={!validateBool()}
    //             >
    //              Suite
    //             </Button>
    //           </Box>
    // </React.Fragment>
}