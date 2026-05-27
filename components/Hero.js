import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.label}>Allentown, PA · Est. 2024</p>
        <h1 className={styles.title}>
          YOUR CAR.<br />
          <span className={styles.red}>PERFECTED.</span>
        </h1>
        <p className={styles.subtitle}>
          Premium auto detailing services that restore, protect, and elevate your vehicle.
          From essential refreshes to ceramic coatings.
        </p>
        <div className={styles.actions}>
          <Link href="#booking" className="btn-primary">Book Appointment</Link>
          <Link href="#services" className="btn-outline">View Services</Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Cars Detailed</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5★</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
