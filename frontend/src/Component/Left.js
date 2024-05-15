import React, { useState } from 'react';
import './Left.css';
import { useNavigate } from 'react-router-dom';

export default function Left() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');

  const handleNavigation = (path, tab) => {
    navigate(path);
    setActiveTab(tab);
  };

  return (
    <div className='left'>
      <div
        onClick={() => handleNavigation('/home', 'home')}
        style={{
          padding: '5px',
          backgroundColor: activeTab === 'home' ? '#cec8a6' : '',
          borderRadius: '30px'
        }}
      >
        Home
      </div>
      <div
        onClick={() => handleNavigation('/state', 'state')}
        style={{
          padding: '5px',
          backgroundColor: activeTab === 'state' ? '#cec8a6' : '',
          borderRadius: '30px'
        }}
      >
        State
      </div>
      <div
        onClick={() => handleNavigation('/city', 'city')}
        style={{
          padding: '5px',
          backgroundColor: activeTab === 'city' ? '#cec8a6' : '',
          borderRadius: '30px'
        }}
      >
        City
      </div>
      <div
        onClick={() => handleNavigation('/warehouse', 'warehouse')}
        style={{
          padding: '5px',
          backgroundColor: activeTab === 'warehouse' ? '#cec8a6' : '',
          borderRadius: '30px'
        }}
      >
        Warehouse
      </div>
    </div>
  );
}
