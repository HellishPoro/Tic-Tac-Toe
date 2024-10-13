import styles from './Field.module.css'
// import { store } from './store';
import { useDispatch } from 'react-redux'
import { SET_CURRENT_PLAYER, SET_DRAW, SET_FIELD, SET_GAME_ENDED } from './action/'
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectGameEnded, selectFields } from './selectors'

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const checkWinner = (fields, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer))
};

const Field = ({ index, field }) => {

	// const { isGameEnded, fields, currentPlayer } = store.getState()
	const isGameEnded = useSelector(selectGameEnded)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const fields = useSelector(selectFields)

	const dispatch = useDispatch()

	const handleClick = (index) => {
		if (isGameEnded) {
			return;
		}
		const newFields = fields.slice()
		newFields[index] = currentPlayer;
		dispatch(SET_FIELD(newFields))


		if (checkWinner(newFields, currentPlayer)) {
			dispatch(SET_GAME_ENDED(true))
			return;
		}
		if (!newFields.some((item) => item === '')) {
			dispatch(SET_DRAW(true))
			dispatch(SET_GAME_ENDED(true))
			return
		}
		if (currentPlayer === 'X') {
			dispatch(SET_CURRENT_PLAYER('O'))
		} else if (currentPlayer === 'O') {
			dispatch(SET_CURRENT_PLAYER('X'))
		}

	};
	return <button className={styles.Field} onClick={() => handleClick(index)} disabled={field}>{field}</button>
}

export default Field
