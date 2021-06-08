import { Styles } from '../styles/styles'

const PlayAgain = (props) => (
  <div>
          <div>
            <div style={Styles.winMessage}>
              <p>You Won!</p>
            </div>
            <button onClick={props.playAgain} style={Styles.playAgainButton}>
              Play Again
            </button>
          </div>
        </div>
)

export default PlayAgain