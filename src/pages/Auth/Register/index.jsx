import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Header from '../../../components/Header';





function Register() {
  
  const paperStyle = {padding:'30px 20px',width:500,margin:"20px auto"}
  const headerStyle = {margin:0}
  const avatarStyle = {backgroundColor:'#6b8ebf'}
  const marginTop = { marginTop: 5 }
  const textFildStyle={margin:'4px 0'}

  return (
    <Grid>
      <Header/>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon/>
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant='caption'>plese fill this form to create an account !</Typography>
        </Grid>
        
        <form>
                    <TextField fullWidth label='First name' style={textFildStyle} placeholder="Enter your name" />
                    <TextField fullWidth label='Last name' style={textFildStyle} placeholder="Last name" />
                    <TextField fullWidth label='Email' style={textFildStyle} placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                            <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl fullWidth style={textFildStyle}>
                        <InputLabel id="demo-simple-select-label">speciality</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //value={age}
                          label="speciality"
                          //onChange={handleChange}
                        >
                          <MenuItem value={"Chirurgie carcinologique"}>Chirurgie générale</MenuItem>
                          <MenuItem value={"Chirurgie carcinologique"}>Chirurgie pédiatrique</MenuItem>
                          <MenuItem value={"Chirurgie carcinologique"}>Chirurgie carcinologique</MenuItem>
                        </Select>
                      </FormControl>                      



                    <TextField fullWidth label='Phone Number' style={textFildStyle} placeholder="Enter your phone number" />

                    <TextField fullWidth id="outlined-multiline-static" style={textFildStyle} label="Multiline" multiline rows={4} defaultValue="Default Value"/>
                    
                    <TextField fullWidth label='Password' type='password' style={textFildStyle} placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    
                    <Button type='submit' variant='contained' style={textFildStyle} color='primary'>Sign up</Button>
        </form>
        


      </Paper>
    </Grid>
  )
}

export default Register