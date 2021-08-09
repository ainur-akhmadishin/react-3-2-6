import React from 'react';
import classes from './Filters.module.scss';

const Filters = () => (
  <section className={classes.Filters}>
    <span>Количество пересадок</span>
    <form>
      <input type="checkbox" id="all" />
      <label htmlFor="all">Все</label>
      <input type="checkbox" id="withoutTransfers" />
      <label htmlFor="withoutTransfers">Без пересадок</label>
      <input type="checkbox" id="1transfer" />
      <label htmlFor="1transfer">1 пересадка</label>
      <input type="checkbox" id="2transfer" />
      <label htmlFor="2transfer">2 пересадка</label>
      <input type="checkbox" id="3transfer" />
      <label htmlFor="3transfer">3 пересадка</label>
    </form>
  </section>
);

export default Filters;
