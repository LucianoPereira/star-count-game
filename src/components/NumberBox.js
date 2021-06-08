import { Styles } from "../styles/styles";

const NumberBox = (props) => {
  return (
    <div
      style={{ ...Styles.numberBox, backgroundColor: props.color }}
      onClick={() => {
        props.onClickNumber(props.number);
      }}
    >
      <p>{props.number}</p>
    </div>
  );
};

export default NumberBox;
