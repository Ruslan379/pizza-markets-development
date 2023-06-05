import React, { useState } from 'react';

import css from "./ShoppingCartOrder.module.css";


export const ShoppingCartOrder = () => {
    const [value, setValue] = useState(true);
    const togle = () => setValue(!value);

    //! Тест кнопок Decrement и Increment
    // const [value1, setValue1] = useState(0);
    // const handleDecrement = () => {
    //     setValue1(value1 - 1);
    // };
    // const handleIncrement = () => {
    //     setValue1(value1 + 1);
    // };


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
                                        <div className={css.inputContainer}>
                                            <button
                                                className="decrementButton"
                                                // onClick={handleDecrement}
                                                onClick={() => {
                                                    let changeItemQuantity = item.quantity - 1;
                                                    if (changeItemQuantity < 1) changeItemQuantity = 1; //! VBYBVFKMYJT значение quantity
                                                    allChoicePizzasLocalStorage[index].quantity = changeItemQuantity;
                                                    localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
                                                    togle();
                                                }}
                                            >
                                                -
                                            </button>
                                            <input className={css.inputQuantity}
                                                type="text"
                                                name="quantity"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button
                                                className="incrementButton"
                                                // onClick={handleIncrement}
                                                onClick={() => {
                                                    let changeItemQuantity = item.quantity + 1;
                                                    if (changeItemQuantity > 50) changeItemQuantity = 50; //! МАКСИМАЛЬНОЕ значение quantity
                                                    allChoicePizzasLocalStorage[index].quantity = changeItemQuantity;
                                                    localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
                                                    togle();
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* //! OLD вариант инпута */}
                                        {/* <input className={css.inputQuantity}
                                            type="number"
                                            name="quantity"
                                            min="1"
                                            max="100"
                                            defaultValue={item.quantity}
                                            onChange={(evt) => {
                                                console.log(evt.target.value);
                                                togle();
                                                allChoicePizzasLocalStorage[index].quantity = Number(evt.target.value);
                                                localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
                                            }}
                                        /> */}

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
