import React from 'react';
import styles from './PrivacyPolicy.module.scss';
import TermsOfUse from './TermsOfUse/TermsOfUse';
import CookiesPolicy from './CookiesPolicy/CookiesPolicy';
import { privacyPolicyData } from '@/mock/navLists.mock';
import { ContentProps, PrivacyPolicyProps } from '@/interfaces';

const PrivacyPolicy = () => {

  return (
    <section className={styles.privacy_policy_section}>
      <div className={styles.privacy_policy_content}>
        <h1>Privacy Policy</h1>
        <h3>Effective Date: 12th May 2025</h3>
        <h3>
          Welcome to AfricaGovTechWeek.com ("we," "our," or "us"). 
          We are committed to protecting your personal data and respecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you visit our website or engage with our services.
        </h3>
        <div className={styles.policies_container}>
          {privacyPolicyData?.map((item: PrivacyPolicyProps, index: number) =>
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
      <TermsOfUse />
      <CookiesPolicy />
    </section>
  )
}

export default PrivacyPolicy