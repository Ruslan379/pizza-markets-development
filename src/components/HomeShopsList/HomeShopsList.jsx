import { useState } from "react"; 
import { useSelector } from "react-redux";

import { selectAllMarkets } from 'redux/market/marketSelectors';

import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 

import css from "./HomeShopsList.module.css";




export const HomeShopsList = ({ selectShop }) => {
    const [shopIndexSelection, setShopIndexSelection] = useState(null);
    console.log("shopIndexSelection:", shopIndexSelection); //!

    // console.log("HomeShopsList-->shopIndex:", shopIndex); //!

    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    // const conditionallChoicePizzasLocalStorage = !(!allChoicePizzasLocalStorage || !(allChoicePizzasLocalStorage.length > 0)); //! 1-й вариант
    const conditionallChoicePizzasLocalStorage = !!allChoicePizzasLocalStorage && allChoicePizzasLocalStorage.length > 0; //! 2-й вариант
    console.log("conditionallChoicePizzasLocalStorage:", conditionallChoicePizzasLocalStorage); //!

    let pizzaMarkets = useSelector(selectAllMarkets);
    if (pizzaMarkets.length === 0) pizzaMarkets = [...pizzaMarketsJson]


    console.log("HomeShopsList-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage); //!
    // if (allChoicePizzasLocalStorage && allChoicePizzasLocalStorage.length > 0) 

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
                                    ${(conditionallChoicePizzasLocalStorage && !(shopIndexSelection === null || index === shopIndexSelection))
                                        ?
                                        `${css.selectShopButton} ${css.selectOnlyOneShopButtonOpacity}`
                                        :
                                        ``
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
                            disabled={
                                conditionallChoicePizzasLocalStorage &&
                                allChoicePizzasLocalStorage[0].shopIndex === index &&
                                !(shopIndexSelection === null || index === shopIndexSelection)
                            }
                        >
                            {pizzaMarket.shop}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
