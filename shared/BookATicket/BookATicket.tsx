'use client';
import React from 'react';
import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './BookATicket.module.scss';

const BookATicket = () => {
    const router = useRouter();
  return (
    <div className={styles.book_a_ticket_container}>
        <div className={styles.wrapper}>
            <div className={styles.book_a_ticket_details}>
                <h2>Book your ticket/stand</h2>
                <div className={styles.buttons}>
                    <Button onClick={() => router.push('/register')} className={styles.register_button}>
                        <h3>Register</h3>
                        <div className={styles.button_icon}>
                            <Image src='/svgs/button_arrow_icon.svg' fill alt='arrow right' />
                        </div>
                    </Button>
                    <Button onClick={() => router.push('/partner#book-a-stand')} className={styles.book_button}>
                        <h3>Book a stand</h3>
                        <div className={styles.button_icon}>
                            <Image src='/svgs/button_arrow_icon.svg' fill alt='arrow right' />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookATicket