import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <ul>
        <li>
          <Link to={routes.COUNTER}>to Counter</Link>
        </li>
        <li>
          <Link to={routes.CONNECT_FOUR}>to Connect Four</Link>
        </li>
      </ul>
    </div>
  );
}
