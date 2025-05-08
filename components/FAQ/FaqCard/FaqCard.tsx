'use client';
import React from 'react';
import { Accordion } from '@/shared';
import { parseAnswerWithLinks } from '@/utils';
import styles from './FaqCard.module.scss';
interface QAProps {
  question: string
  answer: string
}
interface FaqCardProps {
  header: string
  QA: QAProps[]
  sectionIndex: number;
  isOpenId?: string | null;
  onToggle: (questionId: string) => void;
}

const FaqCard = ({ header, QA, sectionIndex, isOpenId, onToggle }: FaqCardProps) => {

  return (
    <div className={styles.faq_card_container}>
      <h1>{header}</h1>
      <div className={styles.q_and_a_wrapper}>
        {QA.map((data: QAProps, index: number) => {
          const questionId = `${sectionIndex}-${index}`;
          return (
          <Accordion key={questionId} isOpen={isOpenId === questionId}
            title={data?.question} 
            onToggle={() => onToggle(questionId)}
          >
            <div className={styles.answers_container}>
              <p>
                {parseAnswerWithLinks(data?.answer)}
              </p>
            </div>
          </Accordion>
          )
        }
        )}
      </div>
    </div>
  )
}

export default FaqCard