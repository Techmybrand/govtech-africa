'use client';
import React from 'react';
import { BlogCard, Button, CustomLink } from '@/shared';
import Image from 'next/image';
import styles from './Registration.module.scss';
import { usePathname, useRouter } from 'next/navigation';

const Registration = () => {
  const path = usePathname();
  const router = useRouter();
  const isMediaPage = path.includes('/media');
  return (
    <section id='register' className={styles.registration_container}>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <h2>Register to secure your spot</h2>
            <h3>
              {`Be part of Africa's most transformative digital governance 
              experience—connect with government leaders & changemakers, 
              explore cutting-edge innovations, and help shape the 
              continent's Govtech future`}
            </h3>
            <div className={styles.divider}></div>
            <CustomLink label='Register' href='/register' subType='black'
              className={styles.custom_link_class}
            />
          </div>
          <div className={styles.content_image}>
            <Image alt='' fill src='/svgs/register.svg' />
          </div>
        </div>
      </div>
      {!isMediaPage && (
        <div className={styles.media_container}>
          <div className={styles.media_header}>
            <h2>{`What's going on with AGW`}</h2>
            <Button onClick={() => router.push('/media')} className={styles.media_button}>
              <h3>See More</h3>
            </Button>
          </div>
          <div className={styles.media_content}>
            {[1, 2, 3].map((item: number) =>
            <React.Fragment key={item}>
              <BlogCard
                title='South Africa’s SOLmate doubles users to 100,000 as eWallet surge drives growth'
                image='/images/blog.png'
                date='20th May 2025'
              />
            </React.Fragment>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Registration