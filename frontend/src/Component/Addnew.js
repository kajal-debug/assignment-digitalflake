import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import {connect} from 'react-redux'
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import {state} from './Action';
import { useNavigate } from 'react-router-dom';
import { ForkRight, Height, Padding } from '@mui/icons-material';
 function Addnew({state,task}) {
    const navigate = useNavigate();
    const [stateName,SetStateName]=useState();
    const[stateCode,SetStateCode] = useState();
    const[status,setStatus] = useState();
    const currencies = [
        {
          value: 'active',
          label: 'active'
        },
        {
          value: 'inactive',
          label: 'inactive',
        },
      ];
      const handleName =(e)=>{
        SetStateName(e.target.value);
        console.log(status)
      }
      const handlecode =(e) =>{
        SetStateCode(e.target.value)
        console.log(status)
      }
      const handleState = ()=>{
        state(stateName,stateCode,status)
      }
      const styleObj = {
        margin:'10px',
        fontSize: '16px',
        color: '#ffff',
      borderRadius: '18px',
      width:200,
     
      };
      const stylebtn ={
        position:"absolute",
        bottom:50,
        right:180,
        border:'1px solid #767676',
        borderRadius:'50px',
        color:"#767676",
        width:110,
        margin:'30px',
      }
      const stylebtnsave ={
        position:"absolute",
        bottom:50,
        right:50,
        backgroundColor: '#662671',
        color:'#fff',
         borderRadius:'50px',
        margin:'30px',
        width:110,
      }
  return (
    <div >
      <h2>ADD State</h2>
        <TextField sx={styleObj}
          id="outlined-helperText"
          label="State Name"
          defaultValue=" "
        onChange={handleName}
        />
         <TextField sx={styleObj}
          id="outlined-helperText"
          label="State Code"
          defaultValue=" "
          onChange={handlecode}
        />
         <TextField sx={{width:'200px',margin:"10px"}}
          id="outlined-select-currency"
          select
          label="Status"
          defaultValue=""
          onChange={(e)=>setStatus(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
<div style={{margin:"10px"}}>
<Button sx={stylebtn}  onClick={()=>{navigate('/state')}}>cancle</Button>
     <Button  sx={stylebtnsave} onClick={handleState}>Save</Button>
</div>
   
    </div>
  )
}
const mapStateToProps = (state) => ({ task: state.task });
const mapDispatchToProps = {
    state
  };
export default connect(mapStateToProps,mapDispatchToProps) (Addnew);