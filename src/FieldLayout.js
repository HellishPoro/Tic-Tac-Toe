import Field from './Field'
import styles from './FieldLayout.module.css'
import { store } from './store'


const FieldLayout = () => {
	const { fields } = store.getState()
	return (
		<div className={styles.FieldLayout}>
			{fields.map((field, index) => (
				<Field key={index} index={index} field={field} />
			))}
		</div>
	)
}


export default FieldLayout
