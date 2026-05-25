'use client';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './admin.module.css';

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then(r => r.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="container">
          <h1 className={styles.title}>ADMIN DASHBOARD</h1>
          <p className={styles.subtitle}>{bookings.length} total bookings</p>

          {loading ? (
            <p className={styles.loading}>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p className={styles.empty}>No bookings yet.</p>
          ) : (
            <div className={styles.table}>
              <div className={styles.tableHead}>
                <span>Name</span>
                <span>Service</span>
                <span>Date</span>
                <span>Time</span>
                <span>Phone</span>
                <span>Status</span>
              </div>
              {bookings.map(b => (
                <div key={b._id} className={styles.tableRow}>
                  <span>{b.name}</span>
                  <span>{b.service}</span>
                  <span>{b.date}</span>
                  <span>{b.time}</span>
                  <span>{b.phone}</span>
                  <span className={styles[b.status]}>{b.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
