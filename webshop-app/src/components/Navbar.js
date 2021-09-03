import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

function Navbar({countBasketItems}) {
    const [error, setError] = useState();
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }
    }

    //Burger Toggle Mobile
    const navSlide = () => {
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('.nav-links')

        // Nav links toggle to open
        nav.classList.toggle('nav-active');
            
            //burger to cross toggle
        burger.classList.toggle('toggle');
    }

    return (
        <nav className="navbar">
                <Link to="/" ><h2 className="logo-holder">RoundStuff.</h2></Link>
                <ul className="nav-links">
                    <Link to="/" ><li><FontAwesomeIcon icon={faHome} size="2x" onClick={navSlide}/></li></Link>
                    <Link to="/basket" ><li><FontAwesomeIcon icon={faShoppingBasket} size="2x" onClick={navSlide}/>{''}{countBasketItems?(
                        <span className="badge-count">{countBasketItems}</span>):('')}</li></Link>
                    {currentUser === (null && undefined) ? <Link to="/login" ><li onClick={navSlide}>Log in /<br/>Register</li></Link> : <Link to="/"><li onClick={()=>{handleLogout(); navSlide();}}>Logout</li></Link>}
                </ul>
                <div className="burger" onClick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                {error}
        </nav>
    )
}


export default Navbar
