import React,{useState} from 'react';
import {connect} from 'react-redux'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/material';
import './Login.css';
import { login } from './Action';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate,Navigate } from 'react-router-dom';

 function Login({ login, auth }) {
    const navigates = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const[email,SetEmail] = useState();
     const[password,SetPassword]=useState();
    const styleObj = {
        backgroundColor: '#5C218B',
        fontSize: '16px',
        color: '#ffff',
      border: 'none',
      borderRadius: '10px'
      };
   
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
const handleEmail = (e)=>{
console.log(e.target.value,"Email")
SetEmail(e.target.value)

}
const handlePassword = (e) =>{
    console.log(e.target.value,"Password")
    SetPassword(e.target.value)
}

const handleSubmit=()=>{
    login(email, password);
   setOpen(true)
navigates("/home");
   
}


      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
  return (
    <div>
        <Container className='container' >
        <Box className="box"  >
           
        <img src='image.png' alt='image'/>
        <Card variant="outlined" className="card">
        <p>Welcome to Digitalflake admin</p>
        <TextField className='inputfield'
          required
          id="outlined-required"
          label="Email-id"
          value={email}
          onChange={handleEmail}
        //   defaultValue="Hello World"
        />
           <TextField className='inputfield'
          required
          id="outlined-required"
          label="password"
          type="password"
          onChange={handlePassword}
         value={password}

        //   defaultValue="Hello World"
        /> 
        <p className='frogotPassword'>Forgot Password?</p>
        <Button sx={styleObj}  onClick={handleSubmit}
         className='Login' variant="contained"b>Login</Button>
        </Card>
        </Box>
      </Container>
      <Snackbar
           sx={{ height: "58%" }}
       anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
       message={auth && auth.user ?auth.user.msg:" "}
          severity="success"
           action={action}
        />

    </div>
  )
}

const mapStateToProps = (state) => ({ auth: state.auth });


const mapDispatchToProps = {
    login
  };
export default connect(mapStateToProps,mapDispatchToProps) (Login);