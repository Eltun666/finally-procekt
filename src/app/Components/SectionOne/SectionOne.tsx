'use client';
import { AppDispatch, RootState } from '@/app/GlobalRedux/store';
import { FaPlay, FaPlusCircle } from 'react-icons/fa';
import { GoHeartFill } from 'react-icons/go';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from "react-icons/io5";
import "./SectionOne.scss"
import { useEffect, useState } from 'react';

const SectionOne = () => {
    const [number, setNumber] = useState<number>(0);
    const [videobox,setVideobox] = useState<boolean>(false);
    const { gameData } = useSelector((state: RootState) => state.counter);
    const [iframeKey, setIframeKey] = useState(0);
    const dataplus = () => {
        setNumber(prevNumber => Math.min(prevNumber + 1, gameData.length - 1)); 
      };
    
      const dataminus = () => {
        setNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : 0));  
      };

      const closeVideo = () => {
        setVideobox(false);
        setIframeKey(prevKey => prevKey + 1); 
    };

  return (
    <section className='section-one'>       
        <div
          className="secton-one-box"
          style={{
            backgroundImage: `url(${gameData.length > 0 ? gameData[number]?.image : ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="back-color">
            <div className="name-box">
              <div style={{"display":"flex" , "width":"99%" , "justifyContent":"space-between"}}>
              <h3>{gameData.length > 0 ? gameData[number]?.name : 'Loading...'}</h3>
               <div onClick={() => setVideobox(!videobox)} className="playbutton">
                    <FaPlay />
               </div>
              </div>
              <div className="sec-one-text-box">
                <p>
                  Rating: <span>{gameData.length > 0 ? gameData[number]?.rating : 'Loading...'}</span>
                </p>
                <div className="sec-one-heart">
                  <p>
                    <GoHeartFill />
                  </p>
                </div>
              </div>
            </div>

            <div className="text-boxs">
              <p className="p">
                <span>Description:</span>{' '}
                {gameData.length > 0 ? gameData[number]?.description : 'Loading...'}
              </p>
              <p>
                <span>Categories:</span> {gameData.length > 0 ? gameData[number]?.categories.join(', ') : 'Loading...'}
              </p>
              <p>
                <span>Platforms:</span> {gameData.length > 0 ? gameData[number]?.platforms.join(', ') : 'Loading...'}
              </p>
              <p>
                <span>Price:</span> {gameData.length > 0 ? `$${gameData[number]?.price.toFixed(2)}` : 'Loading...'}
              </p>
              <div className="setting-buttons">
                <div className="buttons">
                <button className="btn pley-btn">
                  <FaPlay /> Play Now
                </button>
                <button className="btn add-btn">
                  <FaPlusCircle /> Add to list
                </button>
                </div>

                <div className='caursel-btn'>
                    <div onClick={dataminus} className='right-arrow arrowbtn'>
                        <MdArrowBackIos /> 
                    </div>
                    <div onClick={dataplus} className='left-arrow arrowbtn'>
                        <MdArrowForwardIos />               
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={videobox ? 'wideo-box' : 'wideo-box none'}>
            <div className='iframebox'>
            <iframe key={iframeKey}  style={{"display":videobox ? "block" : "none"}} width="100%" height="100%" src={gameData.length > 0 ? gameData[number]?.iframe : 'Loading...'}></iframe>
            <div onClick={closeVideo} className='closebtn'>
                <IoClose />
            </div> 
            </div>                      
          </div>
        </div>
      </section>
  )
}

export default SectionOne