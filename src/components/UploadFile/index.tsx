import DragAndDropInput from '../DragAndDropInput'
import styles from './UploadFile.module.scss'

type UploadFileProps = {
	onDrop: (acceptedFiles: any) => void
}

const UploadFile = ({ onDrop }: UploadFileProps) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Upload your image</h1>
			<p className={styles.hint}>File should be Jpeg, Png, ...</p>
			<DragAndDropInput onDrop={(acceptedFiles) => onDrop(acceptedFiles)} />
			<p className={styles.hint}>Or</p>
		</div>
	)
}

export default UploadFile
