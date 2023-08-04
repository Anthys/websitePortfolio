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

export default function ProductForm() {
  const [pType, setPType] = React.useState('');
  const [minTemp, setMinTemp] = React.useState('X');
  const [maxTemp, setMaxTemp] = React.useState('X');
  
  function getTempRange(pType) {
    switch (pType) {
      case 1:
        setMinTemp(0);
        setMaxTemp(25);
        setPTemp(0);
        break;
      case 2:
        setMinTemp(150);
        setMaxTemp(500);
        setPTemp(150);
        break;
      case 3:
        setMinTemp(-100);
        setMaxTemp(-50);
        setPTemp(-100);
        break;
      case 4:
        setMinTemp(-200);
        setMaxTemp(-50);
        setPTemp(-200);
        break;
    }
  }


  const handleChangePtype = (event) => {
    setPType(event.target.value);
    getTempRange(event.target.value);
    console.log(minTemp);
    console.log(event.target.value);
    console.log(minTemp);
  };

  
  const [pTemp, setPTemp] = React.useState('');
  const [pLocation, setPLocation] = React.useState('');

  const handleChangePLocation = (event) => {
    setPLocation(event.target.value);
  };

  const handleChangePTemp = (event) => {
    setPTemp(event.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const [errors, setErrors] = React.useState({
    pName: '',
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product choice
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pType}
            label="Product type"
            onChange={handleChangePtype}
          >
          <MenuItem value={1}>Terrestrial</MenuItem>
          <MenuItem value={2}>Gas Giant</MenuItem>
          <MenuItem value={3}>Neptune</MenuItem>
          <MenuItem value={4}>Ice giant</MenuItem>
        </Select>
        </FormControl>
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
          />
          {errors.pName && <Text color="red">{errors.pName}</Text>}
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
        <InputLabel id="demo-simple-select-label">Average planet surface temperature (Approximate): {valuetext(pTemp)}</InputLabel>
        <Slider
        aria-label="Temperature"
        defaultValue={pTemp}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={(maxTemp-minTemp)/10}
        marks
        value={pTemp}
        min={minTemp}
        max={maxTemp}
        onChange={handleChangePTemp}
      />
          
        </Grid>
    }
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" value="yes" />}
            label="Rings"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" value="yes" />}
            label="Life"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="getRings" value="yes" />}
            label="Atmosphere"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Constellation location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pLocation}
            label="Constellation location"
            onChange={handleChangePLocation}
          >
          <MenuItem value={1}>Scorpio</MenuItem>
          <MenuItem value={2}>Lyra</MenuItem>
          <MenuItem value={3}>Taurus</MenuItem>
          <MenuItem value={4}>Apollo (WIP)</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
