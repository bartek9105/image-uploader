import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

type LayoutProps = PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Layout
