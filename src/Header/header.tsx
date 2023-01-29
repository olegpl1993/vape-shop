import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logoImg from '../img/logoImg.png';

export default function Header({ cartState }: { cartState: { id: number, number: number }[] }) {
  const numberProducts = cartState.reduce((acc: number, current) => acc + current.number, 0);
  const activeStyles = useMemo(
    () => (bool: boolean) => (bool
      ? 'link__active'
      : 'link'),
    [],
  );

  const activeLogo = useMemo(
    () => (bool: boolean) => (bool
      ? 'logo__active'
      : 'logo'),
    [],
  );

  return (
    <div className="header">
      <div className="logoRow">
        <div className="logoBox">
          <img src={logoImg} alt="logoVape" height={70} />
          <NavLink className={({ isActive }: { isActive: boolean }) => activeLogo(isActive)} to="/">
            Vape Family
          </NavLink>
        </div>
        <NavLink to="/cart">
          <div className="cart">
            <div className="productInCart">{numberProducts}</div>
          </div>
        </NavLink>
      </div>
      <nav className="navigation">
        <NavLink className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)} to="/disposable">
          Одноразки
        </NavLink>
        <NavLink className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)} to="/vapes">
          Вейпы
        </NavLink>
        <NavLink className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)} to="/juice">
          Жидкости
        </NavLink>
        <NavLink className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)} to="/equipment">
          Комплектующие
        </NavLink>
      </nav>
    </div>
  );
}
