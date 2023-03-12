import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Cart from '../Pages/Cart/cart';
import Disposable from '../Pages/Disposable/disposable';
import Equipment from '../Pages/Equipment/equipment';
import Juice from '../Pages/Juice/juice';
import Main from '../Pages/Main/main';
import PageNotFound from '../Pages/PageNotFound/pageNotFound';
import Vapes from '../Pages/Vapes/vapes';
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
              <Route path="/disposable" element={<Disposable />} />
              <Route path="/vapes" element={<Vapes />} />
              <Route path="/juice" element={<Juice />} />
              <Route path="/equipment" element={<Equipment />} />
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
