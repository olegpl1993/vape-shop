import React from 'react';
import './main.scss';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hook';
import { changeCategory } from '../../store/categorySlice';

function Main() {
  const dispatch = useAppDispatch();
  const changeCategoryState = async (str: string) => {
    dispatch(changeCategory(str));
  };
  return (
    <div className="main">
      <div className="imgContainer">
        <NavLink
          to="/products"
          onClick={() => {
            changeCategoryState('disposable');
          }}
        >
          <div className="disposableImgBox imgBox">Одноразки</div>
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => {
            changeCategoryState('vapes');
          }}
        >
          <div className="vapesImgBox imgBox">Вейпы</div>
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => {
            changeCategoryState('juice');
          }}
        >
          <div className="juiceImgBox imgBox">Жидкости</div>
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => {
            changeCategoryState('equipment');
          }}
        >
          <div className="equipmentImgBox imgBox">Комплектующие</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
