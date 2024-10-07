import styles from './Field.module.css'
import { store } from './store';

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
	const { isGameEnded, fields, currentPlayer } = store.getState()

	const handleClick = (index) => {
		if (isGameEnded) {
			return;
		}
		const newFields = fields.slice()
		newFields[index] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newFields })


		if (checkWinner(newFields, currentPlayer)) {
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return;
		}
		if (!newFields.some((item) => item === '')) {
			store.dispatch({ type: 'SET_DRAW', payload: true })
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return
		}
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? 'O' : 'X' })
	};
	return <button className={styles.Field} onClick={() => handleClick(index)} disabled={field}>{field}</button>
}

export default Field
