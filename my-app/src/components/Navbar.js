import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{paddingTop:'30px',paddingBottom:'30px'}}>
            <ul style={{display:'flex',listStyle:'none'}}>
                <button className='navButton'><li><Link className='navText' to="/">Home</Link></li></button>
                <button className='navButton'><li><Link className='navText' to="/Catinfo">Cat Info!</Link></li></button>
                <button className='navButton'><li><Link className='navText' to="/Catpics">Cat Pics!</Link></li></button>
            </ul>
        </nav>
    );
}

export default Navbar;