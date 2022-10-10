import React from 'react';
import { NavBar, FooterNavBar, ContainerBasket, ResultCard, } from '../components';

const Basket = () => {
    const language = ['Каз', 'Рус', 'Eng'];
    const basketItems = JSON.parse(sessionStorage.getItem('products'));

    return (
        <div className='app'>
            <header className='navBarContainer'>
                <NavBar current={basketItems === null ? 0 : basketItems.length} />
            </header>
            <main className='basket'>
                {
                    basketItems === null || basketItems.length === 0 ? <span className='basket__emptyly'>Корзина пуста</span> :
                        <section className='basket__sooping'>
                            <ContainerBasket products={basketItems} className={'basket__h2'} title='корзина' />
                        </section>
                }
            </main>
            <FooterNavBar language={language} />
        </div>
    );
}

export { Basket };
