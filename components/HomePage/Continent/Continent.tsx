'use client';
import React, { useRef } from 'react';
import styles from './Continent.module.scss'

const Continent = () => {
  const containerRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const container = containerRef.current;
  //   const details = detailsRef.current;
  //   if (!container || !details) return;

  //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const scrollY = window.scrollY;
  //         const rect = container.getBoundingClientRect();
  //         const offset = scrollY - rect.top + window.scrollY;

  //         container.style.setProperty('--bg-translate-y', `${offset * 0.3}px`);
  //         details.style.transform = `translateY(${offset * -0.1}px)`;
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     root: null,
  //     threshold: 0.1,
  //   });

  //   observer.observe(container);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section ref={containerRef} className={styles.continent_container}>
      <div className={styles.overlay}></div>
      <div ref={detailsRef} className={styles.continent_details}>
        <h3>A Continent at Crossroads</h3>
        <p>
          With over 60% of Africa’s population under 25, the demand 
          for efficient, transparent, and digital-first governance 
          has never been greater. Governments are turning to 
          technology not just to modernize but to build trust, 
          enhance service delivery, and drive economic transformation.
        </p>
      </div>
    </section>
  )
}

export default Continent