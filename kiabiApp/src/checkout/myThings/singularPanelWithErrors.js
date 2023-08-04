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


    return <React.Fragment>
        {props.children}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                

                <Button
                  variant="contained"
                  onClick={props.HEV.validate}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!props.HEV.validateBool()}
                >
                 Suite
                </Button>
              </Box>
    </React.Fragment>
}