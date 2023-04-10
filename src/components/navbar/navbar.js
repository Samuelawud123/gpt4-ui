import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg' ;

const  Navbar = () => {
 const [toggleMenu, setToggleMenu]= useState(false)
  return (
    <div className="navbar">
      <div className='navbar_links'>
        <div className="navbar_links_logo">
          <img src={logo} alt='Logo'/>
        </div> 
        <div className="navbar_links_container ">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt4">What is GPT4</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        </div>
        <div className='navbar_sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div> 
        <div className='navbar_menu'>
           { toggleMenu ? 
              <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
             : 
              <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
}

            {toggleMenu && (
               <div className='navbar_menu_container scale_up_center' >
                <div className='navbar_menu_container_links'>
                  <p><a href="#home">Home</a></p>
                  <p><a href="#gpt4">What is GPT4</a></p>
                  <p><a href="#possibility">Open AI</a></p>
                  <p><a href="#features">Case Studies</a></p>
                  <p><a href="#blog">Library</a></p>
                </div>
                <div className='navbar_menu_container_links_sign'>
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                </div>
 
               </div>
            )}
        </div>

      
    </div>
  )
}

export default Navbar