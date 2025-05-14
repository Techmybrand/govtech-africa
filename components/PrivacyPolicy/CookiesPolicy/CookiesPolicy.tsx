import React from 'react';
import { ContentProps, PrivacyPolicyProps } from '@/interfaces';
import { cookiesPolicyData } from '@/mock/navLists.mock';
import styles from './CookiesPolicy.module.scss';

const CookiesPolicy = () => {
  return (
    <div className={styles.cookies_policy_section}>
      <h1>Cookies Policy</h1>
      <h3>
        This Cookies Policy outlines how AfricaGovTechWeek.com uses 
        cookies and similar technologies to recognize users and enhance 
        their experience.
      </h3>
      
      <div className={styles.policies_container}>
        {cookiesPolicyData?.map((item: PrivacyPolicyProps, index: number) =>
          <div key={index} className={styles.policies}>
            <h2>{`${index + 1}. ${item?.title}`}</h2>
            <h4>{item?.headerText}</h4>
            {item?.content?.length > 0 && (
              item?.content?.map((content: ContentProps, index: number) =>
                <div key={index} className={styles.policies_content}>
                  {content?.title && (
                    <h3>{content?.title}</h3>
                  )}
                  <ul>
                    {content?.body?.map((body: string, index: number) =>
                      <li key={index}>{body}</li>
                    )}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CookiesPolicy