'use client';
import React, { useState } from 'react';
import "./Box.scss";
import { FaHeart, FaPlay } from 'react-icons/fa';
import { LuCirclePlus } from 'react-icons/lu';

interface game {
  id: number,
  name: string,
  price:number,
  image:string,
  rating:number,
  categories:string[],
  platforms:string[],
  description:string,
  iframe:string,
}

interface BoxProps {
  item: game;
}

const Box: React.FC<BoxProps> = ({ item }) => {
  const [barbox, setBarbox] = useState<boolean>(false);

  return (
    <div className='border'>
      <div
        className='product-box'
        style={{
          backgroundImage: item?.image && `url(${item.image})`
        }}
      >
        <div className='product-color'>
          <div onClick={() => setBarbox(!barbox)} className="add-boxs">
            <div className={barbox ? "bar-box bar-box-animation" : "bar-box"}></div>
            
            <div className={barbox ? "add-box box-params" : "add-box box-params block"}>
              <LuCirclePlus />
            </div>

            <div className={barbox ? "wis-box box-params" : "wis-box box-params block"}>
              <FaHeart />
            </div>
          </div>

          <div className='anme-detail-box'>
            <div className="text">
              <p>Name: <span>{item.name}</span></p>
              <p>Price: <span>${item.price.toFixed(2)}</span></p>
            </div>
            <div className='detailbox'>
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
