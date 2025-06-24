'use client';
import React, { useEffect } from 'react';
import { BlogCard, Button, CustomLink } from '@/shared';
import { usePathname, useRouter } from 'next/navigation';
import { useGetContentful } from '@/hooks';
import { ChartLoader } from '@/shared/loaders';
import { BlogDetailsProps } from '@/interfaces';
import Image from 'next/image';
import styles from './Registration.module.scss';

const Registration = () => {
  const path = usePathname();
  const router = useRouter();
  const isMediaPage = path.includes('/media');
  const { blogs, fetchBlogs } =  useGetContentful();
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Registration