import React, { useState, useEffect, useCallback,useMemo } from 'react';
import Tabs from '../TabsContent/Tabs';
import RefreshIcon from '@mui/icons-material/Refresh';
import './ImageGallery.css';
import { tabToApiMap } from '../models/tabToApiMap';
import ImageList from '../ImageListPage/ImageList';
import { Modal, Box, CircularProgress, IconButton} from '@mui/material';

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('Board');
  const [data, setData] = useState([]);
  const previousData= useMemo(() => {
    return {
    AK: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDA0NiIsImV4cCI6MTY5ODg5OTU5MSwiaWF0IjoxNjk4ODEzMTkxLCJpc3MiOiJFTVBMT1lFRSJ9.xYX7O9YidlYT10ppu3pSEv4TFPeC6Ha4ogWJEp_miJE",
    version_code: "229",
    buildVersion: "1.0.179",
    pageIndex: "1",
    empid:"94046",
    glid:"187514626",
    os:"ANDROID",
    platform:"NSD",
    verticalId:"40",
    };
  },[]);
  
  const handleOpen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData([]);
      fetchData();
      handleClose();
    }, 300);
  };

  const handleClose = () => {
    setIsLoading(false);
  };

  const fetchData = useCallback(async () => {
    try {
      const apiMap = tabToApiMap(previousData);
      const apiUrl = apiMap[activeTab];
      const response = await fetch(apiUrl);
      const result = await response.json();
      const x = result.data.image_resources;
      setData(x);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [activeTab,previousData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='body'>
      <p className="companyName">test(190712657)</p>
      <div className="row">
        <p className="text">Image Gallery</p>
        <IconButton onClick={handleOpen}>
          <RefreshIcon />
        </IconButton>
        <Modal
        open={isLoading}
        onClose={handleClose}
        aria-labelledby="pleasewait-modal-title"
        aria-describedby="pleasewait-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px #000',
            boxShadow: 24,
            p: 2,
            textAlign: 'center',
          }}
        >
          <div className="rowLoader">
            <CircularProgress color="secondary" />
            <p id="pleasewait-modal-title">Please Wait...</p>
          </div>
        </Box>
      </Modal>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ImageList data={data} activeTab={activeTab}/>
    </div>
  );
};

export default ImageGallery;