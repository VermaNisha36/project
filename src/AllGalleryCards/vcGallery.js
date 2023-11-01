import React from 'react';
import { Card } from '@mui/material';
import './gallery.css';

function VcGalleryList({ data }) {
  return (
    <div className="image-list">
        {data.map(item => (
          <Card key={item.image_url} className="image-container">
            <img 
            src={item.image_url} 
            alt={item.alt_text} 
            width="600" // Set the desired width
            height="500" // Set the desired height
          />
          <div className='rowLoader'>
            <p>{item.type}</p>
            <p className="space"> (Status: {item.status})</p>
          </div>
          <p className='rowLoader'>{ item.modify_date}</p>
          </Card>
        ))}
      </div>
  );
}

export default VcGalleryList;

