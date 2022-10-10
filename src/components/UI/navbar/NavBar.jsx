import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import clases from './styles/NavBar.module.css';

const NavBar = ({ current }) => {
    return (
        <nav className={clases.navBar}>
            <ul className={clases.navBar__links}>
                <li>
                    <Link className={clases.a} to="/">
                        qpick
                    </Link>
                </li>
                <li>
                    <Link className={clases.a} to="/">
                        <FontAwesomeIcon className={`${clases.fa} ${clases.fa__faHeart}`} icon={faHeart} />
                        <sup className={clases.supCurrent}>2</sup>
                    </Link>
                    <Link className={clases.a} to="/basket">
                        <FontAwesomeIcon className={`${clases.fa} ${clases.fa__faCartShopping}`} icon={faCartShopping} />
                        <sup className={clases.supCurrent}>{current}</sup>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };
