// import React from 'react'
import '../App.css'

const Nav = () => {
  return (
    <div>
        <nav className = "navbar">
            <div className="navdiv">
               <div className="logo">
                <a href="#">BRAND NAME</a>
               </div>
               <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONACT US</a></li>
                <button><a href="#">Join</a></button>
               </ul>
            </div>
        </nav>
    </div>
  )
}
export default Nav
