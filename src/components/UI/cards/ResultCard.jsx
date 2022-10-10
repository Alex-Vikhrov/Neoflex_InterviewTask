import React, { useState } from 'react';
import { Button } from '../button';
import clases from './styles/ResultCard.module.css';
import allHeadPhones from '../../../constants/allCatalog';

const ResultCard = ({ producrts, result, itemId }) => {
    const itID = producrts.find((item) => item);
    const card = allHeadPhones.find((item) => { return item.id === itID });
    const [priceAll, setPriceAll] = useState(0);
    function calcAllPrice(){
        setPriceAll(card.price + priceAll);
    }
    return (
        <div className={clases.order}>
            <div className={clases.order__info}>
                <span className={clases.order__span}>Итого</span>
                <span className={clases.order__span}>&#x20bd; 2200</span>
            </div>
            <Button className={clases.order__btn} onClick={()=> calcAllPrice()}>Перейти к оформлению</Button>
        </div>
    );
}

export { ResultCard };
