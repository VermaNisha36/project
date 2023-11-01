import React from 'react';
import './ImageList.css'; // Import the CSS file
import BoardGalleryList from '../AllGalleryCards/boardGallery';
import LocationGalleryList from '../AllGalleryCards/locationGallery';
import ProductGalleryList from '../AllGalleryCards/productGallery';
import VcGalleryList from '../AllGalleryCards/vcGallery';
import BillGalleryList from '../AllGalleryCards/billGallery';

function ImageList({ data, activeTab, previousData }) {
  let galleryList;
  if (data.length === 0) {
    galleryList = (
      <div className="centered-div">
        <p>No images found</p>
      </div>
    );
  } else {
    switch (activeTab) {
      case 'Board':
        galleryList = <BoardGalleryList data={data} />;
        break;
      case 'Location':
        galleryList = <LocationGalleryList data={data} />;
        break;
      case 'Products':
        galleryList = <ProductGalleryList data={data} />;
        break;
      case 'PurchaseBill':
        galleryList = <BillGalleryList data={data} />;
        break;
      default:
        galleryList = <VcGalleryList data={data} />;
    }
  }

  return galleryList;
}

export default ImageList;
