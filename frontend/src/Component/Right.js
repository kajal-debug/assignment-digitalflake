import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './right.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import State from './State';
import Addnew from './Addnew';
import City from './City';
export default function Right() {


    return (
        <div className='right'>
     <Routes>
     <Route  path='home' element={<Home/>}/>
        <Route  path='state' element={<State/>}/>
        <Route path='addnew' element={<Addnew/>}/>
        <Route path='city' element={<City/>}/>
     </Routes>
        </div>
    );
}
