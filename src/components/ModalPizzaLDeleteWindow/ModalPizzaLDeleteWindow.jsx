// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { deleteTransaction } from 'redux/transaction/transactionOperations.js';
// import { selectLoadingTransactions } from 'redux/transaction/transactionSelectors.js';
// import { Loader } from 'components/Loader/Loader';

import css from './ModalPizzaLDeleteWindow.module.css';

//------------------------------------------------------------------------------------------------------------------
export const ModalPizzaLDeleteWindow = ({ deletePizzaIndex, toggleModal }) => {
    console.log("ModalPizzaLDeleteWindow --> deletePizzaIndex:", deletePizzaIndex); //!
    // const dispatch = useDispatch();

    // const isLoading = useSelector(selectLoadingTransactions);
    // console.log("ModalTransactionLDeleteWindow ==> isLoading:", isLoading); //!

    // const handleDelete = () => {
    //     dispatch(deleteTransaction(id)); //!!!!!
    //     toggleModal();
    // };

    //! NEW
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("ModalPizzaLDeleteWindow --> allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage); //!
    
    //! NEW
    const deletePizza = (index) => {
        const allChoicePizzasWithDeleting = allChoicePizzasLocalStorage.filter((item) => item !== allChoicePizzasLocalStorage[index]);
        localStorage.setItem("allChoicePizzas", JSON.stringify(allChoicePizzasWithDeleting));
        toggleModal();
    };



    return (
        <>
            {/* {isLoading && <Loader />} */}

            <div className={css.modalWindow}>
                <p className={css.modalTitle}
                >
                    {/* Are you sure? */}
                    Delete pizza
                </p>
                <p className={`${css.modalTitle} ${css.modalTitlePizza}`}
                >
                    "{allChoicePizzasLocalStorage[deletePizzaIndex].pizza}" <span className={css.questionMark}>?</span>
                </p>
                <button
                    // className={css.modalBtnYes}
                    className={`${css.modalBtn} ${css.modalBtnYes}`}
                    type='button'
                    // onClick={handleDelete}
                    onClick={() => deletePizza(deletePizzaIndex)}
                >
                    YES
                </button>
                <button
                    // className={css.modalBtnNo}
                    className={`${css.modalBtn} ${css.modalBtnNo}`}
                    type='button'
                    onClick={toggleModal}
                >
                    NO
                </button>
            </div>
        </>
    );
}

ModalPizzaLDeleteWindow.propTypes = {
    deletePizzaIndex: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
};


