import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { TextFieldWithError, SelectWithError } from './myThings/fieldsWithError';
import { SingularPanelWithErrors } from './myThings/singularPanelWithErrors';

function getInfo1(props){
  switch (props.values.pBU){
    case "World services":
      return <Typography>
        Les infos d'accessibilités sont disponibles en bas du site. N'hésites pas à privilégier les transports en communs ou le covoiturage :)
        <br/>+ Infos sur le process de Notes de Frais pour le parking Payant LGP (en attente infos Kiabi)
      </Typography>
    case "Logistique Lauwin Planque":
      return <Typography>
        Un bus est prévu mardi matin au départ de Lauwin Planque pour t'emmener à Lille Grand Palais. Si tu souhaites participer à la soirée et que tu as choisi d'être logé à l'hôtel, le bus te redéposera à Lauwin Planque Mercredi matin :)
      </Typography>
}
}

function getVoyage(props, errors, setErrors){
  let a = [];
  if (props.values.pBU === "France affiliés"){
    let b = (
      <Grid item xs={12}>
       <FormControl fullWidth>
         <InputLabel 
            required>Moyen d'arrivée</InputLabel>
          <SelectWithError
            {... props}
            required
            label="Moyen d'arrivée" 
            errors = {errors}
            setErrors = {setErrors}
            identifier="pCommentViensTu"
            errorFunction = {(value) => value === ''}
          >
          <MenuItem value={"Train"}>Train</MenuItem>
          <MenuItem value={"Avion"}>Avion</MenuItem>
          <MenuItem value={"Voiture"}>Voiture</MenuItem>
        </SelectWithError>
        </FormControl>
        </Grid>);
    a.push(b);
    if (props.values.pCommentViensTu === "Train" || props.values.pCommentViensTu === "Avion") {
      let c = (<Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel 
               required>Lieu d'arrivée</InputLabel>
             <SelectWithError
               {... props}
               required
               label="Lieu d'arrivée:" 
               errors = {errors}
               setErrors = {setErrors}
               identifier="pLieuArrivee"
               errorFunction = {(value) => value === ''}
             >
             <MenuItem value={"Gare Lilles Flandres"}>Gare Lilles Flandres</MenuItem>
             <MenuItem value={"Gare Lilles Europe"}>Gare Lilles Europe</MenuItem>
             <MenuItem value={"Aeroport de Lesquin"}>Aeroport de Lesquin</MenuItem>
           </SelectWithError>
           </FormControl>
           </Grid>)
      a.push(c);
      let d = (<Grid item xs={12}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Date et heure d'arrivée" onChange={e=> props.handleFormData("pDateArrivee", e)} value={props.values.pDateArrivee} />
      </DemoContainer>
    </LocalizationProvider>
    </Grid>)
      a.push(d);
    }
    return a;
  }else{
    return ;
  }
}

export default function Transport(props){


    const [errors, setErrors] = React.useState({
    });
  
    return <SingularPanelWithErrors 
        {... props}
        errors = {errors}
    >
     <Typography variant="h6" gutterBottom>
       Votre BU
     </Typography>
     <Grid container spacing={3}>
       <Grid item xs={12}>
        {getInfo1(props)}
        </Grid>
        {getVoyage(props, errors, setErrors)}
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