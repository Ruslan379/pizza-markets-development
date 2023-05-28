import { useNavigate } from "react-router-dom";

import css from './CustomerDataForm.module.css';



export const CustomerDataForm = () => {
    const navigate = useNavigate();
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

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const customerData = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            address: form.elements.address.value,
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));
        form.reset();
        navigate("/history", { replace: true });
    };




    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}
            >
                <label className={css.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder={customerDataLocalStorage.name ? customerDataLocalStorage.name : "Input you Name"}
                        defaultValue={customerDataLocalStorage.name}
                    />
                </label>
                <label className={css.label}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder={customerDataLocalStorage.email ? customerDataLocalStorage.email : "Input you Email"}
                        defaultValue={customerDataLocalStorage.email}
                    />
                </label>
                <label className={css.label}>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        placeholder={customerDataLocalStorage.phone ? customerDataLocalStorage.phone : "Input you Phone"}
                        defaultValue={customerDataLocalStorage.phone}
                    />
                </label>
                <label className={css.label}>
                    Address:
                    <input
                        type="text"
                        name="address"
                        placeholder={customerDataLocalStorage.address ? customerDataLocalStorage.address : "Input you Address"}
                        defaultValue={customerDataLocalStorage.address}
                    />
                </label>
                <button className={css.submitButtonForm} type="submit">SUBMIT</button>
            </form>

        </>
    );
};
