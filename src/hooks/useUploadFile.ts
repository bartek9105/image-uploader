import { ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { storage } from '../config/firebase'

export const useUploadFile = () => {
	const [file, setFile] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(true)
	const mountainsRef = ref(storage, 'mountains.jpg')

	const uploadFile = async () => {
		await uploadBytes(mountainsRef, file)
		setIsLoading(false)
	}

	useEffect(() => {
		if (file) {
			uploadFile()
		}
	}, [file, uploadFile])

	return {
		isLoading,
		setFile
	}
}
