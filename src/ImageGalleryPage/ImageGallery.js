import React, { useState, useEffect } from 'react';
import Tabs from '../Tabs';
import './ImageGallery.css';
import tabToApiMap from '../models/tabToApiMap';
import ImageList from '../ImageListPage/ImageList';
import RefreshIcon from '../RefreshButton/RefreshIcon';

const ImageGallery = () =>{
  const [activeTab, setActiveTab] = useState('Board');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(tabToApiMap[activeTab]);
        const result = await response.json();
        const x= result.data.image_resources;
        var namesList = x.map(item => item.image_url);
        setData(namesList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [activeTab]);

  return (
    <div>
      <p>test(190712657)</p>
      <div className="row">
        <p className="text">Image Gallery</p>
        <RefreshIcon/>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ImageList data={data} />
    </div>
  );
}

export default ImageGallery;