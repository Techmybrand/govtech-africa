import React from 'react';
import styles from './TermsOfUse.module.scss';
import { ContentProps, PrivacyPolicyProps } from '@/interfaces';
import { termsOfUseData } from '@/mock/navLists.mock';

const TermsOfUse = () => {
  return (
    <div className={styles.terms_of_use_section}>
      <h1>Terms of use</h1>
      <h3>Effective Date: 12th May 2025</h3>
      <h3>
        By accessing or using Africagovtechweek.com, 
        you agree to be bound by these Terms of Use and our Privacy and 
        Cookies Policies. Please read the terms carefully.
      </h3>

      <div className={styles.policies_container}>
        {termsOfUseData?.map((item: PrivacyPolicyProps, index: number) =>
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

export default TermsOfUse