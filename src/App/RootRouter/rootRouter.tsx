import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../Footer/footer';
import Header from '../../Header/header';
import Main from '../../Pages/Main/main';
import Cart from '../../Pages/Cart/cart';
import Disposable from '../../Pages/Disposable/disposable';
import Vapes from '../../Pages/Vapes/vapes';
import Juice from '../../Pages/Juice/juice';
import Equipment from '../../Pages/Equipment/equipment';
import PageNotFound from '../../Pages/PageNotFound/pageNotFound';

export default function RootRouter() {
  const [cartState, setPosts] = useState([
    { id: 2, number: 1 },
    { id: 3, number: 2 },
    { id: 7, number: 1 },
  ]);
  // калбек добавляет Product в cartState
  const addProductToCart = (idProd: number) => {
    setPosts([...cartState, { id: idProd, number: 1 }]);
  };
  console.log(cartState);
  return (
    <div className="wrapper">
      <div className="headerBox"><Header cartState={cartState} /></div>
      <div className="contentBox">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/disposable" element={<Disposable addProductToCart={addProductToCart} />} />
          <Route path="/vapes" element={<Vapes />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/cart" element={<Cart cartState={cartState} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="footerBox"><Footer /></div>
    </div>
  );
}
