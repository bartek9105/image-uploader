import Layout from './components/Layout'
import { useDropzone } from 'react-dropzone'

function App() {
	const { draggedFiles, getRootProps, getInputProps } = useDropzone()

	return (
		<Layout>
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
		</Layout>
	)
}

export default App
