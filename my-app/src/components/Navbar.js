import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        fetchUser();
    },[]);
    const fetchUser = async () => {
        if(sessionStorage.getItem('userid') !== '') {
            const responseParsed = await response.json();
            setUser(responseParsed.name);
        }
    }
    const handleSignout = async () => {
        sessionStorage.removeItem('userid');
        //window.location.reload(true);
    }
    return (
        <nav style={{paddingTop:'30px',paddingBottom:'30px'}}>
            <ul style={{display:'flex',listStyle:'none'}}>
                <button className='navButton'><li><Link className='navText' to="/">Home</Link></li></button>
                <button className='navButton'><li><Link className='navText' to="/catinfo">Cat Info!</Link></li></button>
                <button className='navButton'><li><Link className='navText' to="/catpics">Generator</Link></li></button>
                {user && <li><p className='activeUser'>Active User: {user}</p></li>}
                <li><button className='signOut' onClick={handleSignout}>Sign Out</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;