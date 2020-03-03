import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Konva from 'konva';
import { Rect, Circle, Group } from 'react-konva';
import styles from './Column.css';

type CellProps = {
  position: number;
  value: number;
};

function Cell(props: CellProps) {
  const { position, value } = props;

  const y = 780 - position * 130;
  const colors = ['', 'red', 'yellow'];
  return (
    <>
      <Circle
        x={65}
        y={y + 55}
        radius={55}
        fill={colors[value]}
        opacity={1}
        stroke="blue"
        strokeWidth={20}
      />
      <Rect
        x={10}
        y={y}
        width={110}
        height={110}
        fillEnabled={false}
        stroke="blue"
        strokeWidth={20}
      />
    </>
  );
}

type ColumnProps = {
  position: number;
  values: number[];
  hover: boolean;
  activeColumn: {
    column: number;
    player: number;
  };
};

export const Column = (props: ColumnProps) => {
  const { position, values, activeColumn } = props;

  const cells = [...Array(6).keys()].map(x => (
    <Cell key={x} position={x + 1} value={values[x]} />
  ));
  return (
    <>
      <Group x={130 * position}>
        {position === activeColumn.column && activeColumn.player > 0 && (
          <Circle
            x={65}
            y={0}
            radius={45}
            fill={activeColumn.player === 1 ? 'red' : 'yellow'}
            opacity={1}
          />
        )}
        {cells}
      </Group>
    </>
  );
};

type SelectionProps = {
  dropChecker: (col: number, player: number) => void;
  setActiveChecker: (col: number, player: number) => void;
  board: number[][];
};

export const SelectionSurface = (props: SelectionProps) => {
  const { dropChecker, board, setActiveChecker } = props;

  const dropWrapper = (col: number) => {
    if (board[col][6] === 6) {
      return;
    }
    dropChecker(col, 1);
  };

  const activeWrapper = (col: number, isOn: number) => {
    setActiveChecker(col, isOn);
  };

  const sections = [...Array(7).keys()].map(x => (
    <div
      key={x}
      className={styles.selectionSection}
      onMouseEnter={() => activeWrapper(x, 1)}
      onMouseLeave={() => activeWrapper(x, 0)}
      onClickCapture={() => dropWrapper(x)}
    >
      {x}
    </div>
  ));
  return <div className={styles.hoverPanel}>{sections}</div>;
};
