export const initialState = {
	currentPlayer: 'X',
	fields: Array(9).fill(''),
	isDraw: false,
	isGameEnded: false,
}

export const appReduser = (state = initialState, actiion) => {
	const { type, payload } = actiion
	switch (type) {

		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload
			}

		case 'SET_FIELD':
			return {
				...state,
				fields: payload
			}

		case 'SET_GAME_ENDED':
			return {
				...state,
				isGameEnded: payload
			}

		case 'SET_DRAW':
			return {
				...state,
				isDraw: payload
			}

		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
}
