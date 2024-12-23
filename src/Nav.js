import React, { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {
    
    const [show,handleShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        };
    
        // Attach event listener
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className= {`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src="https://tse2.mm.bing.net/th?id=OIP.AC0iUF7KyK0iqL7HZ2JzcQHaD5&pid=Api&P=0&h=220"
        alt="netflix-logo"
        />

        <img 
        className='nav__avatar'
        src="https://tse3.mm.bing.net/th?id=OIP.YNYq-QyNUFRPSb4D0oVOCAHaHa&pid=Api&P=0&h=220"
        alt="netflix_profile"
        />
    </div>
  )
}

export default Nav;