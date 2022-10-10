import React from 'react';
import { Button } from '..';
import clases from './styles/Card.module.css';

const Card = ({ headPhones, onClick, itemId, onClickCurrentBuy }) => {
    return (
        <div className={clases.card}>
            <img src={headPhones.img} alt="Apple" />
            <section className={clases.containerInfo}>
                <div className={clases.infoProduct}>
                    <h3 className={clases.infoProduct__title}>{headPhones.title}</h3>
                    <span className={clases.infoProduct__price}>{`${headPhones.price}`} &#x20bd;</span>
                </div>
                <div className={clases.buy}>
                    <span className={clases.buy__rate}>{headPhones.rate}</span>
                    <Button className={clases.buy__btn} onClick={() => {
                        onClick(itemId);
                        onClickCurrentBuy();
                    }}>
                        купить
                    </Button>
                </div>
            </section>
        </div>
    );
}

export { Card };
