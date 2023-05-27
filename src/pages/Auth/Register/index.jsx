import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Header from "../../../components/Header";
import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import {  useSnackbar } from 'notistack';

function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const {login}=useAuthContext();
  const paperStyle = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#6b8ebf" };
  const marginTop = { marginTop: 5 };
  const textFildStyle = { margin: "4px 0" };
  //localState
  const [userFields, setUserFields] = useState({
    firstName: "",
    lastName: "",
    region: "",
    phoneNumber: "",
    description: "",
    email: "",
    password: "",
    role: {
      id: 2,
    }
  });
  const updateUser = (data)=>{
    setUserFields({
      ...userFields,
      ...data
      
    }) 
  }
  const handleClickVariant = (message,variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    const onSuccess=()=>{ handleClickVariant("OK","success")}
    const onFail=(message)=>{ handleClickVariant(message,"error")}
    login(userFields,onSuccess,onFail)
  
    

    
  }
  return (
    <Grid>
      <Header />
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption">
            plese fill this form to create an account !
          </Typography>
        </Grid>

        <form>
          <TextField
            fullWidth
            label="First name"
            style={textFildStyle}
      
            placeholder="Enter your name"
            onChange={(e)=>{updateUser({firstName:e.target.value})}}
          />
          <TextField
            fullWidth
            label="Last name"
            style={textFildStyle}
            placeholder="Last name"
            onChange={(e)=>{updateUser({lastName:e.target.value})}}
          />
          <TextField
            fullWidth
            label="Email"
            style={textFildStyle}
            placeholder="Enter your email"
            onChange={(e)=>{updateUser({email:e.target.value})}}
          />

          <TextField
            fullWidth
            label="Phone Number"
            style={textFildStyle}
            placeholder="Enter your phone number"
            onChange={(e)=>{updateUser({phoneNumber:e.target.value})}}
          />
          <TextField
            fullWidth
            label="Region"
            style={textFildStyle}
            placeholder="Enter your region"
            onChange={(e)=>{updateUser({region:e.target.value})}}
          />

          <TextField
            fullWidth
            id="outlined-multiline-static"
            style={textFildStyle}
            label="Description"
            multiline
            rows={4}
            placeholder="description"
            onChange={(e)=>{updateUser({description:e.target.value})}}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            style={textFildStyle}
            placeholder="Enter your password"
            onChange={(e)=>{updateUser({password:e.target.value})}}
          />
          

          <Button
            type="submit"
            variant="contained"
            style={textFildStyle}
            color="primary"
            onClick={handleOnSubmit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Register;
