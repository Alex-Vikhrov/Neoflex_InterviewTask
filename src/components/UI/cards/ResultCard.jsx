import React from 'react';
import { Button } from '../button';
import clases from './styles/ResultCard.module.css';

const ResultCard = ({ resultSum }) => {
    return (
        <div className={clases.order}>
            <div className={clases.order__info}>
                <span className={clases.order__span}>Итого</span>
                <span className={clases.order__span}>&#x20bd; {resultSum}</span>
            </div>
            <Button className={clases.order__btn}>Перейти к оформлению</Button>
        </div>
    );
}

export { ResultCard };
