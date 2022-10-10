import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import clases from './styles/FooterNavBar.module.css';
import vk from './img/vk.png';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';


const FooterNavBar = ({ language }) => {

    return (
        <footer>
            <Link className={clases.link} to="/">
                Qpick
            </Link>
            <nav className={clases.footer__navigate}>
                <ul className={clases.footer__ul}>
                    <div className={clases.footer__container1}>
                        <li className={clases.footer__li}>Избранное</li>
                        <li className={clases.footer__li}>
                            <Link className={clases.footer__a} to="/basket">
                                Корзина
                            </Link>
                        </li>
                        <li className={clases.footer__li}>
                            <a className={clases.footer__a} href="tel:+79270586260">Контакты</a>
                        </li>
                    </div>
                    <div className={clases.footer__container2}>
                        <li className={`${clases.flex2} ${clases.footer__li}`}>Условия сервиса</li>
                        <li className={`${clases.global} ${clases.footer__li}`}>
                            <FontAwesomeIcon className={clases.fa__faGlobe} icon={faGlobe} />
                            {
                                language.map((item, index) =>
                                    <span className={clases.language} key={index}>
                                        {item}
                                    </span>)
                            }
                        </li>
                    </div>
                </ul>
            </nav>
            <address className={clases.social}>
                <a className={clases.vk} href="https://vk.com/id190446144" target="_blank">
                    <img className={clases.social__icon} src={vk} alt="vk.com" />
                </a>
                <a className={clases.telegram} href="/">
                    <img className={clases.social__icon} src={telegram} alt="telegram.com" />
                </a>
                <a className={clases.whatsapp} href="tel:+79270586260">
                    <img className={clases.social__icon} src={whatsapp} alt="whatsapp.com" />
                </a>
            </address>
        </footer>
    );
};

export { FooterNavBar };
