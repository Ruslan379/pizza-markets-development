// import {
//     // useState,
//     // useEffect
// } from 'react';

import {
  Route,
  Routes,
  // Link,
  // NavLink,
  // Outlet 
} from 'react-router-dom';

// import { useParams } from "react-router-dom";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFound } from "page/NotFound";
import { Home } from 'components/Home/Home';
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart';
import { History } from 'components/History/History';


import pizzaMarkets from "db/pizzaMarkets.json"; //! json

// import css from './App.module.css';


//------------------------------------------------------------
export const App = () => {

  console.log("pizzaMarkets:", pizzaMarkets);
  // const shops = JSON.parse(pizzaMarkets);
  const markets = pizzaMarkets.map(market => market.shop);
  console.log("markets:", markets);



  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} ></Route>
        <Route path="/history" element={<History/>} ></Route>
      </Route> 
    </Routes>
  
  );
};
