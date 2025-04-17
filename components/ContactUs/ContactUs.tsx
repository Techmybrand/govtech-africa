'use client';
import React, { useState } from 'react';
import { InputField, Select, TextArea } from '@/shared';
import { inquiryTypes } from '@/mock/navLists.mock';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
    const [selectInquiry, setSelectInquiry] = useState<string>('');
    const handleSelectInquiry = (value: string) => {
        setSelectInquiry(value);
    };
  return (
    <section className={styles.contact_us_container}>
        <div className={styles.contact_us_content}>
            <div className={styles.header}>
                <h1>Want to be a part of the movement?</h1>
                <h3>
                    Have questions about our available sponsorship, speaking, 
                    exhibitions and other partnership opportunities? 
                    Drop us a line and we’ll be in touch.
                </h3>
            </div>
            <form>
                <div className={styles.container}>
                    <InputField label='First Name' placeholder='First Name' />
                    <InputField label='Last Name' placeholder='Last Name' />
                    <InputField label='Email' placeholder='Email' />
                    <InputField label='Phone Number' placeholder='Phone Number' />
                    <div className={styles.button}>
                        <h3>Register</h3>
                        <div className={styles.icon}>
                            <Image alt='' fill src='/svgs/button_arrow_icon.svg' />
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <InputField label='Company Name' placeholder='Company Name' />
                    <Select options={inquiryTypes} label='Inquiry type'
                        defaultOption='Inquiry type'
                        onOptionChange={handleSelectInquiry}
                    />
                    <TextArea textClassName={styles.textarea_class} label='Message' placeholder='Message' />
                </div>
                <div className={styles.button_sm}>
                    <h3>Submit</h3>
                    <div className={styles.icon}>
                        <Image alt='' fill src='/svgs/button_arrow_icon.svg' />
                    </div>
                </div>
            </form>
            <div className={styles.call_and_mail_container}>
                <div className={styles.call_icon_wrapper}>
                    <div className={styles.icon_wrapper}>
                        <Image alt='' fill src='/svgs/mail_icon.svg' />
                    </div>
                    <div className={styles.text}>
                        <h3>Send us a email</h3>
                        <Link href='mailto:info@africagovtechweek.com '>
                            <h6>info@africagovtechweek.com</h6>
                        </Link>
                    </div>
                </div>
                <div className={styles.call_icon_wrapper}>
                    <div className={styles.icon_wrapper}>
                        <Image alt='' fill src='/svgs/call_icon.svg' />
                    </div>
                    <div className={styles.text}>
                        <h3>Or Call us</h3>
                        <div className={styles.call_numbers}>
                            <Link href='tel:+234 810 287 5064'>
                                <p>+234 810 287 5064; </p>
                            </Link>
                            <Link href='tel:+234 906 049 0067'>
                                <p>+234 906 049 0067;</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs