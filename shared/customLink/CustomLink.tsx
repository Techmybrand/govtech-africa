"use client"

import Image from 'next/image';
import Link from 'next/link'
import styles from './CustomLink.module.scss'

interface Props{
  href: string;
  label:string;
  className?:string;
  color?: 'default' | 'black'
}

const CustomLink = ({href, label, className, color = 'default'}:Props) => {
  return (
    <Link data-type={color} className={`${styles.link} ${className}`} href={href}>
      <p>{label}</p><span><Image src="/svgs/arrow.svg" fill alt='' /></span>
    </Link>
  )
}

export default CustomLink