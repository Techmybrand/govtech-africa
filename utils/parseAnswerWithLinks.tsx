'use client';
import React from "react";
import styles from '../components/FAQ/FaqCard/FaqCard.module.scss';
import Link from "next/link";

export const linkMapping: { [key: string]: string } = {
  'website': 'https://www.africagovtechweek.com',
  'contact': '/contact',
  'www.africagovtechweek.com': 'https://www.africagovtechweek.com',
  'info@africagovtechweek.com': 'mailto:info@africagovtechweek.com',
  '+234 810 287 5064': 'tel:+2348102875064',
  'Partnership Page': '/partner#sponsor',
  'sponsorship': '/partner#sponsor',
  'registration page': '/#register',
  'exhibition': '/partner#book-a-stand',
  'Gov-a-thon Africa Page': '/gov-a-thon',
  'Media Page': '/media',
  'social media': '/#footer'
};

export const parseAnswerWithLinks = (answer: string): React.JSX.Element => {
  const phoneNumber = '+234 810 287 5064';
  const phoneRegex = new RegExp(phoneNumber.replace(/[+()\s]/g, '\\$&'), 'g');
  const partsAfterPhone = answer.split(phoneRegex);
  const elements: React.JSX.Element[] = [];
    
  partsAfterPhone.forEach((part: string, index: number) => {
    if (index > 0) {
      elements.push(
        <Link key={`phone-${index}`} href={linkMapping[phoneNumber]}
          // target="_blank"
          rel="noopener noreferrer"
          className={styles.faq_link}
        >
          {phoneNumber}
        </Link>
      );
    }

    const words = Object.keys(linkMapping).filter((word) => word !== phoneNumber);
    const escapedWords = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');
    const subParts = part.split(regex);
    subParts.forEach((subPart: string, subIndex: number) => {
      if (words.includes(subPart)) {
        elements.push(
          <Link key={`${index}-${subIndex}`} href={linkMapping[subPart]}
            className={styles.faq_link}
          >
            {subPart}
          </Link>
        );
      } else {
        elements.push(<span key={`${index}-${subIndex}`}>{subPart}</span>);
      }
    });
  });
  
  
    return <>{elements}</>;
  };