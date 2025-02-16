'use client';

import { getApi } from '@/app/GlobalRedux/Features/product/productSlice';
import { AZ, Cheap, Default, Expenisve, searcfunc, searchQueryfunc, ZA } from '@/app/GlobalRedux/Features/product/searchSlice';
import { AppDispatch, RootState } from '@/app/GlobalRedux/store';
import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { GiZigArrow } from "react-icons/gi";
import "./Search.scss";
import Box from '@/app/Components/Box/Box';
import ImageSkeleton from '@/app/Components/CardSkeleton/CardSkeleton';

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

const Page = () => {
  const dispatch: AppDispatch = useDispatch();
  const { gameData } = useSelector((state: RootState) => state.counter);
  const { SearchData, searchQuery } = useSelector((state: RootState) => state.search);

  const [btn, setBtn] = useState<boolean>(false);


  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searcfunc(gameData));  
  };

  const noResultsMessage = SearchData.length === 0 && searchQuery !== "";

  return (
    <main>
      <section>
        <div className='form-button-boxs'>
          <div className="form-box">
            <form action="#" onSubmit={handleSearch}>
              <input 
                onChange={(e) => dispatch(searchQueryfunc(e.target.value))} 
                type="text" 
                placeholder='Please Game Name...' 
                value={searchQuery} 
              />
              <button type="submit" className='search-btn'>
                <IoSearchSharp /> Search
              </button>
            </form>
          </div>

          <div className="filter-btn-boxs">
            <div className="filter-btn">
              <button onClick={() => setBtn(!btn)}>Filter <GiZigArrow className={btn ? "svg1" : "svg"} /></button>
            </div>
            <div style={{"display": btn ? "flex" : "none"}} className="ather-filter-btns">
              <div className="btns">
                <button onClick={() => dispatch(AZ(gameData))}>A to Z <div className="boll"></div></button>
                <button onClick={() => dispatch(ZA(gameData))}>Z to A <div className="boll"></div></button>
              </div>
              <div className="btns">
                <button onClick={() => dispatch(Expenisve(gameData))}>From expensive to cheap <div className="boll"></div></button>
                <button onClick={() => dispatch(Cheap(gameData))}>From cheap to expensive <div className="boll"></div></button>
              </div>
              <button onClick={() => dispatch(Default(gameData))}>Default <div className="boll"></div></button>
            </div>
          </div>
        </div>

        <div className='data'>
          {noResultsMessage ? (
            <div className="no-results">
              <p>Melumat yoxur</p> 
            </div>
          ) : SearchData && SearchData.length > 0 ? (
            SearchData.map((item) => (
              <Box key={item.id} item={item} />
            ))
          ) : gameData && gameData.length > 0 ? (
            gameData.map((item) => (
              <Box key={item.id} item={item} />
            ))
          ) : (
            <div className='loading-box'>
              <p>Loading...</p>
              <ImageSkeleton />
            </div>
          )}
        </div>

      </section>
    </main>
  );
};

export default Page;
