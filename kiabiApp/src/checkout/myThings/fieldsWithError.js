import React from 'react';
import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { Select } from '@mui/material';

// Textfield with validation message in case of error
export function TextFieldWithError(props){
    let errorFunction = props.errorFunction;
    if (!props.errorFunction){
        errorFunction = (value) => value == '';
    }
    useEffect(() => {
        props.HEV.setErrors({...props.HEV.errors, [props.identifier]: errorFunction(props.HEV.values[props.identifier])});
    }, []);
    return <TextField
        {... props}
        defaultValue={props.HEV.values[props.identifier]}
        onChange={e => {props.HEV.handleFormData(props.identifier, e.target.value);
                props.HEV.setErrors({...props.HEV.errors, [props.identifier]: errorFunction(e.target.value)});
            }
        }
        error={props.HEV.errors[props.identifier] == true || props.HEV.errors[props.identifier] == undefined}
        helperText={props.helperText? props.helperText : "Incorrect entry"}
    />
}

export function SelectWithError(props){
    let errorFunction = props.errorFunction;
    if (!props.errorFunction){
        errorFunction = (value) => value == '';
    }
    useEffect(() => {
        props.HEV.setErrors({...props.HEV.errors, [props.identifier]: errorFunction(props.HEV.values[props.identifier])});
    }, []);

    return <Select
        {... props}
        defaultValue={props.HEV.values[props.identifier]}
        onChange={e => {props.HEV.handleFormData(props.identifier, e.target.value);
                props.HEV.setErrors({...props.HEV.errors, [props.identifier]: errorFunction(e.target.value)});
            }
        }
        error={props.HEV.errors[props.identifier] == true || props.HEV.errors[props.identifier] == undefined}
        helperText={props.helperText? props.helperText : "Incorrect entry"}
    />
    
    {/* <TextField
        {... props}
        defaultValue={props.HEV.values[props.identifier]}
        onChange={e => {props.HEV.handleFormData(props.identifier, e.target.value);
                props.HEV.setErrors({...props.HEV.errors, [props.identifier]: errorFunction(e.target.value)});
            }
        }
        error={props.HEV.errors[props.identifier] == true || props.HEV.errors[props.identifier] == undefined}
        helperText={props.helperText? props.helperText : "Incorrect entry"}
    /> */}
}


{/* <TextField
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
 */}
