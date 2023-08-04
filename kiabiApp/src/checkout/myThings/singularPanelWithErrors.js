import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useEffect} from 'react';

import { TextFieldWithError, SelectWithError } from './fieldsWithError';


export function SingularPanelWithErrors(props){

    // const [errors, setErrors] = React.useState({
    // });


    function validateBool(){
        for (let i = 0;i<Object.keys(props.errors).length;i++){
            if (props.errors[Object.keys(props.errors)[i]]){
                return false;
            }
        }
        return true;
    }

    const validate = () => {
        if (validateBool()){
            props.nextStep();
        }
    }

    // const [HEV, setHEV] = React.useState({
    //     errors : errors,
    //     setErrors : setErrors,
    //     handleFormData : props.handleFormData,
    //     values : props.values,
    //     validate : validate,
    //     validateBool : validateBool
    // });

    // let el = React.cloneElement(props.children, {HEV : HEV});

    return <React.Fragment>
        {props.children}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {props.prevStep && <Button
                  onClick={props.prevStep}
                  sx={{ mt: 3, ml: 1 }}
                >
                 Retour
                </Button>
                }

                <Button
                  variant="contained"
                  onClick={validate}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!validateBool()}
                >
                 Suite
                </Button>
              </Box>
    </React.Fragment>
}