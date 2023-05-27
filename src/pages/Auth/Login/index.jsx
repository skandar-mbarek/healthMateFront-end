import React, { useState } from 'react'
import { Paper, Grid, Avatar, TextField, Typography,Link } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Form } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../components/Header';
import { GUESTPATHS } from '../../../navigations/paths';



export default function Login() {
  const paperStyle = {padding:20,height:'70vh',width:280,margin:"20px auto"}
  const avatarStyle = {backgroundColor:'#6b8ebf'}
  const btnStyle = {margin :'8px 0'}
  const textFildStyle={margin:'4px 0'}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    axios.post('http://localhost:8080/api/auth/authenticate', {
      email: email,
      password: password
    })
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      // Redirect or update UI based on successful login
    })
    .catch(error => {
      console.log("l3asba")
    });
  };

  return (
    
    <Grid>
      <Header/>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <Form onSubmit={handleFormSubmit}>
        <TextField label='Email' placeholder='Enter email' value={email} onChange={handleEmailChange} style={textFildStyle} type='email' fullWidth required/>
        <TextField label='Password' placeholder='Enter Pasword' value={password} onChange={handlePasswordChange} style={textFildStyle} type='password' fullWidth required/>
        <FormControlLabel
          control = {
            <Checkbox
              name="checkedb"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button variant='contained' type='submit' color='primary' style={btnStyle} fullWidth>Sign In</Button>
        <Typography>
          <Link href="#" >Forgot password ?</Link>
        </Typography>
        <Typography>Do you have an account ?
          <Link href={"/auth/"+GUESTPATHS.register} >Sign Up</Link>
        </Typography>
        </Form>
      </Paper>
    </Grid>
  )
}
