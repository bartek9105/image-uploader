import Dropzone from 'react-dropzone'
import styles from './DragAndDropInput.module.scss'

type DragAndDropInputProps = {
	onDrop: (acceptedFiles: any) => void
}

const DragAndDropInput = ({ onDrop }: DragAndDropInputProps) => {
	return (
		<Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles[0])} noClick>
			{({ getRootProps, getInputProps, open }) => (
				<section>
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						<div className={styles.fakeInput}>
							<p className={styles.hint}>Drag & Drop your image here</p>
						</div>
						<button onClick={open}>click me</button>
					</div>
				</section>
			)}
		</Dropzone>
	)
}

export default DragAndDropInput
