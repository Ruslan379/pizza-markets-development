import {
  NavLink,
  Outlet 
} from 'react-router-dom';

import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <nav className={css.navFlex}>
        <NavLink className={css.navLink} to="/">Shop</NavLink>
        <NavLink className={css.navLink} to="/cart">Shopping Cart</NavLink>
        <NavLink className={css.navLink} to="/history">Order History</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
