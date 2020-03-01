import React from 'react';
import Konva from 'konva';
import { Link } from 'react-router-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { render } from 'react-dom';
import styles from './ConnectFour.css';
import { Column, SelectionSurface } from './Column';
import routes from '../constants/routes.json';

export default function Counter(props: Props) {
  const example = [
    [1, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0],
    [1, 2, 1, 0, 0, 0],
    [1, 2, 1, 0, 0, 0],
    [1, 2, 1, 0, 0, 0],
    [1, 2, 1, 0, 0, 0],
    [1, 2, 1, 0, 0, 0]
  ];

  // eslint-disable-next-line react/jsx-key
  const columns = example.map((val, x) => <Column position={x} values={val} />);
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <SelectionSurface />
      <Stage width={960} height={910} y={70} x={50}>
        <Layer>{columns}</Layer>
      </Stage>
    </div>
  );
}
