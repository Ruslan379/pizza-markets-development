// import { useState } from "react";
import { ShoppingCartOrder } from 'components/ShoppingCartOrder/ShoppingCartOrder';
// import { TotalPrice } from 'components/TotalPrice/TotalPrice';
import { CustomerDataForm } from 'components/CustomerDataForm/CustomerDataForm';

import css from './ShoppingCart.module.css';


//------------------------------------------------------
export const ShoppingCart = () => {
    // const togle = () => setValue(!value)
    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("ShoppingCartOrder-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);

    // const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);
    // console.log("ShoppingCart-->allChoicePizzas:", allChoicePizzas);

    // const [totalPrice1, setTotalPrice1] = useState(0);
    // console.log("ShoppingCart-->totalPrice1:", totalPrice1);

    //! Подсчет общей суммы (перенесен в ShoppingCartOrder)
    // let totalPrice = 0;
    // if (allChoicePizzasLocalStorage) {
    //     totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
    //         total = total + item.price * item.quantity;
    //         // setTotalPrice1(total);
    //         return total;
    //     }, 0);
    // };
    // console.log("ShoppingCart-->totalPrice:", totalPrice); //!


    // setAllChoicePizzas([])



    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.shoppingCartTaskContainer}>
                <div className={css.сustomerData}>
                    {/* //* --- Shopping Cart Customer Data ----- */}
                    <CustomerDataForm />
                </div>
                <div className={css.CustomerOrder}>
                    {/* //* --- Shopping Cart Customer Order ----- */}
                    <ShoppingCartOrder />
                </div>
            </div>
            <div className={css.shoppingCartPriceSubmitContainer}>
                {/* <p className={css.totalPriceText}
                    >
                        Total price:
                        <span className={css.totalPriceNumber}> {totalPrice} грн.</span>
                </p> */}
                {/* <TotalPrice totalPrice={totalPrice}/> */}
                {/* <button
                    className={css.submitButton}
                    type="button"
                    // onClick={() => addPizzaToCard(allPizzas[index])}
                    >
                        Submit
                </button> */}
            </div>
        </div>
    );
};
