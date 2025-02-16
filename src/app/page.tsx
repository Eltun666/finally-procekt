'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './GlobalRedux/store';
import './globals.scss';
import { FaPlay, FaPlusCircle } from 'react-icons/fa';
import { GoHeartFill } from 'react-icons/go';
import Box from './Components/Box/Box';
import { FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";
import { getApi } from './GlobalRedux/Features/product/productSlice';
import ImageSkeleton from './Components/CardSkeleton/CardSkeleton';
import SectionOne from './Components/SectionOne/SectionOne';
import CatocoryBox from './Components/CatocoyBox/CatocoryBox';
import TextAnimation from './Components/TextAnmimation/TextAnimation';
import { relative } from 'path';

interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  categories: string[];
  platforms: string[];
  description: string;
  iframe: string;
}

const Page: React.FC = () => {
  const [number, setNumber] = useState<number>(8); 
  const [data, setData] = useState<Game[]>([]); 
  
  const { gameData } = useSelector((state: RootState) => state.counter);

  const datacounter = () => {
    setData(gameData.slice(0, number));
  };

  const dataplus = () => {
    setNumber(prevNumber => Math.min(prevNumber + 8, gameData.length)); 
  };

  const dataminus = () => {
    setNumber(prevNumber => (prevNumber > 8 ? prevNumber - 8 : 8));  
  };

  useEffect(() => {
    if (gameData.length > 0) {
      datacounter(); 
    }
  }, [gameData, number]); 



  return (
    <main>
      <SectionOne />

      <section className='section-two'>
        <h2>Top 10 Trending Movies</h2>    
        <div>
          
        </div>    
      </section>

      <section className='section-there'>
          <TextAnimation/>
          <CatocoryBox />
      </section>

      <section className='section-four'>
        <div className='head-text'>
          <h2 id='games' >GAMES</h2>
          <span>More Games</span>
        </div>
        {gameData.length > 0 ? (
          <div className='games-box'>
            <div className='games'>
              {data.length > 0 ? (
                data.map((item) => (
                  <Box key={item.id} item={item} />
                ))
              ) : (
                <div className="loading-box">
                  <span>Loading...</span>
                  <ImageSkeleton />
                </div>
              )}
            </div>

            <div className='datacounter-box'>
              <button onClick={dataminus}>
                Hide more <FaArrowRightLong className='ArrowRight'/>
              </button>
              <button onClick={dataplus}>
                <FaArrowUpLong className='ArrowUp'/> Load more
              </button>
            </div>
          </div>
        ) : (
          <div className="loading-box">
            <span>Loading...</span>
            <ImageSkeleton />
          </div>
        )}
      </section>
            
    </main>
  );
};

export default Page;
