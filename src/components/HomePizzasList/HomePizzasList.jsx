import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 
// import pictureDefault from "../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"; //!!! 

import css from "./HomePizzasList.module.css";

// console.log("pizzaMarketsJson:", pizzaMarketsJson); //!

export const HomePizzasList = ({ shopIndex, allPizzas, addPizzaToCart }) => {
    

    // console.log("allPizzas:", allPizzas); //!
    // console.log("pizzaMarketsJson[shopIndex]:", pizzaMarketsJson[shopIndex]); //!

    const imgRelativeURL = pizzaMarketsJson[shopIndex].pizzas[0].defaultPicture
    console.log("imgRelativeURL:", imgRelativeURL); //!

    const imgSrc = `https://github.com/Ruslan379/pizza-markets-development/blob/main/src/images/PizzasImages/${imgRelativeURL}`;
    console.log("imgSrc:", imgSrc); //!

    return (
        <ul className={css.list}>
            {allPizzas.map((item, index) => (
                <li
                    className={css.listItem}
                    key={item.pizza}
                >
                    <img
                        className={css.imagePizza}
                        alt={"Pizza"}
                        // src={imagePizza}
                        // src={item.picture}
                        // src={item.picture || pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}
                        
                        // src={pictureDefault}
                        // src="../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"
                        // src="https://pizzamexico.com.ua/wp-content/uploads/2020/02/4seasons.png"
                        // src={pizzaMarketsJson[shopIndex].pizzas[index].picture}
                        // src={pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}
                        // src={process.env.PUBLIC_URL + '/images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png'}
                        src={imgSrc}
                        width="100%"
                    />
                    <p className={css.namePizza}
                    >
                        "{item.pizza}"
                        <span className={css.pricePizza}>
                            {item.price} грн.
                        </span>
                    </p>
                    <button
                        className={css.selectPizzaButton}
                        type="button"
                        onClick={() => addPizzaToCart(allPizzas[index])}
                    >
                        add to Cart
                    </button>
                </li>
            ))}
        </ul>
    );
};
