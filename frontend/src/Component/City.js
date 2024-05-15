import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {getcity} from './Action';

const styleObj = {
  backgroundColor: '#5C218B',
  fontSize: '12px',
  color: '#ffff',
border: 'none',
borderRadius: '10px',
AlignItem:"end",
margin:"10px"
};
function City({task,getcity}) {
  const navigate = useNavigate();
  const [updatestate,setUpdateState]=useState([]);
  
  useEffect(()=>{
    getcity()
    if (task && task.state && task.state.tasks) {
        console.log(task)
        setUpdateState(task.citydetails.tasks);
      }
   
  },[])
  return (
   
    <div>
      <div style={{textAlign:'end'}}>
      <Button  sx={styleObj} onClick={()=>navigate('/addnew')}>Add new</Button>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">City Name</TableCell>
            <TableCell align="right">City Code</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatestate.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.CityName}</TableCell>
              <TableCell align="right">{row.CityCode}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button>Edit</Button><Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}
const mapStateToProps = (state) => ({task:state.task});
const mapDispatchToProps = {
  getcity
};
export default connect(mapStateToProps,mapDispatchToProps) (City);