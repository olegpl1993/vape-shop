import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logoImg from '../img/logoImg.png';
import { useAppDispatch, useAppSelector } from '../hook';
import { changeCategory } from '../store/categorySlice';

export default function Header() {
  const categoryState = useAppSelector((state) => state.category.category);
  const dispatch = useAppDispatch();
  const changeCategoryState = async (str: string) => {
    dispatch(changeCategory(str));
  };

  const cart = useAppSelector((state) => state.cart.cart);
  const [numberProducts, setNumberProducts] = useState<number>(0);

  useEffect(() => {
    setNumberProducts(
      cart.reduce((acc: number, current) => acc + current.number, 0),
    );
  }, [cart]);

  return (
    <div className="header">
      <div className="logoRow">
        <div className="logoBox">
          <img src={logoImg} alt="logoVape" height={70} />
          <NavLink
            className="logo"
            to="/"
            onClick={() => {
              changeCategoryState('');
            }}
          >
            Vape Family
          </NavLink>
        </div>
        <NavLink
          to="/cart"
          onClick={() => {
            changeCategoryState('');
          }}
        >
          <div className="cart">
            <div className="productInCart">{numberProducts}</div>
          </div>
        </NavLink>
      </div>
      <nav className="navigation">
        <NavLink
          className={categoryState !== 'disposable' ? 'link' : 'link_active'}
          to="/products"
          onClick={() => {
            changeCategoryState('disposable');
          }}
        >
          Одноразки
        </NavLink>
        <NavLink
          className={categoryState !== 'vapes' ? 'link' : 'link_active'}
          to="/products"
          onClick={() => {
            changeCategoryState('vapes');
          }}
        >
          Вейпы
        </NavLink>
        <NavLink
          className={categoryState !== 'juice' ? 'link' : 'link_active'}
          to="/products"
          onClick={() => {
            changeCategoryState('juice');
          }}
        >
          Жидкости
        </NavLink>
        <NavLink
          className={categoryState !== 'equipment' ? 'link' : 'link_active'}
          to="/products"
          onClick={() => {
            changeCategoryState('equipment');
          }}
        >
          Комплектующие
        </NavLink>
      </nav>
    </div>
  );
}
