import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const Kittyinfo = () => {
    return (
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    Cat Info!!1!
                </h1>
                <p className='text' style={{width:'600px'}}>
                    Cats are very cute but can be kinda mean
                </p>
                <h2 className='text'>
                    What do they look like?
                </h2>
                <p style={{width:'600px'}}className='text'>
                    They look like a little animal (look at the pics tab)
                    also they kinda look like this - :3
                </p>
                <h2 className='text'>
                    Why cats are better than dogs
                </h2>
                <p style={{width:'600px'}}className='text'>
                    They are just soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo cute
                </p>
            </div>
            <br/>
            <br/>
            <p> </p>
        </div>
    );
}

export default Kittyinfo;