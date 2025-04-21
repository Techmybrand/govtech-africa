import React from 'react';
import { Accordion } from '@/shared';
import styles from './FaqCard.module.scss';
interface QAProps {
  question: string
  answer: string
}
interface FaqCardProps {
  header: string
  QA: QAProps[]
}

const FaqCard = ({ header, QA }: FaqCardProps) => {
  return (
    <div className={styles.faq_card_container}>
      <h1>{header}</h1>
      <div className={styles.q_and_a_wrapper}>
        {QA.map((data: QAProps, index: number) =>
          <Accordion key={index} title={data?.question}>
            <div className={styles.answers_container}>
              <p>{data?.answer}</p>
            </div>
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default FaqCard