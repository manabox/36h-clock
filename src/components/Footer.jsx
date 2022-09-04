import styles from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.pageFooter}>
            <p>
                <small>© 2022 <a href="https://webcreatorbox.com">Web Creator Box</a></small> | <a href="https://github.com/manabox/36h-clock">GitHub</a>
            </p>
        </footer>
    );
}
 
export default Footer;