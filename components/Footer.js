import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.logo}>🐼 PANDA AUTO SPA</p>
            <p className={styles.tagline}>Premium detailing in Allentown, PA</p>
          </div>
          <div className={styles.links}>
            <a href="#services">Services</a>
            <a href="#booking">Book Now</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2024 Panda Auto Spa. All rights reserved.</p>
          <p>1040 S 4th St, Allentown, PA 18103 · 610-351-0215</p>
        </div>
      </div>
    </footer>
  );
}
