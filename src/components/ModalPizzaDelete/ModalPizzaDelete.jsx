import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import css from './ModalPizzaDelete.module.css' 




const modalRoot = document.querySelector('#modal-root');


export function ModalPizzaDelete({ children, onClose }) {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]); 


  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };



    return createPortal(
      <div
        className={css.Overlay1}
        onClick={handleBackdropClick}
      >
          <div className={css.Modal}>
          {children}
          </div>
      </div>,
      modalRoot,
    );
  }


// ModalTransactionLDelete.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

