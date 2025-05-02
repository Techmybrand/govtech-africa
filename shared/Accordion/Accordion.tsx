'use client';
import React from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
    title?: string;
    children?: React.ReactNode;
    isOpen?: boolean
    onToggle?: () => void
}

const Accordion = ({ title, children, isOpen, onToggle }: AccordionProps) => {

    return (
        <div data-active={isOpen} className={styles.accordion_container}>
            <div onClick={onToggle} className={styles.accordion_header_container}>
                <div className={styles.accordion_header}>
                    <h1 className={styles.accordion_title}>
                        {title}
                    </h1>
                </div>
                <div className={`${styles.accordion_icon}`}>
                    {isOpen ? (
                        <h3>-</h3>
                    ) : (
                        <h3>+</h3>
                    )}
                </div>
            </div>
            <div className={styles.review_body}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;
