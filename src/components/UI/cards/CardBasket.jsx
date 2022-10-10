import React, { useState } from 'react';
import { Button } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import clases from './styles/CardBasket.module.css';
import allHeadPhones from '../../../constants/allCatalog';

const CardBasket = ({ onClick, itemId }) => {
    const card = allHeadPhones.find((item) => item.id === itemId);
    const [count, setCount] = useState(1);
    const [priceCard, setPriceCard] = useState(card.price);

    const onClickPlusProduct = () => {
        setCount(count + 1);
    }
    const onClickMinusProduct = () => {
        if (count === 0) {
            setCount(count = 0);
        }
        setCount(count - 1);
    }
    const calcSumPrice = () => {
        setPriceCard(priceCard + card.price);
    }
    const calcMinusPrice = () => {
        if(priceCard === 0){
            setPriceCard(priceCard = 0)
        }
        setPriceCard(priceCard - card.price);
    }


    return (
        <div className={clases.card}>
            <div className={clases.imgContainer}>
                <img className={clases.imgContainer__basketImg} src={card.img} alt="Apple" />
                <div className={clases.buttonContainer}>
                    <Button className={clases.buttonContainer__btn} onClick={() => {
                        onClickMinusProduct();
                        calcMinusPrice();
                    }}>
                        <FontAwesomeIcon className={`${clases.fa} ${clases.fa__faMinus}`} icon={faMinus} />
                    </Button>
                    <span className={clases.buttonContainer__count}>{count}</span>
                    <Button className={clases.buttonContainer__btn} onClick={() => {
                        onClickPlusProduct();
                        calcSumPrice();
                    }}>
                        <FontAwesomeIcon className={`${clases.fa} ${clases.fa__faPlus}`} icon={faPlus} />
                    </Button>
                </div>
            </div>
            <div className={clases.infoProduct}>
                <h3 className={clases.infoProduct__title}>{card.title}</h3>
                <span className={clases.infoProduct__price}>{`${card.price}`} &#x20bd;</span>
            </div>
            <div className={clases.asideContainer}>
                <Button className={clases.asideContainer__btn} onClick={onClick}>
                    <FontAwesomeIcon className={`${clases.fa__faTrashCan}`} icon={faTrashCan} />
                </Button>
                <span className={clases.asideContainer__price}>{`${priceCard}`} &#x20bd;</span>
            </div>
        </div>
    );
}

export { CardBasket };
