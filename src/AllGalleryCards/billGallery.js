import React from 'react';
import { Card } from '@mui/material';

function BillGalleryList({ data }) {
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
          <p>PurchaseBill</p>
          <p>{item.modify_date}</p>
          </Card>
        ))}
      </div>
  );
}

export default BillGalleryList;

