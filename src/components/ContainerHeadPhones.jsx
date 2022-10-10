import React from 'react';
import { Card } from './UI';

const ContainerHeadPhones = ({ headPhones, title, onClick, className, onClickCurrentBuy }) => {
    return (
        <section >
            <h2 className={className || 'h2'}>{title}</h2>
            <div className='headPhonesItems'>
                {
                    headPhones?.map((item) => <Card
                        headPhones={item}
                        onClick={onClick}
                        onClickCurrentBuy={onClickCurrentBuy}
                        key={item.id}
                        itemId={item.id}
                    />)
                }
            </div>
        </section>
    );
}

export { ContainerHeadPhones };
