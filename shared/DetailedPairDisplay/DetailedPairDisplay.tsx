import React from 'react';
import styles from './DetailedPairDisplay.module.scss'
import Image from 'next/image';

interface Props {
    image1: string
    image2?: string
    TextDetails1: React.ReactNode
    TextDetails2?: React.ReactNode
    reverseTopSection?: boolean
    reverseBottomSection?: boolean
    divider?: boolean
    className?: string
    className2?: string
}

const DetailedPairDisplay = ({image2, image1, TextDetails1, TextDetails2, 
    divider, reverseBottomSection = false, reverseTopSection = false,
    className, className2}: Props) => {
  return (
    <div className={styles.detailed_pair_display_container}>
        <div data-type={reverseTopSection} className={`${styles.wrapper} ${className}`}>
            <div className={styles.image_wrapper}>
                <Image src={image1} fill alt="Detailed Pair Display" />
            </div>
            <div className={styles.text_details}>
                {TextDetails1}
            </div>
        </div>
        <div data-type={divider} className={styles.divider}></div>
        {TextDetails2 && (
            <div data-type={reverseBottomSection} className={`${styles.wrapper_reverse} ${className2}`}>
                <div className={styles.text_details}>
                    {TextDetails2}
                </div>
                <div className={styles.image_wrapper}>
                    {image2 && (
                        <Image src={image2} fill alt="Detailed Pair Display" />
                    )}
                </div>
            </div>
        )}
        <div></div>
    </div>
  )
}

export default DetailedPairDisplay