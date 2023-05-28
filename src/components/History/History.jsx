import { NavLink } from 'react-router-dom';
import css from './History.module.css';



export const History = () => {

    let customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));

    if (!customerDataLocalStorage) {
        const customerData = {
            name: "",
            email: "",
            phone: "",
            address: "",
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));
        customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    };


    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    //! Подсчет общей суммы
    let totalPrice = 0;
    let totalPizzas = 0;
    if (allChoicePizzasLocalStorage) {
        totalPizzas = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.quantity;
            return total;
        }, 0);
        totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.price * item.quantity;
            return total;
        }, 0);
    };




    return (
        <div className={css.orderHistoryContainer}>
                <div className={css.historyData}>
                    <p>You Data</p>
                    <br />
                    <p>You Name: {customerDataLocalStorage.name}</p>
                    <p>You Email: {customerDataLocalStorage.email}</p>
                    <p>You Phone: {customerDataLocalStorage.phone}</p>
                    <p>You Address: {customerDataLocalStorage.address}</p>
                </div>
                
                <div className={css.historyOrder}>
                    <p>You Order</p>
                    <br />
                    <p>Pizza varieties: {allChoicePizzasLocalStorage ? allChoicePizzasLocalStorage.length : 0}</p>
                    <p>Total pizzas: {totalPizzas}</p>
                    <p>TOTAL: {totalPrice} грн.</p>
                </div>
            <NavLink className={css.linkButton} to="/cart">Change</NavLink>
        </div>
    );
};
