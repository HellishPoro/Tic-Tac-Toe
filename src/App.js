import { useEffect, useState } from 'react';
import './App.css';
import FieldLayout from './FieldLayout';
import InformationLayout from './InformationLayout';
import { store } from './store';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from './action'

const App = () => {
	const [state, setState] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
			return () => {
				unsubscribe();
			};
		});
	}, []);

	const dispatch = useDispatch()

	const beginClick = () => {
		dispatch(RESTART_GAME)
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
