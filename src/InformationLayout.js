import { useEffect, useState } from 'react';
import styles from './InformationLayout.module.css'
import { store } from './store'


const InformationLayout = () => {
	// const { isGameEnded, isDraw, currentPlayer } = store.getState();

	const [state, setState] = useState(store.getState());
	const { isGameEnded, isDraw, currentPlayer } = state

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => {
			unsubscribe();
		};
	}, []);
	// store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? 'O' : 'X' })
	// store.dispatch({ type: 'SET_WINNER', payload: isGameEnded === 'X' ? 'O' : 'X' })


	return (
		<>
			<h1 className={styles.InformationLayout} hidden={isGameEnded ? isDraw : isGameEnded}>
				{isGameEnded ? 'Победил: ' : 'Ходит: '}{currentPlayer}
			</h1>
			<h1 className={styles.InformationLayout}>
				{isDraw ? 'Ничья' : ''}
			</h1>
		</>
	)
}

export default InformationLayout
