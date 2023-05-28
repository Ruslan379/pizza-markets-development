
import imagePizza from "images/monopizza_pica-dyabola.jpg";


import css from "./Pizzas.module.css";



//------------------------------------------------------
export const Pizzas = ({ allPizzas, addPizzaToCard }) => {


    return (
        <ul className={css.list}>
            {allPizzas.map((item, index) => (
                <li
                    className={css.listItem}
                    key={item.pizza}
                >
                    <img
                        className={css.imagePizza}
                        alt={imagePizza}
                        src={imagePizza}
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
                        onClick={() => addPizzaToCard(allPizzas[index])}
                    >
                        add to Card
                    </button>
                </li>
            ))}
        </ul>
    );
};
