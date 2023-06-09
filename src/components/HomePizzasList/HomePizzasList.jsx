import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 

// import pictureDefault from "../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"; //!!! 
import pictureDefault from "../../images/free-icon-pizza-512-7467230.png"; //!!! 

import css from "./HomePizzasList.module.css";

// console.log("pizzaMarketsJson:", pizzaMarketsJson); //!

export const HomePizzasList = ({ shopIndex, allPizzas, addPizzaToCart }) => {
    

    // console.log("allPizzas:", allPizzas); //!
    // console.log("pizzaMarketsJson[shopIndex]:", pizzaMarketsJson[shopIndex]); //!

    const imgRelativeURL = pizzaMarketsJson[shopIndex].pizzas[0].defaultPicture
    // console.log("imgRelativeURL:", imgRelativeURL); //!

    const imgSrc = `https://github.com/Ruslan379/pizza-markets-development/blob/main/src/images/PizzasImages/${imgRelativeURL}`;
    // const imgSrc = `https://github.com/Ruslan379/pizza-markets-development/blob/main/src/images/${imgRelativeURL}`;
    console.log("imgSrc:", imgSrc); //!

    const publicURL = process.env.REACT_APP_PUBLIC_URL;
    console.log("publicURL:", publicURL); //!

    const imagePath = process.env.REACT_APP_PUBLIC_URL + 'images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png'; 
    console.log("imagePath:", imagePath); //!


    return (
        <ul className={css.list}>
            {/* {allPizzas.map((item, index) => ( */}
            {allPizzas.map(({ pizza, picture = pictureDefault, price }, index) => {
                console.log("picture:", picture); //!
                return <li
                            className={css.listItem}
                            // key={item.pizza}
                            key={pizza}
                        >
                            <img
                                className={css.imagePizza}
                                alt={"Pizza"}
                                // src={imagePizza}
                                // src={item.picture}
                                // src={picture}
                                // src={pictureDefault}
                                // src={picture || pictureDefault}
                                // src={picture || pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}

                                // src="../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"
                                // src="https://pizzamexico.com.ua/wp-content/uploads/2020/02/4seasons.png"
                                // src={pizzaMarketsJson[shopIndex].pizzas[index].picture}
                                // src={pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}
                                src={process.env.REACT_APP_PUBLIC_URL + 'images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png'}
                                // src={imagePath}
                                // src={imgSrc}
                                width="100%"
                            />
                            <p className={css.namePizza}
                            >
                                {/* "{item.pizza}" */}
                                "{pizza}"
                                <span className={css.pricePizza}>
                                    {/* {item.price} грн. */}
                                    {price} грн.
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
                })}
        </ul>
    );
};
