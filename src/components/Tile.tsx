import styles from './Tile.module.scss'

type Tile = {
    children: JSX.Element,
};

export const Tile = ({ children }: Tile) => {
    return (
        <div className={styles.tile}>{children}</div>
    )
}

