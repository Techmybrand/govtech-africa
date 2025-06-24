'use client';
import React, { useState } from 'react';
import { BlogCard, Button } from '@/shared';
import styles from './Media.module.scss';

const Media = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numberOfPosts, setNumberOfPosts] = useState<number>(9);
  const handleSeeMore = () => {
    setNumberOfPosts((prevNumberOfPosts: number) => prevNumberOfPosts + 3)
  }
  return (
    <section id='blog' className={styles.blog_section}>
        <div className={styles.media_content}>
            {array?.slice(0, numberOfPosts).map((item: number) =>
                <React.Fragment key={item}>
                    <BlogCard
                        title='South Africa SOLmate doubles users to 100,000 as eWallet surge drives growth'
                        image='/images/blog.png'
                        date='20th May 2025'
                    />
                </React.Fragment>
            )}
        </div>
        {(array?.length > 9 && array?.length !== numberOfPosts) && (
            <Button onClick={handleSeeMore} className={styles.read_more_btn}>
                <h3>Read more</h3>
            </Button>
        )}
        <div className={styles.divider}></div>
    </section>
  )
}

export default Media