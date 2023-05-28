import React, { useState } from 'react';
import imagePizza from "images/monopizza_pica-dyabola.jpg";
// import { TotalPrice } from 'components/TotalPrice/TotalPrice';


import css from "./ShoppingCartOrder.module.css";


//------------------------------------------------------
export const ShoppingCartOrder = () => {
    const [value, setValue] = useState(true);
    const togle = () => setValue(!value)

    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("ShoppingCartOrder-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);

    //! Подсчет общей суммы
    let totalPrice = 0;
    if (allChoicePizzasLocalStorage) {
        totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.price * item.quantity;
            // setTotalPrice1(total);
            return total;
        }, 0);
    };
    console.log("ShoppingCart-->totalPrice:", totalPrice); //!


    //! ------------------ ИИ
    // import React, { useState } from 'react';

    // function NumberInput() {
    //     const [value, setValue] = useState(0);

    //     const handleIncrement = () => {
    //         setValue(value + 1);
    //     };

    //     const handleDecrement = () => {
    //         setValue(value - 1);
    //     };

    //     return (
    //         <div>
    //             <input type="number" value={value} readOnly />
    //             <button onClick={handleIncrement}>Увеличить</button>
    //             <button onClick={handleDecrement}>Уменьшить</button>
    //         </div>
    //     );
    // }

    // export default NumberInput;
    //! ------------------ ИИ


    // const handleChange = evt => {
    //     // this.setState({ inputValue: evt.target.value });
    //     console.log("inputValue:", evt.target.value);
    // };

    // const handleIncrement = (allChoicePizzasLocalStorageIndex) => {
    //     console.log("ShoppingCartOrder_Increment-->allChoicePizzasLocalStorageIndex:", allChoicePizzasLocalStorageIndex);
    //     // setValue(value + 1);
    // };

    // const handleDecrement = (allChoicePizzasLocalStorageIndex) => {
    //     console.log("ShoppingCartOrder_Decrement-->allChoicePizzasLocalStorageIndex:", allChoicePizzasLocalStorageIndex);
    //     // setValue(value - 1);
    // };

    //! так не работает
    // const onChangeQuantity = (evt, index) => {
    //     console.log("inputValue:", evt.target.value);
    //     console.log("index:", index);
    //     togle();
    //     // allChoicePizzasLocalStorage[index].quantity = allChoicePizzasLocalStorage[index].quantity + 1; //! на кнопку
    //     allChoicePizzasLocalStorage[index].quantity = evt.target.value;
    //     localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
    // }





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
                                        // value={item.quantity}
                                        defaultValue={item.quantity}

                                        onChange={(evt) => {
                                            console.log("inputValue:", evt.target.value);
                                            console.log("index:", index);
                                            togle()
                                            // allChoicePizzasLocalStorage[index].quantity = allChoicePizzasLocalStorage[index].quantity + 1; //! на кнопку
                                            allChoicePizzasLocalStorage[index].quantity = Number(evt.target.value);
                                            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzasLocalStorage]));
                                        }}
                                    // onChange={() => onChangeQuantity(_, index)} //! так не работает
                                    />
                                    {/* <button
                                        onClick={() => handleIncrement(allChoicePizzasLocalStorage[index])}
                                    >
                                        Увеличить
                                    </button> */}
                                    {/* <button
                                        onClick={() => handleDecrement(allChoicePizzasLocalStorage[index])}
                                    >
                                        Уменьшить
                                    </button> */}
                                </div>

                                {/* <button
                                    className={css.increaseButton}
                                    type="button"
                                // onClick={() => addPizzaToCard(allChoicePizzasLocalStorage[index])}
                                >
                                    Increase ^
                                </button> */}

                                {/* <button
                                    className={css.decreaseButton}
                                    type="button"
                                // onClick={() => addPizzaToCard(allChoicePizzasLocalStorage[index])}
                                >
                                    Decrease .
                                </button> */}
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
