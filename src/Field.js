import { connect } from 'react-redux'
import { Component } from 'react';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

const checkWinner = (fields, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer))
}
class FieldConteiner extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fields: props.fields,
			isGameEnded: props.isGameEnded,
			currentPlayer: props.currentPlayer,
		}
		this.handleClick = this.handleClick.bind(this)
		this.index = this.props.index
		this.field = this.props.field
	}

	handleClick() {
		if (this.props.isGameEnded) {
			return;
		}
		const newFields = this.props.fields.slice()
		newFields[this.index] = this.props.currentPlayer;
		this.props.dispatch({ type: 'SET_FIELD', payload: newFields })


		if (checkWinner(newFields, this.props.currentPlayer)) {
			this.props.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return;
		}
		if (!newFields.some((item) => item === '')) {
			this.props.dispatch({ type: 'SET_DRAW', payload: true })
			this.props.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			return
		}
		if (this.props.currentPlayer === 'X') {
			this.props.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'O' })
		} else if (this.props.currentPlayer === 'O') {
			this.props.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
		}
	}
	render() {
		return <button className="field text-6xl text-center " onClick={this.handleClick} disabled={this.props.field}>{this.props.field}</button>
	}

}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	fields: state.fields,
})

const Field = connect(mapStateToProps)(FieldConteiner)

export default Field
