import React from 'react'
import Left from './Left'
import Right from './Right'
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='Dashboard' >
       <div className='header'></div>
       <div className='DashboardBody'>
       <Left/>
      <Right/>
       </div>
     
    </div>
  )
}
