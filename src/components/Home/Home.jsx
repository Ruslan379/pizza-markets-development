import { useState } from "react"; 
import { useSelector } from "react-redux"; 

import { toast } from 'react-toastify';

import { selectLoadingMarkets, selectAllMarkets } from 'redux/market/marketSelectors';

// import pizzaMarkets from "db/pizzaMarkets.json"; //!!! Уже не надо

import { Shops } from 'components/Shops/Shops';
import { Pizzas } from 'components/Pizzas/Pizzas';

import { Loader } from 'components/Loader/Loader.jsx';

import imageBackgroundPizza from "images/A48382B1BEBB8CBDB0-large.webp";

import css from './Home.module.css';


export const Home = () => {
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    const [allPizzas, setAllPizzas] = useState([]);
    const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);

    const isLoading = useSelector(selectLoadingMarkets);
    const pizzaMarkets = useSelector(selectAllMarkets);
    const selectShop = id => {
        const [selectShopPizzas] = pizzaMarkets.filter(pizzaMarket => pizzaMarket._id === id);
        setAllPizzas(selectShopPizzas.pizzas);
    };

    const addPizzaToCart = pizza => {
        const findIndexPizza = allChoicePizzas.findIndex(item => item.pizza === pizza.pizza);
        if (findIndexPizza === -1) {
            const pizzaAndQuantity = {
            ...pizza,
            quantity: 1
            };
            setAllChoicePizzas([...allChoicePizzas, pizzaAndQuantity]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas, pizzaAndQuantity]));
            toast.success(`Pizza "${pizza.pizza}" has been added to your cart`, { theme: "colored", position: "top-center", autoClose: 2000 });
        } else {
            allChoicePizzas.map((item, index) => {
                if (index === findIndexPizza) item.quantity = item.quantity + 1;
                return allChoicePizzas
            });
            setAllChoicePizzas([...allChoicePizzas]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas]));
            toast.info(`You have added ${allChoicePizzas[findIndexPizza].quantity} pizzas "${pizza.pizza}" to your cart!`, { theme: "colored", position: "top-center", autoClose: 2000 });
        }
    }


    return (
        <div className={css.homeContainer}>
            <div className={css.shops}>
                <>
                    {isLoading
                        ?
                        (
                            <div className={css.informationTextContainer}>
                                <div className={css.informationText}
                                >
                                    Please wait, our shops are loading......
                                    <Loader />
                                </div>
                            </div>
                        )
                        :
                        (
                            <Shops selectShop={selectShop}/>
                        )
                    }
                </>
            </div>
            <div className={css.pizzas}>
                {allPizzas.length > 0
                    ?
                    (
                        <Pizzas
                        allPizzas={allPizzas}
                        addPizzaToCart={addPizzaToCart}
                        />
                    )
                    :
                    (
                        <div className={css.imagePizzaContainer}>
                            <img
                                className={css.imageBackgroundPizza}
                                alt={"Background Pizza"}
                                src={imageBackgroundPizza}
                                width="100%"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};
