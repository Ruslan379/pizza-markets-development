import { useState, useEffect } from 'react';

import pictureDefault from "../../images/free-icon-pizza-512-7467230.png"; //!!! 
import pictureDefault1 from "../../images/PizzasImages/02-05.MonoPizza_DYABOLA.webp"; //!-----------------------


import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 

import css from "./HomePizzasList.module.css";



export const HomePizzasList = ({ allPizzas, addPizzaToCart, shopIndex }) => {
    
    // console.log("pizzaMarketsJson:", pizzaMarketsJson); //!

    // const imgRelativeURL = pizzaMarketsJson[shopIndex].pizzas[1].defaultImageURL
    // console.log("imgRelativeURL:", imgRelativeURL); //!
    
    // const defaultImageBase64Json = pizzaMarketsJson[shopIndex].pizzas[1].defaultImage
    // console.log("defaultImageBase64Json:", defaultImageBase64Json); //!

    //todo Not Work 
    // const imgSrc = `https://github.com/Ruslan379/pizza-markets-development/blob/main/src/images/PizzasImages/${imgRelativeURL}`;
    // const imgSrc = `https://github.com/Ruslan379/pizza-markets-development/blob/main/src/images/${imgRelativeURL}`;
    // console.log("imgSrc:", imgSrc); //!

    //todo Not Work = Delete
    // const publicURL = process.env.REACT_APP_PUBLIC_URL;
    // console.log("publicURL:", publicURL); //!

    // const imagePath = process.env.REACT_APP_PUBLIC_URL + 'images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png'; 
    // console.log("imagePath:", imagePath); //!

    
    //!----------------------------- Преобразование defaultImage в Base64: ----------------------------
    const [defaultImageBase64, setDefaultImageBase64] = useState('');
    
    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await fetch(pictureDefault1);
                // const response = await fetch("../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"); //! так не работает
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    setDefaultImageBase64(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.log('Error loading image:', error);
            }
        };
        loadImage();
    }, []);

    // console.log("defaultImageBase64:", defaultImageBase64); //!

    const jsonFile = {
        imageDef: defaultImageBase64
    };
    console.log("jsonFile.imageDef:", jsonFile.imageDef); //!

    // console.log("defaultImageBase64Json:", defaultImageBase64Json); //!
    //!__________________________ Преобразование defaultImage в Base64: __________________________


    return (
        <ul className={css.list}>
            {/* {allPizzas.map((item, index) => ( */}
            {allPizzas.map(({ pizza, picture = pictureDefault, price }, index) => {
                const defaultImageBase64Json = pizzaMarketsJson[shopIndex].pizzas[index].defaultImage
                // console.log("defaultImageBase64Json:", defaultImageBase64Json); //!
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
                                //* Рабочий вариант1:
                                // src={picture || pictureDefault}
                                //* Рабочий вариант2:
                                // src={picture || defaultImageBase64}
                                //* Рабочий вариант 3:
                                // src={picture || jsonFile.imageDef}
                                //* ОКОНЧАТЕЛЬНЫЙ Рабочий вариант 5:
                                src={picture || defaultImageBase64Json}

                                // src={picture || pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}
                                // src="../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"
                                // src="https://pizzamexico.com.ua/wp-content/uploads/2020/02/4seasons.png"
                                // src={pizzaMarketsJson[shopIndex].pizzas[index].picture}
                                // src={pizzaMarketsJson[shopIndex].pizzas[index].defaultPicture}
                                // src={process.env.REACT_APP_PUBLIC_URL + 'images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png'}
                                // src={imagePath}
                                // src={imgSrc}
                                // src="VremenaGoda.png"
                                // src="src/images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"
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
                                onClick={() => addPizzaToCart(allPizzas[index], index)}
                            >
                                add to Cart
                            </button>
                        </li>
            })}
        </ul>
    );
};
