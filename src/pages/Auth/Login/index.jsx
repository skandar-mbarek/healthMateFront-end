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
import { useAuthContext } from '../../../context/AuthContext';



export default function Login() {
  const paperStyle = {padding:20,height:'70vh',width:280,margin:"20px auto"}
  const avatarStyle = {backgroundColor:'#6b8ebf'}
  const btnStyle = {margin :'8px 0'}
  const textFildStyle={margin:'4px 0'}

  const [loginForm, setLoginForm] = useState({email:"",password:""});
  const {login}=useAuthContext();
  

  const updateForm = (data)=>{
    setLoginForm({
      ...loginForm,
      ...data
    })
   
  }
  const onLogin = ()=>{

    login(loginForm,null,null)
  }

  

  return (
    
    <Grid>
      <Header/>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <Form >
        <TextField label='Email' placeholder='Enter email'  onChange={(e)=>updateForm({email:e.target.value})} style={textFildStyle} type='email' fullWidth required/>
        <TextField label='Password' placeholder='Enter Pasword'  onChange={(e)=>updateForm({password:e.target.value})} style={textFildStyle} type='password' fullWidth required/>
        <FormControlLabel
          control = {
            <Checkbox
              name="checkedb"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button variant='contained' type='submit' color='primary' onClick={onLogin}  style={btnStyle} fullWidth>Sign In</Button>
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
