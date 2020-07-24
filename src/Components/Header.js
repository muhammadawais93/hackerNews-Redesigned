import React, { useContext } from 'react';
import Filter from './Filter';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import { HackerNewsContext } from '../ContextAPI';

function Header() {
    const {ModelToggler, clickHandler} = useContext(HackerNewsContext);
    return (
        <header className="hackerNews__header">
            <nav className="hackerNews__header__nav">
                <div className="hackerNews__header__inner container">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                        <h3>Hacker News</h3>
                    </Link>
                    <div className="searchUser">
                        <div className="searchUser__search">
                            <span className="material-icons">search</span>
                        </div>
                        <div className="searchUser__user" onClick={clickHandler}>
                            <span className="material-icons">person</span>
                        </div>
                    </div>
                </div>
            </nav>
            <Filter />
            {ModelToggler && <Login />}
        </header>
    )
}

export default Header;
