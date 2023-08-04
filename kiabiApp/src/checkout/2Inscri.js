import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {FormLabel, FormControlLabel, Radio, TextField} from '@mui/material';
import {MuiTelInput} from 'mui-tel-input';


import { TextFieldWithError, SelectWithError, RadioWithError } from './myThings/fieldsWithError';
import { SingularPanelWithErrors } from './myThings/singularPanelWithErrors';


function getPerimetreOptions(BU){
  switch (BU){
    case "World services":
      return (
        [
          <MenuItem value={"Collections"}>Collections</MenuItem>,
          <MenuItem value={"DSI"}>DSI</MenuItem>,
          <MenuItem value={"RH"}>RH</MenuItem>,
          <MenuItem value={"Marques et Clients WEB"}>Marques et Clients WEB</MenuItem>,
          <MenuItem value={"Supply"}>Supply</MenuItem>
        ]);
    case "France succursales":
      return (
        [
          <MenuItem value={"DV Nord"}>DV Nord</MenuItem>,
          <MenuItem value={"DV Sud"}>DV Sud</MenuItem>,
          <MenuItem value={"DV Nord-Est"}>DV Nord-Est</MenuItem>,
          <MenuItem value={"Services centraux"}>Services centraux</MenuItem>
        ]);
    case "France affiliés":
      return (
        [
          <MenuItem value={"DV Nord"}>DV Nord</MenuItem>,
          <MenuItem value={"DV Sud"}>DV Sud</MenuItem>,
          <MenuItem value={"DV Nord-Est"}>DV Nord-Est</MenuItem>
        ]);
      }

}

function getPerimetre(props, errors, setErrors){
  if (["World services", "France succursales", "France affiliés"].includes(props.values.pBU)){
    return (
      <FormControl fullWidth>
            <InputLabel 
                required id="selectPerimetre">Mon perimètre</InputLabel>
              <SelectWithError
                {... props}
                required
                labelId="selectPerimetre"
                id="selectPerimetre"
                label="Mon perimètre" 
                errors = {errors}
                setErrors = {setErrors}
                identifier="pPerimetre"
                errorFunction = {(value) => value === ''}
              >
                {getPerimetreOptions(props.values.pBU)}
            </SelectWithError>
            </FormControl>)
  }
    else if ( ["Logistique Lauwin Planque"].includes(props.values.pBU)){
      if (props.values.pPerimetre != "Logistique"){
        props.handleFormData("pPerimetre", "Logistique");
      }
      return (
        <Typography>Logistique</Typography>
      )
    }
    else {
      return (
        <TextField>
        </TextField>
      )
    }
}

function isInside(BU, familyOfBu){
  return familyOfBu.includes(BU);
}


// const handleChange = (event) => {
//   const {
//     target: { value },
//   } = event;
//   setPersonName(
//     // On autofill we get a stringified value.
//     typeof value === 'string' ? value.split(',') : value,
//   );
// };

export default function Coords(props){


    const [errors, setErrors] = React.useState({
    });
    // var HEV = {
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
       Coordonnées
     </Typography>
     <Grid container spacing={3}>
       <Grid item xs={12} sm={6}>
        <TextFieldWithError
        {... props}
        required
        id="firstName"
        name="firstName"
        label="Prénom"
        autoComplete="given-name"
        variant="standard"
        errors = {errors}
        setErrors = {setErrors}
        identifier="pFirstName"
        />
        </Grid>
       <Grid item xs={12} sm={6}>
        <TextFieldWithError
        {... props}
        required
        id="lastName"
        name="lastName"
        label="Nom"
        autoComplete="family-name"
        variant="standard"
        errors = {errors}
        setErrors = {setErrors}
        identifier="pLastName"
        />
        </Grid>
        <Grid item xs={12}>
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioWithError
        {... props}
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    errors = {errors}
    setErrors = {setErrors}
    identifier = "pGenre"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other"></FormControlLabel> 
    { ((props.values.pGenre != "male") && (props.values.pGenre != "female") && (props.values.pGenre != "")) && 
    <TextField
      id = "pGenre"
      name = "Genre"
      label = "Genre"
      variant = "standard"
      onChange = {e => props.handleFormData("pGenre", e.target.value)}
    ></TextField>
    }
  </RadioWithError>
</FormControl>
        </Grid>
        <Grid item xs={12}>
    <MuiTelInput defaultCountry='FR' value={props.values.pPhone} onChange={e=> props.handleFormData("pPhone", e)}></MuiTelInput>
        </Grid>
        <Grid item xs={12}>
          <TextFieldWithError
        {... props}
        id="email"
        name="email"
        label="Email"
        autoComplete="email"
        variant="standard"
        errors = {errors}
        setErrors = {setErrors}
        identifier="pEmail"
        />
        {/* REGEX TODO */}
        {/* /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; */}
        </Grid>
        <Grid item xs={12}>
        {getPerimetre(props, errors, setErrors)}
        </Grid>
        {isInside(props.values.pBU, ["France succursales", "France affiliés"]) && 
        <Grid item xs={12}>  
          <TextFieldWithError
        {... props}
        id="nomMagasin"
        name="nomMagasin"
        label="Nom du magasin"
        autoComplete="nomMagasin"
        variant="standard"
        errors = {errors}
        setErrors = {setErrors}
        identifier="pNomMagasin"
        />
        </Grid>}
        <Grid item xs={12}>
  <FormLabel id="demo-radio-buttons-group-label">Présence au KOM</FormLabel>
      <RadioWithError
            {... props}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        errors = {errors}
        row
        setErrors = {setErrors}
        identifier = "pKOMPresence"
      >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
        </RadioWithError>
        </Grid>
        {isInside(props.values.pBU, ["France succursales", "France affiliés"]) &&
        <Grid item xs={12}>
  <FormLabel id="demo-radio-buttons-group-label">Présence au lancement France, à 16h30</FormLabel>
      <RadioWithError
            {... props}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        row
        errors = {errors}
        setErrors = {setErrors}
        identifier = "pPresenceLancementFrance"
      >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
        </RadioWithError>
        </Grid>
        }
        <Grid item xs={12}>
  <FormLabel id="demo-radio-buttons-group-label">Présence à la soirée</FormLabel>
      <RadioWithError
            {... props}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        errors = {errors}
        row
        setErrors = {setErrors}
        identifier = "pPresenceSoiree"
      >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
        </RadioWithError>
        </Grid>
        <Grid item xs={12}>
      <FormControl fullWidth>
            <InputLabel 
                required id="selectPerimetre">Pour que tu vives au mieux le KOM, dis nous quelles langues parles-tu ?</InputLabel>
              <SelectWithError
                {... props}
                required
                multiple
                labelId="selectPerimetre"
                id="selectPerimetre"
                label="Pour que tu vives au mieux le KOM, dis nous quels langues parles-tu ?" 
                errors = {errors}
                setErrors = {setErrors}
                identifier="pLangues"
                errorFunction = {(value) => value === ''}
                value = {[]}
              >
                <MenuItem value={"Francais"}>Francais</MenuItem>,
          <MenuItem value={"Anglais"}>Anglais</MenuItem>,
          <MenuItem value={"Italien"}>Italien</MenuItem>,
          <MenuItem value={"Espagnol"}>Espagnol</MenuItem>,
          <MenuItem value={"Portugais"}>Portugais</MenuItem>
            </SelectWithError>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormLabel id="demo-radio-buttons-group-label">Régime alimentaire particulier (Végétarien, végétalien, allergènes, autres) </FormLabel>
          <TextFieldWithError
        {... props}
        fullWidth
        id="regime"
        name="regime"
        label="Régime alimentaire particulier"
        autoComplete="regime"
        variant="standard"
        errors = {errors}
        setErrors = {setErrors}
        identifier="pRegimeAlimentaire"
        errorFunction = {(value) => false}
        />
        </Grid>
        <Grid item xs={12}><FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Particularité/autre précision utile (personne enceinte, mobilité réduite, problèmes de santé,...) </FormLabel>
        <TextFieldWithError
      {... props}
      fullWidth
      id="regime"
      name="regime"
      label="Particularité"
      variant="standard"
      errors = {errors}
      setErrors = {setErrors}
      identifier="pParticularite"
      errorFunction = {(value) => false}
      /></FormControl>
      </Grid>
      <Grid item xs={12}>
       <FormControl fullWidth>
      <FormLabel>As-tu un talent particulier que tu souhaiterais partager avec les Kiabers, sur une scène ouverte ou en animant un atelier ?</FormLabel>
      <TextFieldWithError
    {... props}
    fullWidth
    id="talent"
    name="talent"
    label="Talent particulier"
    variant="standard"
    errors = {errors}
    setErrors = {setErrors}
    identifier="pTalentParticulier"
    errorFunction = {(value) => false}
    /></FormControl>
        </Grid>
        {/* {JSON.stringify(props.values)}
        {JSON.stringify(errors)} */}
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