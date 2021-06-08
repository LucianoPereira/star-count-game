import NumberBox from "./NumberBox";
import { Styles } from "../styles/styles";

const NumbersRow = (props) => {
  const listNumbers = props.numbers.map((number) => {
    return (
      <NumberBox
        key={number}
        number={number}
        color={props.getNumberColor(number)}
        onClickNumber={props.onClickNumber}
      ></NumberBox>
    );
  });
  return <div style={Styles.numberRow}>{listNumbers}</div>;
};

export default NumbersRow;
