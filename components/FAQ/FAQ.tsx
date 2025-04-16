import React from 'react';
import { FaqLists } from '@/mock/navLists.mock';
import FaqCard from './FaqCard/FaqCard';
import styles from './FAQ.module.scss';

interface QAProps {
    question: string
    answer: string
}
interface FaqProps {
    title: string
    QA: QAProps[]
}

const FAQ = () => {
  return (
    <section className={styles.faq_container}>
        <div className={styles.header}>
            <h1>Frequently Asked</h1>
            <h1>Questions (FAQs)</h1>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.faq__wrapper}>
            {FaqLists.map((data: FaqProps, index: number) =>
                <FaqCard key={index}
                    QA={data?.QA}
                    header={data?.title}
                />
            )}
        </div>
    </section>
  )
}

export default FAQ