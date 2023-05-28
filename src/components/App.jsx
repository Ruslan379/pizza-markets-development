import {
  Route,
  Routes,
} from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFound } from "page/NotFound";
import { Home } from 'components/Home/Home';
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart';
import { History } from 'components/History/History';


export const App = () => {

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
