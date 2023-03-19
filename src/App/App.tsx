import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Cart from '../Pages/Cart/cart';
import Products from '../Pages/Products/Products';
import Main from '../Pages/Main/main';
import PageNotFound from '../Pages/PageNotFound/pageNotFound';
import store from '../store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="wrapper">
          <div className="headerBox"><Header /></div>
          <div className="contentBox">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <div className="footerBox"><Footer /></div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
