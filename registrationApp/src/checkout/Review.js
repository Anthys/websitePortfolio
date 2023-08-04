import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

// replace first 12 numbers with X
function hideCardNummber(cardNumber){
  var cardNumber = cardNumber.toString();
  var cardNumberLength = cardNumber.length;
  var cardNumberFirst12 = cardNumber.substring(0, cardNumberLength - 4);
  var cardNumberLast4 = cardNumber.substring(cardNumberLength - 4, cardNumberLength);
  var cardNumberHidden = cardNumberFirst12.replace(/[0-9]/g, 'X') + cardNumberLast4;
  return cardNumberHidden;
}

const convTable={
  1: "Terrestrial",
  2: "Gas Giant",
  3: "Neptune-like",
  4: "Ice Giant"
}

export default function Review(props) {
  const values = props.values;

  
const products = [
  {
    name: convTable[values.pType] + " planet " + "'" + values.pName + "'" 
      + " ( " + (values.pRings ? " & rings" : "") 
      + (values.pLife ? " & life" : "") 
      + (values.pAtmo ? " & atmosphere" : "") 
      + (values.pMoons ? " & moons" : "") 
      + " )",
    desc: 'Boostrap planet',
    price: '$9.28BM',
  },
  { name: 'Shipping', desc: 'Interstellar Pro', price: 'Free' },
];


  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: values.cFirstName + " " + values.cLastName},
    { name: 'Card number', detail: hideCardNummber(values.caNumber) },
    { name: 'Expiry date', detail: values.caExpDate },
  ];

  function sendPostRequest(entry){
    // alert(entry)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
    };
    fetch('http://127.0.0.1:8000/entries/', requestOptions)
        .then(response => response.json())
        .then(data => alert("Your order has been placed!"));
  }

  
const addresses = [values.cAdd1, values.cState, values.cCity, values.cPostalCode, values.cCountry];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $9.28BM
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{values.cFirstName} {values.cLastName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
              {/* THIS COPY PASTE, SHOULD BE FORMATTED BETTER REFACTORED */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                
                <Button onClick={props.prevStep} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>

              <Button
                variant="contained"
                onClick={() => {sendPostRequest(values); props.nextStep();}}
                sx={{ mt: 3, ml: 1 }}
              >
               Place order
              </Button>
            </Box>
    </React.Fragment>
  );
}
