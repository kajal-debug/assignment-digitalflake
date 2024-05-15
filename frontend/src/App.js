import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import  Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import State from './Component/State';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/*' element={<Dashboard/>}/>
       
      </Routes>
     </Router>
    </div>
  );
}

export default App;
