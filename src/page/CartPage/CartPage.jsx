import { CartCustomerDataForm } from 'components/CartCustomerDataForm/CartCustomerDataForm';
import { CartOrderList } from 'components/CartOrderList/CartOrderList';

import css from './CartPage.module.css';


export const CartPage = () => {
    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.сustomerData}>
                <CartCustomerDataForm />
            </div>
            <div className={css.CustomerOrder}>
                <CartOrderList />
            </div>
        </div>
    );
};
