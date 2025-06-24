'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ReadMorePosts, RichText } from '@/shared';
import { ChartLoader } from '@/shared/loaders';
import { useGetContentful } from '@/hooks';
import Image from 'next/image';
import styles from './BlogDetails.module.scss';

const BlogDetails = () => {
    const params = useParams();
    const { name } = params as { name: string };
    const { blogs, fetchBlogs } =  useGetContentful();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [blog, setBlog] = useState<any>(null);
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const fetchBlogDetails = () => {
            if (name && (blogs?.length ?? 0) > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const foundBlog = blogs?.find((blog: any) => 
                blog?.title?.toLowerCase().replace(/\s+/g, '-') === name
            )
            setBlog(foundBlog || null);
            }
        };
        fetchBlogDetails();
    }, [name, blogs]);
//   console.log('blog: ', blog);

  return (
    <main className={styles.blog_details_container}>
        {blog === null ? (
            <div className={styles.loader}>
                <ChartLoader />
            </div>
        ) : (
            <article>
                <header className={styles.header}>
                    <div className={styles.header_content}>
                        <h1>{blog?.title}</h1>
                        <h3>{blog?.author}</h3>
                        <h5>{blog?.publishedAt}</h5>
                    </div>
                </header>
                <div className={styles.divider}></div>
                <section className={styles.image_container}>
                    <div className={styles.image}>
                        <Image alt='image' sizes='100vw' fill
                        src={blog?.bannerImage ? `https:${blog?.bannerImage?.fields?.file?.url}` : `https:${blog?.thumbnail?.fields?.file?.url}`} 
                        // src={`/images/preview.png`}
                        />
                    </div>
                </section>

                <section className={styles.content}>
                    <RichText content={blog?.blogContent} />
                </section>
            </article>
        )}
        <ReadMorePosts />
        <div className={styles.divider_lg}></div>
    </main>
  )
}

export default BlogDetails