import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/navigation.module.css'

const Navigation = ({ openMenu, menuToggle, children}) => {
    return (
        <section className={styles.navigation}>
            <button className={styles.menuButton} onClick={menuToggle}>
                {openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faGear} />}
            </button>
            <div className={`${styles.menuPanel} ${ openMenu && styles.menuPanelOpen}`}>
                { children }
            </div>
        </section>
    );
}
 
export default Navigation;