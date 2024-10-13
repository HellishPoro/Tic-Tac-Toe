import Field from './Field'
import styles from './FieldLayout.module.css'
// import { store } from './store'
import { useSelector } from 'react-redux'
import { selectFields } from './selectors'


const FieldLayout = () => {
	// const { fields } = store.getState()
	const fields = useSelector(selectFields)
	return (
		<div className={styles.FieldLayout}>
			{fields.map((field, index) => (
				<Field key={index} index={index} field={field} />
			))}
		</div>
	)
}


export default FieldLayout
