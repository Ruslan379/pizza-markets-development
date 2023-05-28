import React, { useState } from 'react';
import imagePizza from "images/monopizza_pica-dyabola.jpg";

import css from "./ShoppingCartOrder.module.css";


export const ShoppingCartOrder = () => {
    const [value, setValue] = useState(true);
    const togle = () => setValue(!value)

    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    let totalPrice = 0;
    if (allChoicePizzasLocalStorage) {
        totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.price * item.quantity;
            return total;
        }, 0);
    };



    return (
        <>
            {allChoicePizzasLocalStorage && (
                <ul className={css.list}>
                    {allChoicePizzasLocalStorage.map((item, index) => (
                        <li
                            className={css.listItem}
                            key={item.pizza}
                        >
                            <img
                                className={css.imagePizza}
                                alt={imagePizza}
                                src={imagePizza}
                                width="50%"
                            />
                            <div className={css.cardContents}>
                                <p className={css.namePizza}>"{item.pizza}"</p>
                                <p className={css.pricePizza}>{item.price * item.quantity} грн.</p>

                                <div>
                                    <input className={css.inputQuantity}
                                        type="number"
                                        name="quantity"
                                        min="1"
                                        max="100"
                                        defaultValue={item.quantity}
                                        onChange={(evt) => {
                                            togle();
                                            allChoicePizzasLocalStorage[index].quantity = Number(evt.target.value);
                                            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
                                        }}
                                    />

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className={css.shoppingCartPriceSubmitContainer}>
                <p className={css.totalPriceText}
                >
                    Total price:
                    <span className={css.totalPriceNumber}> {totalPrice} грн.</span>
                </p>
            </div>
        </>

    );
};
