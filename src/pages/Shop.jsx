import React, { useState } from 'react';
import { NavBar, ContainerHeadPhones, FooterNavBar } from '../components';
import headPhones from '../constants/catalogHeadPhones';
import wireless from '../constants/catalogWireless';
import allHeadPhones from '../constants/allCatalog';

const Shop = () => {
    const language = ['Рус', 'Eng'];
    const [current, setCurrent] = useState(0);

    const onClickCurrentBuy = () => {
        setCurrent(current + 1);
    };

    const buyHeadPhones = (id) => {
        if (JSON.parse(sessionStorage.getItem('products'))) {
            const curentGuts = JSON.parse(sessionStorage.getItem('products'));
            const item = curentGuts.find(elem => elem.id === id);
            if (item) {
                item.count++;
            } else {
                const item = allHeadPhones.find(elem => elem.id === id);
                curentGuts.push(item);
            }
            sessionStorage.setItem('products', JSON.stringify(curentGuts));
        } else {
            const item = allHeadPhones.find(elem => elem.id === id);
            sessionStorage.setItem('products', JSON.stringify([item]));
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
                    onClick={buyHeadPhones}
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
