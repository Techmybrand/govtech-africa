'use client';
import React from 'react';
import { InputField, Select, TextArea } from '@/shared';
import { mediaTypes } from '@/mock/navLists.mock';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MediaForm.module.scss';

interface MediaFormProps {
  title: string;
}

const MediaForm = ({ title }: MediaFormProps) => {
  return (
    <section className={styles.contact_us_container}>
        <div className={styles.contact_us_content}>
            <div className={styles.header}>
                <h1>{title}</h1>
                <h3>
                    Media attendance at the Africa Technology Expo is by accreditation only. 
                    To request an invitation, please complete the form below. 
                    If you do not hear from us at least 3 weeks before the start of the event, 
                    your application was not successful, and you will need to purchase 
                    a normal ticket to attend the event.
                </h3>
            </div>
            <form>
                <div className={styles.container}>
                    <InputField label='First Name' placeholder='First Name' />
                    <InputField label='Last Name' placeholder='Last Name' />
                    <InputField label='Email' placeholder='Email' />
                    <InputField label='Job Title' placeholder='Job Title' />
                    <div className={styles.button}>
                        <h3>Submit</h3>
                        <div className={styles.icon}>
                            <Image alt='' fill src='/svgs/button_arrow_icon.svg' />
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <InputField label='Country' placeholder='Country' />
                    <Select options={mediaTypes} label='Media type'
                        defaultOption='Media type'
                    />
                    <InputField label='LinkedIn link' placeholder='LinkedIn link' />
                    <TextArea textClassName={styles.textarea_class} 
                        label='Brief Description of Coverage Plans' placeholder='Message' 
                    />
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
                        <h3>Send us an email</h3>
                        <Link href='mailto:info@africagovtechweek.com'>
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
                                <p>+234 810 287 5064, </p>
                            </Link>
                            <Link href='tel:+234 906 049 0067'>
                                <p>+234 906 049 0067</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MediaForm