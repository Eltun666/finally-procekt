import React from 'react'
import "./Footer.scss"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer>
      <div className='footer-One'>
        <div className="text">
            <h4>You enjoy playing games</h4>
            <p>There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.</p>
        </div>
        <div className='sosical-btns'>
            <div className="sosical-btn">
            <FaInstagram />
            </div>
            <div className='sosical-btn'>
            <IoLogoTwitter />
            </div>
            <div className='sosical-btn'>
            <FaLinkedinIn />
            </div>
            <div className='sosical-btn'>
            <FaFacebookF />
            </div>
        </div>
      </div>
      <div className='footer-two'>
        <div className='game-logo game-logo0'>
          <img src="https://wallpaperaccess.com/full/2780866.jpg" alt="" />
          <p>GARENA</p>
        </div>
        <div className='game-logo game-logo1'>
        <img src="https://cs2.gamemodding.com/images/6ce2f3997409849dce572909e8d0c7147db0077e0583a6b1179313e4be4faa1a.jpg" alt="" />
          <p>TENCENT GAMES</p>
        </div>
        <div className='game-logo game-logo2'>
        <img src="https://i.pinimg.com/originals/1c/f7/2c/1cf72cffd1892fefbad861ce0e1b7c93.jpg" alt="" />
          <p>ROCKSTAR</p>
        </div>
        <div className='game-logo game-logo3'>
          <img src="https://techstory.in/wp-content/uploads/2022/01/epic_logo_black.6.jpg" alt="" />
          <p>EPIC GAMES</p>
        </div>
        <div className='game-logo game-logo4'>
          <img src="https://discord.do/wp-content/uploads/2023/08/Official-Unity-Discord.jpg" alt="" />
          <p>UNITY</p>
        </div>
      </div>
      <div className='footer-there'>
        <p>© Copyright 2024 Game Zone All Rights Reserved</p>
      </div>
      </footer>
  )
}

export default Footer
