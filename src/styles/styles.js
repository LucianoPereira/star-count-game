import { COLORS } from "../constants";

export const Styles = {
  gameContainer: {
    backgroundColor: "#393e46",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    border: "2px solid black",
  },
  starContainer: { margin: "10px", alignItems: "center" },
  numberContainer: { border: "2px solid #b2b8a3" },
  winMessage: {
    color: "white",
    textAlign: "center",
  },
  playAgainButton: { height: "40px", width: "80px", margin: "5px" },
  starsRow: {
    display: "flex",
    justifyContent: "center",
    width: "120",
  },
  numberBox: {
    width: "70px",
    height: "70px",
    margin: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5%",
  },
  numbers: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  numberRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  starImage: { height: "40px", width: "40px" },
};
