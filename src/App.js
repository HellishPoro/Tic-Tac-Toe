import './App.css';
import { useState } from 'react';
import FieldLayout from './FieldLayout';
import InformationLayout from './InformationLayout';


const player = {
	crosses: 'X',
	noughts: 'O'
};

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

const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState(player.crosses);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [fields, setFields] = useState(Array(9).fill(''));

	const handleClick = (index) => {
		if (isGameEnded) {
			return;
		}
		const newFields = fields.slice();
		newFields[index] = currentPlayer;
		setFields(newFields);
		if (checkWinner(newFields, currentPlayer)) {
			setIsGameEnded(true);
			return;
		}
		if (!newFields.some((item) => item === '')) {
			setIsDraw(true);
			setIsGameEnded(true);
			return
		}

		setCurrentPlayer(
			currentPlayer === player.crosses ? player.noughts : player.crosses,
		);
	};
	const beginClick = () => {
		setCurrentPlayer(player.crosses);
		setFields(Array(9).fill(''));
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<div className='App'>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldLayout
				fields={fields}
				handleClick={handleClick}
				currentPlayer={currentPlayer}
			/>
			<button className='button' onClick={beginClick}>
				Начать сначала
			</button>
		</div>
	);
};

export default App;
