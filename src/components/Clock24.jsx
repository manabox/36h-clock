import styles from '../../styles/clock24.module.css'

const Clock24 = ({ date }) => {
    return (
        <section className={styles.clock24}>
            <h2>24-hour Clock</h2>
            <p className={styles.clock24Time}>{date.getHours()}:{date.getMinutes()}</p>
        </section>
    );
}
 
export default Clock24;