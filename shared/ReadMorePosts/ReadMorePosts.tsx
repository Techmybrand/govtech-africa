import React from 'react';
import { BlogCard } from '@/shared';
import styles from './ReadMorePosts.module.scss'

const ReadMorePosts = () => {
  return (
    <div className={styles.media_container}>
        <div className={styles.media_header}>
            <h2>Read Next</h2>
        </div>
        <div className={styles.media_content}>
            {[1, 2, 3].map((item: number) =>
                <React.Fragment key={item}>
                    <BlogCard
                        title='South Africa SOLmate doubles users to 100,000 as eWallet surge drives growth'
                        image='/images/blog.png'
                        date='20th May 2025'
                    />
                </React.Fragment>
            )}
        </div>
    </div>
  )
}

export default ReadMorePosts