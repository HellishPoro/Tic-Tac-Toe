import { Component } from 'react';
import FieldLayout from './FieldLayout';
import InformationLayout from './InformationLayout';
import { connect } from 'react-redux';

class AppConteiner extends Component {

	constructor(props) {
		super(props)

		this.beginClick = this.beginClick.bind(this)
	}

	beginClick() {
		this.props.dispatch({ type: 'RESTART_GAME' })
	}

	render() {
		return (
			<div className="App">
				<InformationLayout />
				<FieldLayout />
				<button className="button" onClick={this.beginClick}>
					Начать сначала
				</button>
			</div>
		)
	}
}

const App = connect()(AppConteiner)

export default App;
