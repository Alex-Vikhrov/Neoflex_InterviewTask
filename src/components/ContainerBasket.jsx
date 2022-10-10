import React from 'react';
import { CardBasket, ResultCard } from './UI';

const ContainerBasket = ({ products, title, onClick, className }) => {
    let resultSum = 0;
    products.map(product => {
        resultSum += product.count * product.price;
    });

    return (
        <section >
            <h2 className={className || 'h2'}>{title}</h2>
            <div className='headPhonesItems'>
                {
                    products?.map((item) => <CardBasket
                        item={item}
                        onClick={onClick}
                        key={item.id} />)
                }
                <ResultCard products={products} resultSum={resultSum}/>
            </div>
        </section>
    );
}

export { ContainerBasket };