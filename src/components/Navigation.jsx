import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ openMenu, menuToggle, children}) => {
    return (
        <section className="navigation">
            <button onClick={menuToggle}>
                {openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faGear} />}
            </button>
            <div className={`menuPanel ${ openMenu ? 'menuPanelOpen' : ''}`}>
                { children }
            </div>
        </section>
    );
}
 
export default Navigation;