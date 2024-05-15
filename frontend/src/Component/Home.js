import React ,{useEffect}from 'react';
import {connect} from 'react-redux';
import {getstate} from './Action';
function Home({getstate}) {
  useEffect(()=>{
    getstate()
    console.log("tas")
  },[])
  return (
    <div  style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
        <p>Welcome to Digitalflake admin</p>
    </div>
  )
}
const mapStateToProps = (state) => ({task:state.task});
const mapDispatchToProps = {
  getstate
};
export default connect(mapStateToProps,mapDispatchToProps) (Home);