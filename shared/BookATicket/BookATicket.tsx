'use client';
import React from 'react';
import { Button } from '@/shared';
import styles from './BookATicket.module.scss';
import Image from 'next/image';

const BookATicket = () => {
  return (
    <div className={styles.book_a_ticket_container}>
        <div className={styles.book_a_ticket_details}>
            <h2>Book your ticket/stand</h2>
            <div className={styles.buttons}>
                <Button className={styles.register_button}>
                    <h3>Register</h3>
                    <div className={styles.button_icon}>
                        <Image src='/svgs/button_arrow_icon.svg' fill alt='arrow right' />
                    </div>
                </Button>
                <Button className={styles.book_button}>
                    <h3>Book a stand</h3>
                    <div className={styles.button_icon}>
                        <Image src='/svgs/button_arrow_icon.svg' fill alt='arrow right' />
                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default BookATicket