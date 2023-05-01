import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const Home = () => {
    return (
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    Cats Main Page
                </h1>
                <p className='text' style={{width:'600px'}}>
                    This website (that looks REALLY good) will show u some cool cat facts + some cute pics of cats
                </p>
            </div>
            <br/>
            <br/>
            <p> </p>
        </div>
    );
}

export default Home;