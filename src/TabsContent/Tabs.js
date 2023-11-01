import React from 'react';
import  { tabNames } from '../models/tabToApiMap';
import './Tabs.css';

function Tabs({ activeTab, setActiveTab }) {
  console.log('Nisha');
  return (
    <div className='content-container'>
      {tabNames.map(tabName => (
        <button
          key={tabName}
          onClick={() => setActiveTab(tabName)}
          className={`tab ${activeTab === tabName ? 'active' : ''}`}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
