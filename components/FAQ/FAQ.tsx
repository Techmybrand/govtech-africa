import React from 'react';
import styles from './FAQ.module.scss';
import { FaqLists } from '@/mock/navLists.mock';
import FaqCard from './FaqCard/FaqCard';

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
        <h1>Frequently Asked</h1>
        <h1>Questions (FAQs)</h1>
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