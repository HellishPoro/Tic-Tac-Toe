import { connect } from 'react-redux'
import Field from './Field'
import { Component } from 'react'

class FieldLayoutConteiner extends Component {


	render() {
		return (
			<div className="FieldLayout">
				{this.props.fields.map((field, index) => (
					<Field key={index} index={index} field={field} />
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	fields: state.fields,
})

const FieldLayout = connect(mapStateToProps)(FieldLayoutConteiner)

export default FieldLayout
