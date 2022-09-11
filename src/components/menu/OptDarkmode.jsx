import styles from '../../../styles/option.module.css'

const OptDarkmode = ({ darkMode, darkModeToggle }) => {
    return (
        <div className={styles.optItem}>
            <label className={styles.optItemLabel}>
                <span>Dark mode</span>
                <input
                    type="checkbox"
                    className={styles.optCheckbox}
                    checked={darkMode}
                    onChange={darkModeToggle}
                />
                <div className={styles.optItemSlider}></div>
            </label>
        </div>
    );
}
 
export default OptDarkmode;