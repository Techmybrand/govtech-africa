'use client';
import React from 'react';
import { formatURL } from '@/utils';
import { BlogCardProps } from '@/interfaces';
import { Button } from '@/shared';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCard.module.scss';

const BlogCard = ({ title, image, date }: BlogCardProps) => {

  return (
    <article className={styles.blog_card_container}>
      <Link href={`/media/${formatURL(title)}`} className={styles.card_link}>
        <div className={styles.blog_thumbnail}>
          <Image alt='thumbnail' sizes='100vw' fill src={image} />
        </div>
        <Button className={styles.btn}>
          <h3>Update</h3>
        </Button>
        <div className={styles.blog_content}>
          <div className={styles.blog_header}>
            <h1>{title}</h1>
          </div>
          <div className={styles.date_container}>
            <h6>{date}</h6>
            <div className={styles.arrow}>
              <Image alt='arrow' fill src='/svgs/arrow.svg' />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard