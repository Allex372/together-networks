import styles from './fromWrapper.module.css'

export function FormWrapper({ title, children }) {
    return (
        <>
            <div className={styles.titleWrapper}>
                <p>{title}</p>
            </div>

            <div className={styles.inputWrapper}>{children}</div>
        </>
    )
}