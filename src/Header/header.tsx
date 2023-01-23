import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logoImg from '../img/logoImg.png';

export default function Header() {
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
        <div className="cart">
          <div className="productInCart">0</div>
        </div>
      </div>
      <nav className="navigation">
        <NavLink className={({ isActive }: { isActive: boolean }) => activeStyles(isActive)} to="/other">
          Other page
        </NavLink>
      </nav>
    </div>
  );
}
