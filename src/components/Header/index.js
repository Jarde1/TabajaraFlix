import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <span>TabajaraFlix</span>
            <nav>
                <a href="#">Home</a>
                <a hfef="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;
