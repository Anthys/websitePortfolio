import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function ProductForm(props) {
  const handleFormData = props.handleFormData;
  const values = props.values;
  // const [pType, setPType] = React.useState('');
  const [minTemp, setMinTemp] = React.useState('X');
  const [maxTemp, setMaxTemp] = React.useState('X');
  // if (values.pType){
  //   getTempRange(values.pType);
  // }

  const [errors, setErrors] = React.useState({
    pName: '',
    pType: '',
  });

  useEffect(()=>{
    if (values.pType){
            const prevTemp = values.pTemp;
            getTempRange(values.pType);
            handleFormData("pTemp", prevTemp);
          }
}, []);
  // useEffect(() => {
  //   if (values.pType){
  //       getTempRange(values.pType);
  //     }
  // });

  function validate(){
    console.log("VALIDATION");
    console.log(props.values);
    var errors = {};
    if (props.values.pName == '') {
      console.log('error');
      errors.pName = 'Please select a product name';
    }
    if (props.values.pType == '') {
      console.log('error');
      errors.pType = 'Please select a product type';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }else{
      // props.setCheckoutData(Object.assign(props.checkoutData, {pName: pName, pType: pType}));
      props.nextStep();
    }
  }

  function getTempRange(pType, event) {
    switch (pType) {
      case 1:
        setMinTemp(0);
        setMaxTemp(25);
        handleFormData("pTemp", 0);
        break;
      case 2:
        setMinTemp(150);
        setMaxTemp(500);
        handleFormData("pTemp", 150);
        break;
      case 3:
        setMinTemp(-100);
        setMaxTemp(-50);
        handleFormData("pTemp", -100);
        break;
      case 4:
        setMinTemp(-200);
        setMaxTemp(-50);
        handleFormData("pTemp", -200);
        break;
    }
  }


  const handleChangePtype = (event) => {
    let v = event.target.value;
    console.log(v);
    // props.handleFormData("pName", event.target.value)
    handleFormData("pType", v);
    getTempRange(v, event);
    // console.log(minTemp);
    // console.log(v);
    // console.log(minTemp);
  };
  
  // const [pTemp, setPTemp] = React.useState('');
  // const [pLocation, setPLocation] = React.useState('');

  // const handleChangePLocation = (event) => {
  //   setPLocation(event.target.value);
  // };

  // const handleChangePTemp = (event) => {
  //   setPTemp(event.target.value);
  // };

  function valuetext(value) {
    return `${value}°C`;
  }

  const [pName, setPName] = React.useState('');
  const handleChangePName = (event) => {
    // console.log(event.target.value);
    setPName(event.target.value);
  };


  // function sendPostRequest(){
  //   console.log("SENDING POST REQUEST");
  //   let entry = {
  //     "pName": "aze",
  //     "pType": 1,
  //     "pTemp": 0,
  //     "pLocation": "",
  //     "pRings": false,
  //     "pLife": false,
  //     "pAtmo": false,
  //     "pMoons": 0,
  //     "cFirstName": "a",
  //     "cLastName": "a",
  //     "cAdd1": "aa",
  //     "cAdd2": "a",
  //     "cCity": "a",
  //     "cState": "a",
  //     "cPostalCode": "a",
  //     "cCountry": "a",
  //     "caName": "a",
  //     "caNumber": "a",
  //     "caExpDate": "a",
  //     "caCVV": "a"
  //   }
  //   console.log("1")
  //   console.log(entry)
  //   axios.post('http://127.0.0.1:8000/entries', entry)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     alert("Your order has been placed!");
  //   }
  //   )
  //   .catch(function (error) {
  //     // handle error
  //     alert(error);
  //   }
  //   )
  // }

  
  // function sendGetRequest(){
  // axios.get('http://127.0.0.1:8000/entries')
  // .then(function (response) {
  //   // handle success
  //   console.log(response.data);
  //   alert("Your order has been placed!");
  // }) 
  // .catch(function (error) {
  //   // handle error
  //   alert(error);
  // })

  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  // };

  //   fetch('http://127.0.0.1:8000/entries')
  //       .then(response => response.json())
  //       .then(data => alert("Your order has been placed!"));
  //       .catch(err => console.log(err));
  // }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product choice
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel 
            required id="demo-simple-select-label">Product type</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={props.values.pType}
            label="Product type" 
            onChange={handleChangePtype}
            // onChange={e => props.handleFormData("pType", e.target.value)}
          >
          <MenuItem value={1}>Terrestrial</MenuItem>
          <MenuItem value={2}>Gas Giant</MenuItem>
          <MenuItem value={3}>Neptune</MenuItem>
          <MenuItem value={4}>Ice giant</MenuItem>
        </Select>
        </FormControl>
          {errors.pType && <Typography color="red">{errors.pType}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="planetName"
            name="planetName"
            label="Planet name"
            fullWidth
            autoComplete="planet-name"
            variant="standard"
            defaultValue={props.values.pName}
            // onChange={handleFormData("pName")}
            onChange={e => props.handleFormData("pName", e.target.value)}
          />
          {errors.pName && <Typography color="red">{errors.pName}</Typography>}
        </Grid>
    {minTemp != "X" && 
        <Grid item xs={12}>          
          <Box >
          <Typography variant="caption" gutterBottom>
            Min temp: {valuetext(minTemp)}<br/>
            Max temp: {valuetext(maxTemp)}
          </Typography>
          </Box >
        </Grid>
    }

    {minTemp != "X" && 
        <Grid item xs={12}>
        <InputLabel id="demo-simple-select-label">Average planet surface temperature (Approximate): {valuetext(values.pTemp)}</InputLabel>
        <Slider
        aria-label="Temperature"
        defaultValue={values.pTemp}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={(maxTemp-minTemp)/10}
        marks
        value={values.pTemp}
        min={minTemp}
        max={maxTemp}
        onChange={e => props.handleFormData("pTemp", e.target.value)}
      />
          
        </Grid>
    }
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" defaultChecked={values.pRings} onChange= {e=> props.handleFormData("pRings", e.target.checked)} />}
            label="Rings"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" defaultChecked={values.pLife} onChange= {e=> props.handleFormData("pLife", e.target.checked)}/>}
            label="Life"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" defaultChecked={values.pAtmo} onChange= {e=> props.handleFormData("pAtmo", e.target.checked)}/>}
            label="Atmosphere"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Constellation location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={values.pLocation}
            label="Constellation location"
            onChange={e => props.handleFormData("pLocation", e.target.value)}
          >
          <MenuItem value={1}>Scorpio</MenuItem>
          <MenuItem value={2}>Lyra</MenuItem>
          <MenuItem value={3}>Taurus</MenuItem>
          <MenuItem value={4}>Apollo (WIP)</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  onClick={() => {validate()}}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </Box>
    </React.Fragment>
  );
}
