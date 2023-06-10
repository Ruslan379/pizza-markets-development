import { useState } from "react"; 
import { useSelector } from "react-redux";

import { selectAllMarkets } from 'redux/market/marketSelectors';

import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 

import css from "./HomeShopsList.module.css";




export const HomeShopsList = ({ selectShop }) => {
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    const conditionallChoicePizzasLocalStorage = !(!allChoicePizzasLocalStorage || !(allChoicePizzasLocalStorage.length > 0));
    console.log("conditionallChoicePizzasLocalStorage:", conditionallChoicePizzasLocalStorage); //!

    let pizzaMarkets = useSelector(selectAllMarkets);
    if (pizzaMarkets.length === 0) pizzaMarkets = [...pizzaMarketsJson]

    const [shopIndexSelection, setShopIndexSelection] = useState(null);

    console.log("shopIndexSelection:", shopIndexSelection); //!

    return (
        <>
            <p className={css.headerShops}>Shops:</p>
            <ul className={css.list}>
                {pizzaMarkets.map((pizzaMarket, index) => (
                    <li
                        className={css.listItem}
                        key={pizzaMarket._id}
                    >
                        <button
                            // className={css.selectShopButton}
                            // className={
                            //     `${(shopIndexSelection === null || index === shopIndexSelection)
                            //         ?
                            //         `${css.selectShopButton}`
                            //         :
                            //         `${css.selectShopButton} ${css.selectShopButtonOpacity}`
                            //     }`
                            // }

                            // className={!conditionallChoicePizzasLocalStorage && (`${css.selectShopButton}`) conditionallChoicePizzasLocalStorage 
                            //     && (`${css.selectShopButton} ${css.selectShopButtonOpacity}`}
                            
                            // className={!conditionallChoicePizzasLocalStorage && css.selectShopButton}

                            className={
                                `
                                    ${(shopIndexSelection === null || index === shopIndexSelection)
                                        ?
                                        `${css.selectShopButton}`
                                        :
                                        `${css.selectShopButton} ${css.selectShopButtonOpacity}`
                                    }
                                `
                            }
                            type="button"
                            onClick={() => {
                                selectShop(pizzaMarket._id, index);
                                setShopIndexSelection(index);
                                console.log("index:", index); //!
                            }}
                            // disabled={!(shopIndexSelection === null || index === shopIndexSelection)}
                            // disabled={conditionallChoicePizzasLocalStorage}
                            disabled={conditionallChoicePizzasLocalStorage && !(shopIndexSelection === null || index === shopIndexSelection)}
                        >
                            {pizzaMarket.shop}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
