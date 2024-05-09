import React, { useState } from 'react';
import './statusButton.css'; // Import CSS file for styling

const StatusButton = () => {
  const [status, setStatus] = useState('accept');

  const handleClick = () => {
    if (status === 'accept') {
      if (window.confirm('Are you sure you want to accept the order?')) {
        setStatus('processing');
      }
    } else if (status === 'processing') {
      if (window.confirm('Are you sure you want to mark the order as processing?')) {
        setStatus('completed');
      }
    } else if (status === 'completed') {
      if (window.confirm('Are you sure you want to mark the order as completed?')) {
        // Perform any additional action if needed
      }
    }
  };

  return (
    <button
      className={`status-button ${status}`}
      onClick={handleClick}
    >
      {status === 'accept' && 'Accept'}
      {status === 'processing' && 'Processing'}
      {status === 'completed' && 'Completed'}
    </button>
  );
};

export default StatusButton;
