'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">CONTACT US</h2>
            <p className="section-subtitle">Have a question or want to learn more? We'd love to hear from you.</p>

            <div className={styles.details}>
              <p>📍 1040 S 4th St, Allentown, PA 18103</p>
              <p>📞 610-351-0215</p>
              <p>✉️ pandaautospa@pandaautocenter.com</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && <p className={styles.success}>Message sent! We'll be in touch soon.</p>}
            {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
            <input name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your Name" required className={styles.input} />
            <input type="email" name="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Your Email" required className={styles.input} />
            <textarea name="message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Your Message" rows={5} required className={styles.input} />
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
