'use client';
import React, { useState } from 'react';
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
}

// const linkMapping: { [key: string]: string } = {
//   'website': 'https://www.africagovtechweek.com',
//   'contact': '/contact',
//   'www.africagovtechweek.com': 'https://www.africagovtechweek.com',
//   'info@africagovtechweek.com': 'mailto:info@africagovtechweek.com',
//   '+2348102875064': 'tel:+234 810 287 5064'
// };
// new line
// const parseAnswerWithLinks = (answer: string): React.JSX.Element => {
//   const words = Object.keys(linkMapping);
//   const escapedWords = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
//   const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');
//   const parts = answer.split(regex);

//   return (
//     <>
//       {parts.map((part, index) => {
//         if (words.includes(part)) {
//           return (
//             <Link key={index} href={linkMapping[part]}
//               // target="_blank"
//               // rel="noopener noreferrer"
//               className={styles.faq_link}
//             >
//               {part}
//             </Link>
//           );
//         }
//         return <span key={index}>{part}</span>;
//       })}
//     </>
//   );
// };

const FaqCard = ({ header, QA }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const OpenAccordion = (index: number) => {
    setIsOpen(isOpen === index ? null : index)
  };
  return (
    <div className={styles.faq_card_container}>
      <h1>{header}</h1>
      <div className={styles.q_and_a_wrapper}>
        {QA.map((data: QAProps, index: number) =>
          <Accordion key={index} isOpen={isOpen === index}
            title={data?.question} onToggle={() => OpenAccordion(index)}
          >
            <div className={styles.answers_container}>
              <p>
                {parseAnswerWithLinks(data?.answer)}
              </p>
            </div>
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default FaqCard