// import pizzaMarkets from "db/pizzaMarkets.json";


import css from "./Shops.module.css";



//------------------------------------------------------
export const Shops = ({ pizzaMarkets, selectShop }) => {
    console.log("Shops-->pizzaMarkets:", pizzaMarkets);

    // const selectShop = id => {
    //     const [selectShopPizzas] = pizzaMarkets.filter(pizzaMarket => pizzaMarket.id === id);
    //     console.log("id:", id);
    //     console.log("selectShopPizzas:", selectShopPizzas);

    //     // const allPizzas = selectShopPizzas.pizzas;
    //     console.log("allPizzas:", selectShopPizzas.pizzas);

    //     selectShopPizzas.pizzas.map(item => {
    //         return console.log(`Pizza:${item.pizza}, Price=${item.price}`);
    //     })
    // };


    return (
        <>
            <p className={css.headerShops}>Shops:</p>
            <ul className={css.list}>
                {pizzaMarkets.map(pizzaMarket => (
                    <li
                        className={css.listItem}
                        key={pizzaMarket.id}
                    >
                        <button
                            className={css.selectShopButton}
                            type="button"
                            onClick={() => selectShop(pizzaMarket.id)}
                        >
                            {pizzaMarket.shop}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
