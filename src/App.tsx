import Layout from './components/Layout'
import UploadFile from './components/UploadFile'
import { useUploadFile } from './hooks/useUploadFile'

function App() {
	const { setFile } = useUploadFile()

	return (
		<Layout>
			<UploadFile onDrop={(acceptedFiles) => setFile(acceptedFiles)} />
		</Layout>
	)
}

export default App
