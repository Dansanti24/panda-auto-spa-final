'use client';
import { useState } from 'react';
import styles from './BookingForm.module.css';

const SERVICES = [
  'Essential Refresh - $60',
  'Exterior Excellence - $150',
  'Deluxe Full Detail - $225',
  'Paint Perfection & Protection - $500',
  'Ultimate Ceramic Coating - $800',
];

const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="booking" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <p className="section-label">Schedule Your Detail</p>
            <h2 className="section-title">BOOK AN<br />APPOINTMENT</h2>
            <p className="section-subtitle">
              Choose your service, pick a time, and we'll take care of the rest.
              Same-week availability often available.
            </p>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>1040 S 4th St, Allentown, PA 18103</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <span>610-351-0215</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏰</span>
                <span>Mon–Sat: 9AM–6PM</span>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className={styles.success}>
                ✅ Booking confirmed! We'll reach out to confirm your appointment.
              </div>
            )}
            {status && status !== 'success' && (
              <div className={styles.error}>{status}</div>
            )}

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
              </div>
              <div className={styles.field}>
                <label>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="(610) 555-0000" required />
              </div>
            </div>

            <div className={styles.field}>
              <label>Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" required />
            </div>

            <div className={styles.field}>
              <label>Service *</label>
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Preferred Date *</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label>Preferred Time *</label>
                <select name="time" value={form.time} onChange={handleChange} required>
                  <option value="">Select time...</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>Additional Notes</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any special requests or info about your vehicle..." rows={4} />
            </div>

            <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
