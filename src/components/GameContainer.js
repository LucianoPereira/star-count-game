import { useEffect, useState } from "react";
import NumbersContainer from "./NumbersContainer";
import Container from "./Container";
import PlayAgain from "./PlayAgain";
import Star from "./Star";
import { range, sum, sumIn } from "../utils";
import { NUMBER_COLORS } from "../constants";

import { Styles } from "../styles/styles";

const GameContainer = () => {
  const [availableNumbers, setAvailableNumbers] = useState(range(1, 9));
  const [lockedNumbers, setLockedNumbers] = useState([]);
  const [wrongNumbers, setWrongNumbers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const numberColor = (number) => {
    if (lockedNumbers.includes(number)) {
      return NUMBER_COLORS.locked;
    }
    if (wrongNumbers.includes(number)) {
      return NUMBER_COLORS.wrong;
    }
    if (availableNumbers.includes(number)) {
      return NUMBER_COLORS.available;
    } else return NUMBER_COLORS.picked;
  };

  const getPlayableStars = () => {
    const numberSum = sumIn(availableNumbers, 9);
    const randomStarAmt =
      numberSum[Math.floor(Math.random() * numberSum.length)];
    return randomStarAmt;
  };

  const numberPicked = (number) => {
    if (lockedNumbers.includes(number)) {
      return;
    }
    if (availableNumbers.includes(number)) {
      setAvailableNumbers((array) => array.filter((elem) => elem !== number));
    } else {
      setAvailableNumbers((array) => [...array, number]);
    }
  };

  const starValidation = () => {
    const pickedNumbers = range(1, 9).filter(
      (number) =>
        !availableNumbers.includes(number) && !lockedNumbers.includes(number)
    );
    const numberSum = sum(pickedNumbers);
    setWrongNumbers([]);
    if (numberSum === stars) {
      setLockedNumbers((numbers) => [...numbers, ...pickedNumbers]);
      if (!isGameOver()) {
        setStars(getPlayableStars());
      }
    } else if (numberSum > stars) {
      setWrongNumbers(pickedNumbers);
    } else if (numberSum < stars) {
    }
  };

  const isGameOver = () => {
    if (lockedNumbers.length === 9) {
      return true;
    }

    return false;
  };

  const playAgain = () => {
    setAvailableNumbers(range(1, 9));
    setWrongNumbers([]);
    setLockedNumbers([]);
    setGameOver(false);
  };

  const [stars, setStars] = useState(getPlayableStars());

  useEffect(() => getPlayableStars(), []);

  useEffect(() => {
    starValidation();
  }, [availableNumbers]);

  useEffect(() => {
    if (isGameOver()) {
      setStars(0);
      setGameOver(true);
    }
  }, [lockedNumbers]);

  return (
    <div style={Styles.gameContainer}>
      <div style={Styles.starContainer}>
        <Container elemAmt={stars}>
          <Star />
        </Container>
      </div>
      <div style={Styles.numberContainer}>
        <NumbersContainer
          availableNumbers={availableNumbers}
          lockedNumbers={lockedNumbers}
          wrongNumbers={wrongNumbers}
          getNumberColor={numberColor}
          onClickNumber={numberPicked}
        />
      </div>
      {gameOver && <PlayAgain playAgain={playAgain} />}
    </div>
  );
};

export default GameContainer;
