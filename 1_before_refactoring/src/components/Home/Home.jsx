import { useState } from "react";

import pizzaMarkets from "db/pizzaMarkets.json";

import { Shops } from 'components/Shops/Shops';
import { Pizzas } from 'components/Pizzas/Pizzas';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("Home-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);


    const [allPizzas, setaAlPizzas] = useState([]);
    const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);
    console.log("Home-->allChoicePizzas:", allChoicePizzas);

    console.log("Home-->pizzaMarkets:", pizzaMarkets);

    //! Выбор магазина
    const selectShop = id => {
        const [selectShopPizzas] = pizzaMarkets.filter(pizzaMarket => pizzaMarket.id === id);
        console.log("Home-->id:", id); //!
        console.log("Home-->selectShopPizzas:", selectShopPizzas); //!


        console.log("Home-->allPizzas:", selectShopPizzas.pizzas); //!
        setaAlPizzas(selectShopPizzas.pizzas);

        //!
        // selectShopPizzas.pizzas.map(item => {
        //     return console.log(`Pizza:${item.pizza}, Price=${item.price}`); //!
        // })
    };

    //! Добаление пиццы в заказ
    const addPizzaToCard = pizza => {
        console.log("Home-->-->pizza:", pizza);

        //! Проверка на добавление имеющейся пиццы
        const findIndexPizza = allChoicePizzas.findIndex(item => item.pizza === pizza.pizza);
        console.log("addPizzaToCard-->findIndexPizza:", findIndexPizza);

        if (findIndexPizza === -1) {
            const pizzaAndQuantity = {
            ...pizza,
            quantity: 1
            };
            console.log("addPizzaToCard-->pizzaAndQuantity:", pizzaAndQuantity); //!
            setAllChoicePizzas([...allChoicePizzas, pizzaAndQuantity]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas, pizzaAndQuantity]));
        } else {
            //todo ----------------------------
            // const newAllChoicePizzas = allChoicePizzas.map((item, index) => {
            //     if (index === findIndexPizza) {
            //         console.log("Надо добавить + 1"); //!
            //         console.log("addPizzaToCard-->item.quantity :", item.quantity); //!
            //         item.quantity = item.quantity + 1;
            //         console.log("addPizzaToCard-->NEW item.quantity :", item.quantity); //!
            //     } 
            // console.log("addPizzaToCard-->allChoicePizzas :", allChoicePizzas); //!
            // return allChoicePizzas
            // });
            // console.log("addPizzaToCard-->allChoicePizzas :", allChoicePizzas); //!
            // console.log("addPizzaToCard-->newAllChoicePizzas :", newAllChoicePizzas); //!
            // setAllChoicePizzas([...allChoicePizzas]);
            // localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas]));
            //todo _______________________________
            
            allChoicePizzas.map((item, index) => {
                if (index === findIndexPizza) item.quantity = item.quantity + 1;
                return allChoicePizzas
            });
            
            console.log("addPizzaToCard-->allChoicePizzas :", allChoicePizzas); //!
            setAllChoicePizzas([...allChoicePizzas]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas]));
        }
    }


    console.log("Home-->allPizzas:", allPizzas); //!
    console.log("Home-->allChoicePizzas:", allChoicePizzas); //!

    return (
        <div className={css.homeContainer}>
            <div className={css.shops}>
                {/* Shops Component */}
                <Shops
                    pizzaMarkets={pizzaMarkets}
                    selectShop={selectShop}
                />
            </div>
            <div className={css.pizzas}>
                {/* Pizzas Component */}
                <Pizzas
                    allPizzas={allPizzas}
                    addPizzaToCard={addPizzaToCard}
                />
            </div>
        </div>
    );
};
