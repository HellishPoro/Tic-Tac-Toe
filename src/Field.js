import { useEffect, useState } from 'react';
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

	// store.dispatch({ type: 'SET_WINNER', payload: WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer)) })
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer))
};

const Field = ({ index, field }) => {
	// const { isGameEnded, fields, currentPlayer } = store.getState()
	const [state, setState] = useState(store.getState());
	const { isGameEnded, fields, currentPlayer } = state

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
			return () => {
				unsubscribe();
			};
		});
	}, []);



	const handleClick = (index) => {
		const newFields = fields.slice()
		newFields[index] = currentPlayer;
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? 'O' : 'X' })
		store.dispatch({ type: 'SET_FIELD', payload: newFields })
		if (isGameEnded) {
			return;
		}

		if (checkWinner(newFields, currentPlayer)) {
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return;
		}
		if (!newFields.some((item) => item === '')) {
			store.dispatch({ type: 'SET_DRAW', payload: true })
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return
		}
	};
	return (<div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>)
}

export default Field
