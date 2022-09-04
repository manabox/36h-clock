import styles from '../../../styles/option.module.css'

const OptShowSeconds = ({ showSeconds, showSecondsToggle}) => {
    return (
        <div className={styles.optItem}>
            <label className={styles.optItemLabel}>
                <span>Show Seconds</span>
                <input
                    type="checkbox"
                    className={styles.optCheckbox}
                    checked={showSeconds}
                    onChange={showSecondsToggle}
                />
                <div className={styles.optItemSlider}></div>
            </label>
        </div>
    );
}
 
export default OptShowSeconds;