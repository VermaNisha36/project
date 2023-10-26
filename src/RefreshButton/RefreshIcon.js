import React, { useState } from 'react';
import './RefreshIcon.css';

function RefreshIcon() {
  const [isLoading, setIsLoading] = useState(false);

  function PleaseWaitOverlay() {
    return (
      <div className="overlay">
        <div className="modal">
          <p>Please wait...</p>
        </div>
      </div>
    );
  }

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 100); // Wait for 3 seconds (adjust this value as needed)

    // Perform your data refresh or other actions here
    // You can put your actual data refresh logic inside this function.
  };

  return (
    <div className="icon">
      {/* <SlReload size={48} onClick={() => alert('Refresh clicked!')} /> */}
      <button onClick={handleClick} disabled={isLoading}>
        Refresh
      </button>
      {isLoading && <PleaseWaitOverlay />}
    </div>
  );
}

export default RefreshIcon;
