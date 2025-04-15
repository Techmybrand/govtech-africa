"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from '../logo/Logo';
import Button from '../button/Button';

interface Props {
  type: 'default' | 'new'
}

const Header = ({type = 'default'}: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>

          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>
                  {type === 'default' ? 'About' : 'About AGW'}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/partner" className={styles.navLink}>
                  {type === 'default' ? 'Partner' : 'Partner/sponsor'}
                </Link>
              </li>
            </ul>

		        <div className={styles.button_container}>
              <Link href="/register">
                <Button className={styles.button}>Register</Button>
              </Link>
              <Link href="/contact">
                <Button buttonType='secondary' className={styles.button}>
                  Contact Us
                </Button>
              </Link>
		        </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;