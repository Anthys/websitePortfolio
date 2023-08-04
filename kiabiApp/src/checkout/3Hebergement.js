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

import { RadioWithError } from './myThings/fieldsWithError';
import { FormLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Hebergement(props){


    const [errors, setErrors] = React.useState({
    });   

    return <SingularPanelWithErrors 
        {... props}
        errors = {errors}
    >
     <Typography variant="h6" gutterBottom>
       Hebergement
     </Typography>
     <Grid container spacing={3}>
       <Grid item xs={12}>
       <FormControl fullWidth>
         
       <FormLabel>As-tu besoin être hébergé la veille du KOM, la nuit du 28 novembre (réservé aux collaborateurs ne pouvant arriver le jour même) ? </FormLabel>
       <RadioWithError
            {... props}
        errors = {errors}
        row
        setErrors = {setErrors}
        identifier = "pHebergementVeilleKOM"
      >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
        </RadioWithError>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
       <FormControl fullWidth>
         
       <FormLabel>Souhaites-tu être hébergé le jour du KOM, la nuit du 29 novembre ?  </FormLabel>
       <RadioWithError
            {... props}
        errors = {errors}
        row
        setErrors = {setErrors}
        identifier = "pHebergementKOM"
      >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
        </RadioWithError>
        </FormControl>
        </Grid>

        { (props.values.pHebergementKOM === "Oui" || props.values.pHebergementVeilleKOM === "Oui") && [
        <Grid item xs={12}>
       <FormControl fullWidth>
         
       <FormLabel>Indiquez le nom et le prénom de la 2ème personne qui partagera votre chambre si elle est déjà connue, sinon la répartition sera réalisée par nos soins (cela ne dispense pas cette personne de s'inscrire également ;)  </FormLabel>
       <TextFieldWithError
            {... props}
        errors = {errors}
        setErrors = {setErrors}
        identifier = "pPersonnePartageChambre"
        label= "Voisin de chambre"
        errorFunction = {(value) => false}
        >
        </TextFieldWithError>
        </FormControl>
        </Grid>,

        
        <Grid item xs={12}>
       <FormControl fullWidth>
         
       <FormLabel>Si tu arrives avant ou repart après ces dates (exemple : séminaire RH), merci de préciser ici tes besoins supplémentaires en hébergement  </FormLabel>
       <TextFieldWithError
            {... props}
        errors = {errors}
        setErrors = {setErrors}
        identifier = "pBesoinSupplementaire"
        label= "Besoin supplémentaire"
        errorFunction = {(value) => false}
        >
        </TextFieldWithError>
        </FormControl>
        </Grid>,

        
        <Grid item xs={12}>
       <FormControl fullWidth>
         
       <FormLabel>En cas de problème d’ordre médical vous « obligeant » à dormir en single, nous le préciser ici</FormLabel>
       <TextFieldWithError
            {... props}
        errors = {errors}
        setErrors = {setErrors}
        identifier = "pProblemeMedical"
        label= "Problème médical"
        errorFunction = {(value) => false}
        >
        </TextFieldWithError>
        </FormControl>
        </Grid>]
        }

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