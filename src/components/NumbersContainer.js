import NumbersRow from "./NumbersRow";
import { range } from "../utils";

import { Styles } from "../styles/styles";

const numbers = range(1, 3);

const NumbersContainer = (props) => {
  let number = 1;
  const listNumbers = numbers.map(() => {
    const row = (
      <NumbersRow
        numbers={range(number, number + 2)}
        getNumberColor={props.getNumberColor}
        onClickNumber={props.onClickNumber}
      ></NumbersRow>
    );
    number += 3;
    return row;
  });

  return <div style={Styles.number}>{listNumbers}</div>;
};

export default NumbersContainer;
