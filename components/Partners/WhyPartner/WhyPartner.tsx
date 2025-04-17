import React from 'react';
import styles from './WhyPartner.module.scss'
import { DetailedPairDisplay } from '@/shared';

const WhyPartner = () => {
    const govtDetails: string[] = [
        'Showcase their digital governance achievements and position themselves as leaders in public sector innovation.',
        'Engage with cutting-edge solutions that address regulatory efficiency, public service delivery, and data-driven policymaking.',
        'Collaborate with tech innovators and development partners to co-create sustainable govtech solutions.',
        'Gain insights from global best practices, ensuring that policies are aligned with emerging digital trends.',
    ]
    const privateSectorDetails: string[] = [
        'Engage directly with policymakers and decision-makers looking for innovative govtech solutions.',
        'Showcase cutting-edge technologies in AI, cloud computing, digital identity, fintech, and cybersecurity.',
        'Unlock business opportunities through public-private partnerships and government procurement channels.',
        'Shape policy discussions that influence technology regulations and digital transformation roadmaps.',
    ]
    const organisationDetails: string[] = [
        'Support the co-creation of digital governance policies that enhance inclusivity, transparency, and service efficiency.',
        'Strengthen multi-stakeholder collaboration, ensuring that digital transformation aligns with sustainable development objectives.',
        'Fund and incubate govtech solutions, helping scale impactful innovations across multiple African countries.',
        'Champion digital inclusion and governance reforms, ensuring that technology adoption benefits all citizens, particularly marginalized communities.',
    ]
  return (
    <section className={styles.why_partner_container}>
        <div className={styles.why_partner_wrapper}>
            <div className={styles.header}>
                <h1>Why Partner with AGW’25?</h1>
                <div className={styles.header_subtext}>
                    <h3>
                        As Africa accelerates its digital transformation, Africa 
                        Govtech Week presents a unique opportunity for key 
                        stakeholders to shape the future of governance through 
                        technology.
                    </h3>
                    <h3>
                        Whether you are a government institution, a private 
                        sector leader, or an international development organization, 
                        this event offers a strategic platform to drive meaningful 
                        impact in the govtech ecosystem.
                    </h3>
                </div>
            </div>
            <DetailedPairDisplay image1='/images/government.png'
            className={styles.__wrapper}
                TextDetails1={
                    <div className={styles.government_details}>
                        <h2>For African Governments -</h2>
                        <h3>
                            For African governments, digital transformation is 
                            no longer optional—it is essential for efficient, 
                            transparent, and citizen-centric governance. 
                            By partnering with Africa Govtech Week, governments 
                            will:
                        </h3>
                        <ul>
                            {privateSectorDetails?.map((details: string, index: number) =>
                                <li key={index}>{details}</li>
                            )}
                        </ul>
                    </div>
                }
            />
            <div className={styles.divider}></div>
            <DetailedPairDisplay image1='/images/private_sector.png' 
                image2='/images/organisations.png' divider
                className={styles.wrapper}
                className2={styles.wrapper_reverse}
                TextDetails1={
                    <div className={styles.private_sector_details}>
                        <h2>2. For Private Sector</h2>
                        <h3>
                            The private sector plays a pivotal role in shaping 
                            the digital future of governance, offering the 
                            technologies and expertise that enable seamless, 
                            efficient, and secure public service delivery. 
                            Partnering with Africa Govtech Week provides 
                            businesses with the opportunity to:
                        </h3>
                        <ul>
                            {govtDetails?.map((details: string, index: number) =>
                                <li key={index}>{details}</li>
                            )}
                        </ul>
                    </div>
                }
                TextDetails2={
                    <div className={styles.organisations_details}>
                        <h2>For International Development Organizations</h2>
                        <h3>
                            For global and regional development organizations, 
                            supporting govtech initiatives is essential to 
                            achieving broader socio-economic development goals. 
                            By partnering with Africa Govtech Week, development 
                            partners can:
                        </h3>
                        <ul>
                            {organisationDetails?.map((details: string, index: number) =>
                                <li key={index}>{details}</li>
                            )}
                        </ul>
                    </div>
                }
            />
        </div>
    </section>
  )
}

export default WhyPartner; 