'use client';
import React, { useEffect } from 'react';
import { BlogCard } from '@/shared';
import { useGetContentful } from '@/hooks';
import { BlogDetailsProps } from '@/interfaces';
import { ChartLoader } from '../loaders';
import styles from './ReadMorePosts.module.scss'

const ReadMorePosts = () => {
    const { blogs, fetchBlogs } =  useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className={styles.media_container}>
        <div className={styles.media_header}>
            <h2>Read Next</h2>
        </div>
        <div className={styles.media_content}>
            {/* {blogs?.map((blog: BlogDetailsProps, index: number) =>
                <React.Fragment key={index}>
                    <BlogCard
                        title='South Africa SOLmate doubles users to 100,000 as eWallet surge drives growth'
                        image='/images/blog.png'
                        date='20th May 2025'
                    />
                </React.Fragment>
            )} */}
            {blogs === null ? (
                <div className={styles.loader}>
                    <ChartLoader />
                </div>
            ) : (
                blogs?.length === 0 ? (
                    <p>No blogs available at the moment.</p>
            ) : (
                    <React.Fragment>
                        {
                            blogs?.slice(0, 3)?.map((blog: BlogDetailsProps, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <BlogCard 
                                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                            title={blog?.title}
                                            date={blog?.publishedAt}
                                        />
                                    </React.Fragment>
                                )
                            }
                        )}
                    </React.Fragment>
                )
            )}
        </div>
    </div>
  )
}

export default ReadMorePosts