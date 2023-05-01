import React from 'react';
import Navbar from './Navbar';
//import '../App.css';

const Catpics = () => {
    return (
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    Pictures of cats!
                </h1>
                <p className='text' style={{width:'600px'}}>
                    Below is a picture and a gif of a cat so that you can see what they look like bc its confusing
                </p>
                <h2 className='text'>
                    cats
                </h2>
                <img src="donotthecat.jpg" alt="Do not The cat" width="460" height="345"></img>
                <img src="shocked-cat.gif" alt="Shocked" width="460" height="345"></img>
                <img src="thisdoesntexist.jpg" alt="This is the most interesting photo you will ever see" width="460" height="345"></img>
            </div>
            <br/>
            <br/>
            <p> </p>
        </div>
    );
}

export default Catpics;