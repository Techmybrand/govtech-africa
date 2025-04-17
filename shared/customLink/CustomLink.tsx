"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './CustomLink.module.scss';
interface Props{
  href: string;
  label: string;
  className?: string;
  color?: 'default' | 'black'
  iconType?: 'sm_arrow' | 'lg_arrow'
}

const CustomLink = ({href, label, className, color = 'default', iconType = 'lg_arrow' }:Props) => {
  return (
    <Link data-type={color} className={`${styles.link} ${className}`} href={href}>
      <p>{label}</p>
      <span>
        <Image src={iconType === 'lg_arrow' ? "/svgs/arrow.svg" : "/svgs/arrow_sm.svg"} 
          fill alt=''
        />
      </span>
    </Link>
  )
}

export default CustomLink