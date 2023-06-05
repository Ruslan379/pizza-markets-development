import css from "./Pizzas.module.css";



export const Pizzas = ({ allPizzas, addPizzaToCart }) => {
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
                        src={item.picture}
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
                        add to Card
                    </button>
                </li>
            ))}
        </ul>
    );
};
