import { NavLink, PrivacyPolicyProps, StatItem } from "@/interfaces";

export const navLinks: NavLink[] = [
	{
		label: "what we do",
		href: "what-we-do",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "technology",
				icon: "/svgs/link-main.svg",
				href: "/what-we-do",
				id: "technology",
				menu: [
					{
						label: "Customised Software Solutions",
						href: "/what-we-do",
						id: "customised",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Cybersecurity",
						href: "/what-we-do",
						id: "cybersecurity",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Cloud Services",
						href: "/what-we-do",
						id: "cloud",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Data and AI",
						href: "/what-we-do",
						id: "data",
						icon: "/svgs/link-ai.svg",
						external: false
					},
					{
						label: "Network Infrastructure Design & Implementation",
						href: "/what-we-do",
						id: "network",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Web3 & Blockchain Technology",
						href: "/what-we-do",
						id: "web3",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT Support Services (Remote support & Maintenance)",
						href: "/what-we-do",
						id: "it",
						icon: "/svgs/link-user.svg",
						external: false
					}
				]
			},
			{
				label: "consulting",
				icon: "/svgs/link-main.svg",
				href: "/what-we-do",
				id: "consulting",
				menu: [
					{
						label: "IT strategy consulting & advisory",
						href: "/what-we-do",
						id: "strategy",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT infrastructure procument & supply",
						href: "/what-we-do",
						id: "infrastructure",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "IT compliance & regulatory consulting",
						href: "/what-we-do",
						id: "compliance",
						icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "capacity building & Trainings",
						href: "/what-we-do",
						id: "capacity",
						icon: "/svgs/link-ai.svg",
						external: false
					},
					{
						label: "tech events design & delivery",
						href: "/what-we-do",
						id: "tech",
						icon: "/svgs/link-user.svg",
						external: false
					}
				]
			}
		]
	},
	{
		label: "who we are",
		href: "who-we-are",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "mission, Vision, values",
				icon: "/svgs/link-main.svg",
				href: "/who-we-are",
				id: "mision"
			},
			{
				label: "team",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "team"
			},
			{
				label: "partners",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "partners"
			},
			{
				label: "projects",
				icon: "/svgs/link-user.svg",
				href: "/who-we-are",
				id: "projects"
			}
		]
	},
	{
		label: "resources",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "insights",
				icon: "/svgs/link-main.svg",
				href: "/insights"
			},
			{
				label: "careers",
				icon: "/svgs/link-user.svg",
				href: "/careers"
			},
			{
				label: "GOVTECH AFRICA FOUNDATION (COMING SOON)",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	}
];

export const footerNavLink: NavLink[] = [
	{
		label: "footer 1",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Manage Cookie Preferences",
				icon: "/svgs/link-main.svg",
				href: "#"
			},
			{
				label: "Privacy Policy",
				icon: "/svgs/link-user.svg",
				href: "#"
			},
			{
				label: "Terms of Use",
				icon: "/svgs/link-ai.svg",
				href: "#"
			},
			{
				label: "Site Map",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	},
	{
		label: "footer 2",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Contact Us",
				icon: "/svgs/link-main.svg",
				href: "#"
			},
			{
				label: "Careers",
				icon: "/svgs/link-user.svg",
				href: "#"
			},
			{
				label: "About us",
				icon: "/svgs/link-ai.svg",
				href: "#"
			},
			{
				label: "Capabilities",
				icon: "/svgs/link-ai.svg",
				href: "#"
			}
		]
	}
];

export const socialMediaLinks = [
	{
		label: "twitter",
		href: "https://x.com/africagovtechwk",
		icon: "/svgs/twitter_dark.svg"
	},
	{
		label: "instagram",
		href: "https://www.instagram.com/africagovtechweek",
		icon: "/svgs/instagram_dark.svg"
	},
	{
		label: "linkedIn",
		href: "https://www.linkedin.com/company/africa-govtech-week/",
		icon: "/svgs/linkedin_dark.svg"
	}
];

export const footerNav = [
	{
		label: 'About',
		href: '/about-us'
	},
	{
		label: 'Partner/sponsor',
		href: '/partner'
	},
	{
		label: 'Book a stand',
		href: '#book-a-stand'
	},
	{
		label: 'Register',
		href: '/register'
	},
	{
		label: 'Contact us',
		href: '/contact'
	},
	{
		label: 'FAQ',
		href: '/faq'
	},
	{
		label: 'Privacy Policy',
		href: '/privacy-and-policy'
	},
]

export const FaqLists = [
	{
		title: 'General Information',
		QA: [
			{
				question: 'What is Africa Govtech Week?',
				answer: 'Africa Govtech Week is a premier conference that brings together government leaders, private sector innovators, development organizations and other participants to explore the future of digital governance in Africa. The event fosters collaboration, showcases cutting-edge government technology solutions, and drives discussions on policy, innovation, and public sector digital transformation.'
			},
			{
				question: 'When and where will Africa Govtech Week take place?',
				answer: 'The event will take place over the course of a week at Nigeria’s Federal Capital - Abuja.',
			},
			{
				question: 'Is there a dress code?',
				answer: 'Smart business attire.'
			},
			{
				question: 'Who should attend Africa Govtech Week?',
				answer: 'The event is designed for policymakers, government officials, technology leaders, regulators, entrepreneurs, academia, development organizations and other participants interested in driving digital transformation in governance.'
			},
		]
	},
	{
		title: 'Registration & Participation',
		QA: [
			{
				question: 'When will registration for Africa Govtech Week 2025 open?',
				answer: 'Tickets for Africa Govtech Week 2025 are currently on sale through the official website.'
			},
			{
				question: 'How do I register for the event?',
				answer: 'Registration can be completed online through the official Africa Govtech Week website. Simply visit www.africagovtechweek.com and follow the steps to secure your spot.',
			},
			{
				question: 'Is there a registration fee?',
				answer: 'Yes, there are different registration fees for Delegate and VIP attendees. Visit the registration page for full details.'
			},
			{
				question: 'Can I purchase my ticket onsite the day of the event?',
				answer: 'Yes you can, come early so you are not disappointed'
			},
			{
				question: 'Can I attend the event virtually?',
				answer: 'No, this event is in-person only. However, daily recaps will be available on the website.'
			},
			{
				question: 'What is the refund policy if I need to cancel my registration?',
				answer: 'Full refunds are available for cancellation requests made within 48 hours of receipt of the completed registration form subject to payment of a ten percent refund processing fee. Cancellation requests made outside the 48-hour window or less than 30 days prior to the start of the event will not be eligible for a refund.',
			},
			{
				question: 'How do I request a refund?',
				answer: 'To request a refund, please submit a cancellation request to info@africagovtechweek.com with your registration details. Eligible refunds will be processed within 10 business days of receipt of the cancellation request.'
			},
			{
				question: 'Can I transfer my registration instead of cancelling?',
				answer: 'Yes! If you are unable to attend, you may transfer your registration to a colleague or another eligible participant at no extra cost at least seven days before the date of the event. Any application for transfer of registration to another person received later than seven days to before the date of the event will only be considered at additional but minimal costs.'
			},
			{
				question: 'Are there exceptions to the refund policy?',
				answer: 'Refund exceptions may be considered in cases of emergencies. Please contact us directly to discuss your situation.'
			},
			{
				question: 'I am an overseas participant and need a letter of invitation for visa application. What is the procedure?',
				answer: 'Please email info@africagovtechweek.com to request a letter of invitation.',
			},
		]
	},
	{
		title: 'Speaking & Sponsorship Opportunities',
		QA: [
			{
				question: 'How can I apply to speak at Africa Govtech Week?',
				answer: 'We welcome applications from thought leaders, policymakers, and industry experts. Interested speakers should submit their proposals via info@africagovtechweek.com detailing their expertise as aligned with the event programme.'
			},
			{
				question: 'How can my company become a sponsor or exhibitor?',
				answer: 'Organizations looking to partner with Africa Govtech Week can explore our sponsorship and exhibition packages. To receive a sponsorship prospectus, visit the Partnership Page or contact our team at info@africagovtechweek.com',
			},
		]
	},
	{
		title: 'Special Highlights & Competitions',
		QA: [
			{
				question: 'What is Gov-a-thon Africa?',
				answer: 'Gov-a-thon Africa is a high-stakes hackathon where developers, startups, and innovators collaborate to create groundbreaking digital solutions tailored for public sector transformation. The competition runs alongside Africa Govtech Week, with winning teams receiving funding, mentorship, and potential government adoption of their solutions.'
			},
			{
				question: 'How can I participate in Gov-a-thon Africa?',
				answer: 'Interested teams can apply online via the Gov-a-thon Africa Page, detailing their expertise and proposed govtech solution. Selected team finalists will compete in real-time challenges during the event.',
			},
			{
				question: 'What is the Africa Govtech Co-Creation Lab?',
				answer: 'The Co-Creation Lab is a collaborative initiative that convenes policymakers, innovators, and researchers to develop Africa’s first Govtech Action Plan. The lab starts ahead of the event and culminates in a high-profile presentation during the conference.'
			},
		]
	},
	{
		title: 'Logistics & Event Experience',
		QA: [
			{
				question: 'Will there be networking opportunities at the event?',
				answer: 'Absolutely! Africa Govtech Week is structured to maximize networking through industry meetups, side engagements, VIP receptions, and matchmaking sessions between stakeholders.'
			},
			{
				question: 'Will meals and accommodation be provided?',
				answer: `While meals will be available for Delegate and VIP attendees, accommodation is not included. However, we have partnered with top hotels offering discounted rates for attendees. Send us an email at info@africagovtechweek.com or call us on +234 810 287 5064  to get you set up.`,
			},
		]
	},
	{
		title: 'Event Content & Themes',
		QA: [
			{
				question: 'What are the key themes of Africa Govtech Week?',
				answer: 'The event focuses on digital transformation in governance, covering topics such as AI in public service, data-driven decision-making, cybersecurity, digital identity, smart infrastructure, and regulatory technology. Sessions will address both high-level policy considerations and technical solutions tailored to Africa’s public sector.'
			},
			{
				question: 'Will the sessions be technical or policy-driven?',
				answer: 'Africa Govtech Week will offer a balance between policy-focused discussions and technical deep-dives. The keynote addresses and main panels will emphasize governance, policy, and strategy, while breakout sessions and the Gov-a-thon Africa will focus on practical, solution-driven conversations for technologists and innovators.',
			},
			{
				question: 'Will there be country-specific discussions?',
				answer: 'Yes. There will be dedicated country showcases where governments can present their digital transformation journeys, share best practices, and discuss collaborative opportunities.'
			},
			{
				question: 'Will there be post event recordings?',
				answer: 'Yes. Key sessions will be recorded and made available on the Media Page post-event.'
			},
			{
				question: 'Will the event support bilingual participation?',
				answer: 'Yes. Key sessions will have simultaneous interpretation in English and French to accommodate Africa’s diverse linguistic landscape.'
			},
		]
	},
	{
		title: 'Government Participation & Policy Implications',
		QA: [
			{
				question: 'How will Africa Govtech Week influence policy development?',
				answer: 'The event serves as a policy-shaping platform where governments can exchange ideas, learn from best practices, and develop actionable recommendations. The outcomes from sessions—including the Govtech Action Plan—will provide strategic direction for Africa’s public sector digitization.'
			},
			{
				question: 'Can government representatives showcase their digital transformation initiatives?',
				answer: 'Yes. There will be government showcase sessions where officials can present their digital public infrastructure projects, share success stories, and discuss challenges with industry experts and international partners. We encourage interested government agencies to take advantage of our sponsorship and exhibition packages for more guaranteed visibility.',
			},
		]
	},
	{
		title: 'International Development & Investment',
		QA: [
			{
				question: 'How can international organizations get involved?',
				answer: 'Development agencies, donors, and multilateral organizations can participate as partners, speakers, or sponsors. The event provides a platform to align international support with Africa’s digital governance needs. Visit the Partnership Page for more details.'
			},
			{
				question: 'Are there investment opportunities in Govtech through this event?',
				answer: 'Yes. Africa Govtech Week serves as a bridge between governments and investors, facilitating discussions on Govtech funding, public-private partnerships, and venture-backed innovation in digital governance.',
			},
		]
	},
	{
		title: 'Post-Event Impact & Continuity',
		QA: [
			{
				question: 'What happens after the conference?',
				answer: 'The outcomes of Africa Govtech Week will be documented in a post-event Govtech Report, summarizing key insights, policy recommendations, and next steps for stakeholders. The Africa Govtech Alliance will continue the momentum by fostering cross-sector collaboration beyond the event.'
			},
			{
				question: 'How can I stay engaged after the event?',
				answer: 'Attendees can stay engaged by following the event pages on social media. The Africa Govtech Alliance will also serve as a hub for continued dialogue, capacity-building, and project implementation across the continent.',
			},
		]
	}
]

export const inquiryTypes = [
	{ label: 'Sponsorship/Opportunities/Exhibibition', value: 'sponsorship/opportunities/exhibition' },
	{ label: 'Speaking Opportunities', value: 'speaking opportunities' },
	{ label: 'General Inquiry', value: 'general inquiry' },
	{ label: 'Media and Press', value: 'media and press' },
];

export const stats: StatItem[] = [
    { value: 200, label: 'African Public and Private Sector Leaders' },
    { value: 3000, label: 'VIP and Delegate Participants' },
    { value: 100, label: 'Exhibiting companies' },
    { value: 15, label: 'Technical and commercial sessions/forums/fireside chats' },
    { value: 5, label: 'Days of week-long engagements' },
    { value: 3, label: 'days of core conferencing, exhibition, and networking parleys' },
];

export const govtDetails: string[] = [
	'Showcase their digital governance achievements and position themselves as leaders in public sector innovation.',
	'Engage with cutting-edge solutions that address regulatory efficiency, public service delivery, and data-driven policymaking.',
	'Collaborate with tech innovators and development partners to co-create sustainable govtech solutions.',
	'Gain insights from global best practices, ensuring that policies are aligned with emerging digital trends.',
]

export const organisationDetails: string[] = [
	'Support the co-creation of digital governance policies that enhance inclusivity, transparency, and service efficiency.',
	'Strengthen multi-stakeholder collaboration, ensuring that digital transformation aligns with sustainable development objectives.',
	'Fund and incubate govtech solutions, helping scale impactful innovations across multiple African countries.',
	'Champion digital inclusion and governance reforms, ensuring that technology adoption benefits all citizens, particularly marginalized communities.',
]

export const privateSectorDetails: string[] = [
	'Engage directly with policymakers and decision-makers looking for innovative govtech solutions.',
	'Showcase cutting-edge technologies in AI, cloud computing, digital identity, fintech, and cybersecurity.',
	'Unlock business opportunities through public-private partnerships and government procurement channels.',
	'Shape policy discussions that influence technology regulations and digital transformation roadmaps.',
]

export const privacyPolicyData: PrivacyPolicyProps[] = [
	{
		title: ' Legal Basis for Processing',
		headerText: 'We process your personal data on the following legal bases:',
		content: [
			{
				title: '',
				body: [
					'Your consent, where required',
					'Performance of a contract (e.g., event registration)',
					'Legal Obligation',
					'Our legitimate interest, such as enhancing event experiences and securing our systems'
				]
			}
		]
	},
	{
		title: ' Information We Collect',
		headerText: 'We collect several types of information to provide and improve our services:',
		content: [
			{
				title: 'a. Personal Information',
				body: [
					'Full name',
					'Email address',
					'Phone number',
					'Job title and organization',
					'Government or corporate affiliation',
					'Billing or payment information (if applicable)',
					'Event registration and participation details',
				]
			},
			{
				title: 'b. Non-Personal Information',
				body: [
					'IP address',
					'Browser type and version',
					'Referring website',
					'Device type, operating system',
					'Pages visited, time spent on pages, and other analytical data',
				]
			},
			{
				title: 'c. Cookies and Tracking Technologies',
				body: [
					'Session cookies',
					'Persistent cookies',
					'Third-party analytics cookies  (e.g., Google Analytics)',
					'Pixel tags and web beacons',
				]
			}
		]
	},
	{
		title: 'How We Use Your Information',
		headerText: 'Your information is used to:',
		content: [
			{
				title: '',
				body: [
					'Register and manage your event participation',
					'Send event updates, reminders, and newsletters (with consent)',
					'Facilitate networking through event matchmaking platforms',
					' Enable access to event-specific features such as speaker sessions, partner showcases, and interactive content',
					'Improve site usability and user engagement analytics',
					'Respond to customer inquiries and support requests',
					'Comply with legal obligations or enforce contractual rights',
				]
			}
		]
	},
	{
		title: 'Data Sharing and Disclosure',
		headerText: 'We do not sell your personal data. We may share your data with:',
		content: [
			{
				title: '',
				body: [
					'Event sponsors and partners for networking purposes (with your explicit consent)',
					'Third-party service providers under Data Processing Agreements (DPAs)',
					'Data analytics platforms to analyze usage patterns',
					'Legal authorities, government agencies, or law enforcement where legally required',
					'We ensure that any third parties handling your data comply with GDPR and NDPR obligations.',
				]
			}
		]
	},
	{
		title: 'Data Retention',
		headerText: 'Your personal data is retained only as long as necessary for the purpose for which it was collected or as required by law. Once the retention period expires, your data is securely deleted or anonymized.',
		content: []
	},
	{
		title: 'Your Rights',
		headerText: 'You have the following rights:',
		content: [
			{
				title: '',
				body: [
					'Right to access your personal data',
					'Right to rectification of inaccurate or incomplete data',
					'Right to erasure(right to be forgotten)',
					'Right to restrict processing',
					'Right to data portability',
					'Right to object to processing based on legitimate interest or direct marketing',
					'Right to withdraw consent at any time',
				]
			}
		]
	},
	{
		title: 'Data Security',
		headerText: 'We implement appropriate technical and organizational measures, including:',
		content: [
			{
				title: '',
				body: [
					'SSL encryption',
					'Access controls and authentication',
					'Encrypted backups',
					'Regular security audits and vulnerability assessments',
				]
			}
		]
	},
	{
		title: 'International Data Transfers',
		headerText: 'Where we transfer your personal data outside Nigeria or the European Economic Area (EEA), we implement safeguards such as: ',
		content: [
			{
				title: '',
				body: [
					'EU Standard Contractual Clauses',
					'Adequacy decisions by the European Commission',
					'Binding Corporate Rules (where applicable)',
				]
			}
		]
	},
	{
		title: 'Changes to This Policy',
		headerText: 'We may update this Privacy Policy to comply with changes in laws or our practices. Updates will be reflected on this page with a new "Effective Date."',
		content: []
	},
]

export const termsOfUseData = [
    {
        title: 'Acceptance of Terms',
        headerText: 'Use of the Website constitutes your acceptance of these terms. If you disagree, please refrain from using the Website.',
        content: []
    },
    {
        title: 'Use of the Website',
        headerText: 'You agree to:',
        content: [
            {
                title: '',
                body: [
                    'Use the Website for lawful, non-commercial purposes',
                    'Provide accurate and up-to-date information',
                    'Not engage in disruptive, harmful, or illegal activity'
                ]
            },
            {
                title: 'Prohibited activities include:',
                body: [
                    'Attempting unauthorized access to servers, data or networks.',
                    'Violation of intellectual property rights',
                    'Collection or misuse of personal data'
                ]
            }
        ]
    },
    {
        title: 'Event Registration and Payments',
        headerText: 'By registering for events or submitting data, you agree to provide accurate personal and payment information. Tickets are non-transferable unless specified. Refund policies will be clearly outlined on the ticketing page.',
        content: []
    },
    {
        title: 'Intellectual Property',
        headerText: 'All site content (text, images, trademarks, recordings) is the exclusive property of GovTech Africa or its partners. You agree not to use or replicate any material without written consent.',
        content: []
    },
    {
        title: 'User-Generated Content',
        headerText: 'You may have the ability to post or submit content to community forums, surveys, or feedback forms. By submitting content, you:',
        content: [
            {
                title: '',
                body: [
                    'Represent that you own or control rights to such content.',
                    'Grant us a license to use, edit, reproduce, and display such content.'
                ]
            },
            {
                title: '',
                body: [
                    'We reserve the right to remove content deemed offensive, unlawful, or inappropriate.'
                ]
            }
        ]
    },
    {
        title: 'Disclaimer of Warranties',
        headerText: 'We provide the Website on an "as is" basis and disclaim all warranties including:',
        content: [
            {
                title: '',
                body: [
                    'That the website will be available without interruption',
                    'That it will be error-free or free of viruses',
                    'That any data shared is fully secured'
                ]
            }
        ]
    },
    {
        title: 'Limitation of Liability',
        headerText: 'We are not liable for any indirect, incidental, or consequential damages arising from your use of the Website.',
        content: []
    },
    {
        title: 'External Links',
        headerText: 'The Website may include links to external sites. We are not responsible for the privacy practices or content of third-party sites linked from our platform.',
        content: []
    },
    {
        title: 'Termination',
        headerText: 'We reserve the right to suspend or terminate access to the Website for any reason, without prior notice.',
        content: []
    },
    {
        title: 'Governing Law and Jurisdiction',
        headerText: 'These terms shall be governed by the laws of the Federal Republic of Nigeria. Disputes shall be subject to the exclusive jurisdiction of Nigerian courts.',
        content: []
    }
];

export const cookiesPolicyData = [
    {
        title: 'What Are Cookies?',
        headerText: 'Cookies are small text files stored in your browser or device by websites you visit to track, personalize, and enhance your user experience.',
        content: []
    },
    {
        title: 'Lawful Basis for Using Cookies',
        headerText: 'We use cookies based on:',
        content: [
            {
                title: '',
                body: [
                    'Your consent (via banner or settings)',
                    'Our legitimate interest to ensure website functionality'
                ]
            }
        ]
    },
    {
        title: 'Types of Cookies We Use',
        headerText: '',
        content: [
            {
                title: 'a. Essential Cookies',
                body: [
                    'These are required for basic site operations like navigation and access to secure areas.'
                ]
            },
            {
                title: 'b. Analytics and Performance Cookies',
                body: [
                    'Help us measure and understand how users interact with our site. They help us improve design and content based on user behaviour.'
                ]
            },
            {
                title: 'c. Functional Cookies',
                body: [
                    'These cookies remember choices you make such as region, language or session preferences.'
                ]
            },
            {
                title: 'd. Marketing and Third-Party Cookies',
                body: [
                    'These are used to deliver ads relevant to your interests and integrate with social platforms.'
                ]
            }
        ]
    },
    {
        title: 'Third-Party Services',
        headerText: 'We may allow trusted third parties (e.g., Google, YouTube, LinkedIn) that may set cookies on your device. These providers have their own privacy policies.',
        content: []
    },
    {
        title: 'Managing Cookies',
        headerText: 'You may:',
        content: [
            {
                title: '',
                body: [
                    'Accept or reject cookies using our cookie banner',
                    'Change your cookie settings at any time through your browser',
                    'Withdraw consent without affecting the lawfulness of prior processing'
                ]
            }
        ]
    },
    {
        title: 'Data Sharing via Cookies',
        headerText: 'Data collected via cookies may be shared with:',
        content: [
            {
                title: '',
                body: [
                    'Analytics service providers',
                    'Advertising partners (only with your consent)'
                ]
            }
        ]
    },
    {
        title: 'Updates to This Policy',
        headerText: 'We may revise this policy to reflect changes in our cookie usage or applicable regulations. Any update will be posted with an updated Effective Date.',
        content: []
    }
];