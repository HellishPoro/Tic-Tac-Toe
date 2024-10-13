import styles from './InformationLayout.module.css'
// import { store } from './store'
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectGameEnded, selectIsDraw } from './selectors'

const InformationLayout = () => {
	// const { isGameEnded, isDraw, currentPlayer } = store.getState();
	const isGameEnded = useSelector(selectGameEnded)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const isDraw = useSelector(selectIsDraw)

	return (
		<>
			<h1 className={styles.InformationLayout} hidden={isGameEnded ? isDraw : isGameEnded} >
				{isGameEnded ? `Победил: ${currentPlayer}` : `Ходит: ${currentPlayer}`}
			</h1>
			<h1 className={styles.InformationLayout}>
				{isDraw ? 'Ничья' : ''}
			</h1>
		</>
	)
}

export default InformationLayout
