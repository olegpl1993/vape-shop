import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../Footer/footer';
import Header from '../../Header/header';
import Main from '../../Pages/Main/main';
import Other from '../../Pages/Other/other';

export default function RootRouter() {
  return (
    <div className="wrapper">
      <div className="headerBox"><Header /></div>
      <div className="contentBox">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
      <div className="footerBox"><Footer /></div>
    </div>
  );
}
