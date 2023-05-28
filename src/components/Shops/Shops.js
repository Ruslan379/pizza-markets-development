import css from "./Shops.module.css";

export const Shops = ({ pizzaMarkets, selectShop }) => {
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
