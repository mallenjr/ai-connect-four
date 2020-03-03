import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Konva from 'konva';
import { Link } from 'react-router-dom';
import { Stage, Layer } from 'react-konva';
// import { render } from 'react-dom';
import styles from './ConnectFour.css';
import { Column } from './Column';
import { SelectionSurface } from '../containers/Column';
import routes from '../constants/routes.json';

type Props = {
  board: number[][];
  activeColumn: {
    column: number;
    player: number;
  };
};

export default function ConnectFour(props: Props) {
  const { board, activeColumn } = props;

  const columns = board.map((val, x) => (
    <Column
      // eslint-disable-next-line react/no-array-index-key
      key={`${x}`}
      position={x}
      values={val}
      activeColumn={activeColumn}
    />
  ));
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
