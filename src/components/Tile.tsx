import styles from './Tile.module.scss'

export const Tile = ({ children }) => {
    return (
        <div className={styles.tile}>{children}</div>
    )
}

