'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
    title?: string;
    image?: string;
    children?: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const OpenAccordion = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div data-active={isOpen} className={styles.accordion_container}>
            <div className={styles.accordion_header_container}>
                <div className={styles.accordion_header}>
                    <h3>Q: </h3>
                    <h1 className={styles.accordion_title}>
                        {title}
                    </h1>
                </div>
                <div onClick={OpenAccordion} className={`${styles.accordion_icon}`}>
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
