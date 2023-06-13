import React, { useState } from 'react';

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

    const deletePizza = (index) => {
        const allChoicePizzasWithDeleting = allChoicePizzasLocalStorage.filter((item) => item !== allChoicePizzasLocalStorage[index]);
        localStorage.setItem("allChoicePizzas", JSON.stringify(allChoicePizzasWithDeleting));
        togle();
    };


    return (
        <>
            {allChoicePizzasLocalStorage && allChoicePizzasLocalStorage.length > 0
                ?
                (
                    <ul className={css.list}>
                        {allChoicePizzasLocalStorage.map((item, index) => (
                            <li
                                className={css.listItem}
                                key={item.pizza}
                            >
                                <img
                                    className={css.imagePizza}
                                    alt={"Pizza"}
                                    // src={imagePizza}
                                    src={item.picture}
                                    width="100%"
                                />
                                <div className={css.cardContents}>
                                    <p className={css.namePizza}>"{item.pizza}"</p>
                                    <p className={css.pricePizza}>{item.price * item.quantity} грн.</p>

                                    <div className={css.inputDeleteButtonContainer}>
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
                                        <button
                                            type="button"
                                            className={css.pizzaDeleteButton}
                                            // onClick={toggleModal}
                                            onClick={() => deletePizza(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
                :
                (
                    <div className={css.informationTextContainer}>
                        <div className={css.informationText}
                        >
                            Please, place your pizza order on the shop page make an order
                        </div>
                    </div>
                )
            }
            {allChoicePizzasLocalStorage && allChoicePizzasLocalStorage.length > 0 && (
                <div className={css.shoppingCartPriceSubmitContainer}>
                    <p className={css.totalPriceText}
                    >
                        Total price:
                        <span className={css.totalPriceNumber}> {totalPrice} грн.</span>
                    </p>
                </div>
            )}
        </>
    );
};
