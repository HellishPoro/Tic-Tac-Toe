import styles from './Field.module.css'

const Field = ({ field, handleClick, index }) => {
	return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

export default Field
