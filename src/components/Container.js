import React from "react";

import { Styles } from "../styles/styles";

const Container = (props) => {
  const elementsArray = [...Array(props.elemAmt).keys(props.elemAmt)];

  const listElements = elementsArray.map((number) => {
    return React.cloneElement(props.children, { key: number });
  });

  const starRows = [
    listElements.slice(0, 3),
    listElements.slice(3, 6),
    listElements.slice(6, 9),
  ];

  const listRows = () =>
    starRows.map((row) => <div style={Styles.starsRow}>{row}</div>);

  return <div>{listRows()}</div>;
};

export default Container;
