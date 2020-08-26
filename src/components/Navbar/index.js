import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Ana Sayfa</NavLink></li>
            <li><NavLink to="/ben-sefa">BenSefa</NavLink></li>
            <li><NavLink to="/post">Paylaşımlar</NavLink></li>
            <li><NavLink to="/contact-us">İletişim</NavLink></li>
        </ul>
        
    </div>
   )

 }

export default Navbar