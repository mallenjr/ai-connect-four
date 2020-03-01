import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';
import { render } from 'react-dom';
import { type } from 'os';
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
};

export const Column = function(props: ColumnProps) {
  const { position, values } = props;

  // eslint-disable-next-line react/jsx-key
  const cells = values.map((val, x) => <Cell position={x + 1} value={val} />);
  return (
    <>
      <Group x={130 * position}>{cells}</Group>
    </>
  );
};

type SelectionProps = {};

export const SelectionSurface = function(props: SelectionProps) {
  const sections = [...Array(6).keys()].map(x => (
    // eslint-disable-next-line react/jsx-key
    <div
      className={styles.selectionSection}
      onMouseEnter={() => console.log(`entered: ${x}`)}
      onMouseLeave={() => console.log(`exited: ${x}`)}
    >
      {x}
    </div>
  ));
  return <div className={styles.hoverPanel}>{sections}</div>;
};
