"use client";
import HomePage from '@/components/Home/Home';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ClipLoader } from 'react-spinners';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="blue" size={50} />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default Home;
