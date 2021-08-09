import React from 'react';
import classes from './App.module.scss';
import logo from './logo.svg';
import Filters from '../filters';
import CardList from '../cardList';

const App = () => {
  const obj = {
    price: '13 400 P',
  };

  const Tabs = () => (
    <form className={classes.Tabs}>
      <input type="radio" name="radio" id="low" defaultChecked />
      <label htmlFor="low">Самый дешевый</label>
      <input type="radio" name="radio" id="speedy" />
      <label htmlFor="speedy">Самый скоростной</label>
      <input type="radio" name="radio" id="optimal" />
      <label htmlFor="optimal">Оптимальный</label>
    </form>
  );

  return (
    <section className={classes.App}>
      <img src={logo} alt="Логотип" className={classes['App-logo']} />

      <div className={classes['App--content']}>
        <div>
          <Filters />
        </div>

        <div>
          <Tabs />
          <CardList price={obj.price} />
          <button type="button" className={classes['App--button']}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
