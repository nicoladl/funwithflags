import styles from './AlignCenter.module.scss'

type AlignCenter = {
    children: JSX.Element,
};

export const AlignCenter = ({ children }: AlignCenter) => {
    return (
        <div className={styles.alignCenter}>{children}</div>
    )
}

