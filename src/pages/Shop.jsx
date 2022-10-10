import React, { useState } from 'react';
import { NavBar, ContainerHeadPhones, FooterNavBar } from '../components';
import headPhones from '../constants/catalogHeadPhones';
import wireless from '../constants/catalogWireless';

const Shop = () => {
    const language = ['Рус', 'Eng'];
    const [current, setCurrent] = useState(0);

    const onClickCurrentBuy = () => {
        setCurrent(current + 1);
    };

    // JSON.parse(sessionStorage.getItem('products')) === null ? 0 : JSON.parse(sessionStorage.getItem('products')).length

    const buyHeadPhones = (id) => {
        if (JSON.parse(sessionStorage.getItem('products'))) {
            const curentGuts = JSON.parse(sessionStorage.getItem('products'));
            curentGuts.push(id);
            sessionStorage.setItem('products', JSON.stringify(curentGuts));
        } else {
            sessionStorage.setItem('products', JSON.stringify([id]));
        }
    };

    return (
        <div className='app'>
            <header className='navBarContainer'>
                <NavBar current={current} />
            </header>
            <main className='catalogue'>
                <ContainerHeadPhones
                    headPhones={headPhones}
                    title='наушники'
                    onClickCurrentBuy={onClickCurrentBuy}
                    onClick={
                        buyHeadPhones
                    }
                />
                <ContainerHeadPhones
                    headPhones={wireless}
                    title='беспроводные наушники'
                    onClickCurrentBuy={onClickCurrentBuy}
                    onClick={buyHeadPhones}
                />
            </main>
            <FooterNavBar language={language} />
        </div>
    );
}

export { Shop };
