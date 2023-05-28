

import css from './TotalPrice.module.css';


//------------------------------------------------------
export const TotalPrice = ({totalPrice}) => {
    return (
            <p className={css.totalPriceText}
                >
                    Total price:
                    <span className={css.totalPriceNumber}> {totalPrice} грн.</span>
            </p>

    );
};
