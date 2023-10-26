import React from 'react';

function ImageList({ data }) {
  return (
    <div className="image-list">
      {data.map(item => (
        <img key={item.id} src={item} alt={item.altText} />
      ))}
    </div>
  );
}

export default ImageList;
