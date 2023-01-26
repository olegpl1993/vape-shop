import React from 'react';
import './disposable.scss';
import data from '../../data/database';

function Disposable() {
  console.log(data);
  const { disposable } = data;
  console.log(disposable);
  return (
    <div className="disposable">
      <div className="title">Одноразовые</div>
      <img src={disposable[0].images[0]} alt={disposable[0].title} />
    </div>
  );
}

export default Disposable;
