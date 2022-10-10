import React from 'react';
import { CardBasket, ResultCard } from './UI';

const ContainerBasket = ({ producrts, title, onClick, className }) => {

    return (
        <section >
            <h2 className={className || 'h2'}>{title}</h2>
            <div className='headPhonesItems'>
                {
                    producrts?.map((item) => <CardBasket
                        itemId={item}
                        onClick={onClick}
                        key={item} />)
                }
                <ResultCard producrts={producrts} />
            </div>

        </section>
    );
}

export { ContainerBasket };