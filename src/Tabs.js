import React from 'react';
import tabToApiMap from './models/tabToApiMap';

function Tabs({ activeTab, setActiveTab }) {
  const tabNames = Object.keys(tabToApiMap);

  return (
    <div className="tabs">
      {tabNames.map(tabName => (
        <button
          key={tabName}
          onClick={() => setActiveTab(tabName)}
          className={activeTab === tabName ? 'active' : ''}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
