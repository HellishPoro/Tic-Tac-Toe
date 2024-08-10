import Field from './Field'
import styles from './FieldLayout.module.css'



const FieldLayout = ({ fields, handleClick }) => {
	return (
		<div className={styles.FieldLayout}>
			{fields.map((field, index) => (
				<Field key={index} index={index} field={field} handleClick={handleClick} />
			))}
		</div>
	)
}


export default FieldLayout
