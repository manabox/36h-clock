import styles from '../../styles/clock36.module.css'

const Clock36 = ({ date, showSeconds }) => {
    const hour36 = Math.floor((date.getHours() * 60 + date.getMinutes()) / 40) // (h * 60 + m) / 40
    const min36 = (date.getHours() * 60 + date.getMinutes()) % 40 // (h * 60 + m) % 40

    return (
        <section className={styles.clock36}>
            <h1>36-hour Clock</h1>
            <p className={styles.clock36Time}>
                { hour36 } : { min36 }
                { showSeconds && <span>{ date.getSeconds() }</span> }
            </p>
        </section>
    );
}
 
export default Clock36;