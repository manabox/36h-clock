import styles from '../../../styles/option.module.css'

const OptShow24h = ({ show24H, show24HToggle}) => {
    return (
        <div className={styles.optItem}>
            <label className={styles.optItemLabel}>
                <span>Show 24-hour clock</span>
                <input
                    type="checkbox"
                    className={styles.optCheckbox}
                    checked={show24H}
                    onChange={show24HToggle}
                />
                <div className={styles.optItemSlider}></div>
            </label>
        </div>
    );
}
 
export default OptShow24h;