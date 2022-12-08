import styles from "../styles/Home.module.css";
import React from "react";
import colorList from "css-color-names";

const correctColor = (color: string) => {
  return colorList.hasOwnProperty(color) ? color : `#${color}`;
};

interface ColorProps {
  color: string;
}
export const Color: React.FC<ColorProps> = ({ color }) => {
  return (
    <code>
      <span
        className={styles.color}
        style={{ background: correctColor(color) }}
      />
      {color}
    </code>
  );
};
