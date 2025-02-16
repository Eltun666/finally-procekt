'use client';
import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaRegHeart, FaSearch } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'
import "./Header.scss"
import { AppDispatch } from '@/app/GlobalRedux/store'
import { getApi } from '@/app/GlobalRedux/Features/product/productSlice'
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);
  return (
    <header>
      <div className="header-boxs">
      <div className='header-left-box'>
        <Link href={"/"}>
        <div className="logo">
          <h2>GaMe</h2>
          <img src="https://th.bing.com/th/id/OIP.HMtAjUAAevlraBkZCs6hpwHaE9?rs=1&pid=ImgDetMain" alt="" />
          <h2>ZoNe</h2>
        </div>
        </Link>
        <nav>
          <ul>
            <li> <Link href={"/"}><span>HOME</span></Link> </li>
            <li> <Link href={"#games"}><span>GAME</span></Link> </li>
            <li> <Link href={""}><span>ADD TO LiST</span></Link> </li>
          </ul>
        </nav>
      </div>
      <div className='heaedr-right-box'>
        <div className="header-search-box headbox"><Link href={"/pages/Search"}><span><FaSearch /></span></Link></div>
        <div className="header-log-box headbox"><span><BsPerson /></span>
          <div className='in-log-box'>
              <div className='register-box reg-log-box'>
                <Link href={""}><span className='reg-box'>REGIDTER</span></Link>
              </div>
              <div className='login-box reg-log-box'>
                <Link href={""}><span className='log-box'>LOG IN</span></Link>
              </div>
          </div>
        </div>
        <div className="header-heart-box headbox"><span><FaRegHeart /></span><p>0</p></div>
        
      </div>  
      </div>                    
    </header>
  )
}

export default Header
