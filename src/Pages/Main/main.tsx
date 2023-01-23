import React from 'react';
import './main.scss';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <div className="imgContainer">
        <NavLink to="/disposable">
          <div className="disposableImgBox imgBox">Одноразки</div>
        </NavLink>
        <NavLink to="/vapes">
          <div className="vapesImgBox imgBox">Вейпы</div>
        </NavLink>
        <NavLink to="/juice">
          <div className="juiceImgBox imgBox">Жидкости</div>
        </NavLink>
        <NavLink to="/equipment">
          <div className="equipmentImgBox imgBox">Комплектующие</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
