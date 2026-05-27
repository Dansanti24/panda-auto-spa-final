'use client';
import { useEffect, useState } from 'react';
import styles from './Services.module.css';

export default function Services() {
  const [services, setServices] = useState([]);
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then(r => r.json())
      .then(data => {
        setServices(data.services);
        setAddons(data.addons);
      });
  }, []);

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <p className="section-label">What We Offer</p>
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">
          Every service is performed by hand with professional-grade products.
          No shortcuts, no compromises.
        </p>

        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.id} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{s.name}</h3>
                <span className={styles.price}>${s.price}</span>
              </div>
              <p className={styles.duration}>{s.duration}</p>
              <p className={styles.desc}>{s.description}</p>
              <a href="#booking" className={styles.bookBtn}>Book This →</a>
            </div>
          ))}
        </div>

        <div className={styles.addons}>
          <h3 className={styles.addonsTitle}>PREMIUM ADD-ONS</h3>
          <div className={styles.addonsGrid}>
            {addons.map(a => (
              <div key={a.id} className={styles.addon}>
                <span>{a.name}</span>
                <span className={styles.addonPrice}>${a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
