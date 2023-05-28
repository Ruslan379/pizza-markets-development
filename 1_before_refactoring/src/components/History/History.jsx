import { NavLink } from 'react-router-dom';
import css from './History.module.css';


//------------------------------------------------------
export const History = () => {
    //! Чтение массива объектов с данными заказчика --> customerDataLocalStorage
    let customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    console.log("History-->customerDataLocalStorage:", customerDataLocalStorage);

    if (!customerDataLocalStorage) {
        const customerData = {
            name: "",
            email: "",
            phone: "",
            address: "",
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));
        console.log("History-->IF:", customerData); //!
        customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    };


    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("History-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);

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
    console.log("History-->totalPizzas:", totalPizzas); //!
    console.log("History-->totalPrice:", totalPrice); //!
    



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
            {/* //* --- Кнопка Переход на страницу Shopping Cart: ----- */}
            <NavLink className={css.linkButton} to="/cart">Change</NavLink>
        </div>
    );
};
