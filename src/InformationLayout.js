import styles from './InformationLayout.module.css'


const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
}

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
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

export default Information
