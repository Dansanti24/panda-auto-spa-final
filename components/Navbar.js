'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🐼 PANDA AUTO SPA
        </Link>
        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#booking" onClick={() => setOpen(false)}>Book Now</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/admin" onClick={() => setOpen(false)} className={styles.adminLink}>Admin</Link>
        </div>
        <button className={styles.burger} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
