import { useEffect, useState } from 'react';
import './App.css';
import FieldLayout from './FieldLayout';
import InformationLayout from './InformationLayout';
import { store } from './store';

const App = () => {
	const [state, setState] = useState(store.getState());
	const { initialState } = state
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
			return () => {
				unsubscribe();
			};
		});
	}, []);


	const beginClick = () => {
		store.dispatch({ type: 'RESTART_GAME', initialState })
	};
	return (
		<div className='App'>
			<InformationLayout />
			<FieldLayout />
			<button className='button' onClick={beginClick}>
				Начать сначала
			</button>
		</div>
	);
};

export default App;
