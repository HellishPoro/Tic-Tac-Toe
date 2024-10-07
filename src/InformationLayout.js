import styles from './InformationLayout.module.css'
import { store } from './store'

const InformationLayout = () => {
	const { isGameEnded, isDraw, currentPlayer } = store.getState();

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
