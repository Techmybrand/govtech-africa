'use client';
import React, { useEffect, useState } from 'react';
import { BlogCard, Button } from '@/shared';
import { useGetContentful } from '@/hooks';
import { BlogDetailsProps } from '@/interfaces';
import { ChartLoader } from '@/shared/loaders';
import { formatDate } from '@/utils';
import styles from './Media.module.scss';

const Media = () => {
    const [numberOfPosts, setNumberOfPosts] = useState<number>(9);
    const handleSeeMore = () => {
        setNumberOfPosts((prevNumberOfPosts: number) => prevNumberOfPosts + 3)
    }
    const { blogs, fetchBlogs } =  useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <section id='blog' className={styles.blog_section}>
        <div data-length={blogs && blogs?.length > 9} className={styles.media_content}>
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
                            blogs?.slice(0, numberOfPosts)?.map((blog: BlogDetailsProps, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <BlogCard 
                                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                            title={blog?.title}
                                            date={blog?.date ? formatDate(blog?.date) : blog?.publishedAt}
                                        />
                                    </React.Fragment>
                                )
                            }
                        )}
                    </React.Fragment>
                )
            )}
        </div>
        {(((blogs?.length ?? 0) > 9) && (blogs?.length !== numberOfPosts)) && (
            <Button onClick={handleSeeMore} className={styles.read_more_btn}>
                <h3>Read more</h3>
            </Button>
        )}
        <div className={styles.divider}></div>
    </section>
  )
}

export default Media