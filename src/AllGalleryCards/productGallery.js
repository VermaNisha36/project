import React from 'react';
import { Card } from '@mui/material';
import './gallery.css';

function ProductGalleryList({ data }) {
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
            <p>{item.display_name}</p>
            <p className="space"> (Status: {item.status})</p>
          </div>
          <div className='rowLoader'>
            <p>{item.sort_date} PM</p>
            <p className="space">|</p>
            <p className="space">Module: {item.module}</p>
          </div>
          </Card>
        ))}
      </div>
  );
}

export default ProductGalleryList;

