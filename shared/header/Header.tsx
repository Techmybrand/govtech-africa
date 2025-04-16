"use client";
import React, { useState, useEffect } from 'react';
import { Button, Logo } from '@/shared';
import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
interface Props {
  type: 'default' | 'new'
}

const Header = ({type = 'default'}: Props) => {
  const pathname = usePathname();
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
  const checkActive = (href: string) => {
    return pathname === href
  }

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

          <ul className={styles.navList_lg}>
              <li className={styles.navItem}>
                <Link href="/" 
                  className={`${checkActive('/') ? styles.active : ''} ${styles.navLink}`}>
                    Home
                  </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about-us" className={`${checkActive('/about-us') ? styles.active : ''} ${styles.navLink}`}>
                  {type === 'default' ? 'About' : 'About AGW'}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/partner" className={`${checkActive('/partner') ? styles.active : ''} ${styles.navLink}`}>
                  {type === 'default' ? 'Partner' : 'Partner/sponsor'}
                </Link>
              </li>
          </ul>
          <div className={styles.button_container_lg}>
            <Link href="#register">
              <Button className={styles.button}>Register</Button>
            </Link>
            <Link href="/contact">
              <Button buttonType='secondary' className={styles.button}>
                Contact Us
              </Button>
            </Link>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={`${checkActive('/') ? styles.active : ''} ${styles.navLink}`}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about-us" className={`${checkActive('/about-us') ? styles.active : ''} ${styles.navLink}`}>
                  {type === 'default' ? 'About' : 'About AGW'}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/partner" className={`${checkActive('/partner') ? styles.active : ''} ${styles.navLink}`}>
                  {type === 'default' ? 'Partner' : 'Partner/sponsor'}
                </Link>
              </li>
            </ul>

		        <div className={styles.button_container}>
              <Link href="#register">
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