import { Component } from 'react';
import { connect } from 'react-redux';

class InformationLayoutContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isGameEnded: props.isGameEnded,
			isDraw: props.isDraw,
			currentPlayer: props.currentPlayer,
		}
	}
	render() {
		return (
			<>
				<h1 className="InformationLayout" hidden={this.props.isGameEnded ? this.props.isDraw : this.props.isGameEnded} >
					{this.props.isGameEnded ? `Победил: ${this.props.currentPlayer}` : `Ходит: ${this.props.currentPlayer}`}
				</h1>
				<h1 className="InformationLayout">
					{this.props.isDraw ? 'Ничья' : ''}
				</h1>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
})

const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer)

export default InformationLayout
