import styles from './AlignCenter.module.scss'

export const AlignCenter = ({ children }) => {
    return (
        <div className={styles.alignCenter}>{children}</div>
    )
}

