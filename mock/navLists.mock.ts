import { NavLink } from "@/interfaces";

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
		href: '#register'
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
		href: '/'
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
				question: 'Can I transfer my registration instead of canceling?',
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
				question: 'Will there be country-specific discussions?',
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
	{ label: 'Sponsorship Opportunities', value: 'sponsorship opportunities' },
	{ label: 'Speaking Opportunities', value: 'speaking opportunities' },
	{ label: 'Exhibition Opportunities', value: 'exhibition opportunities' },
	{ label: 'Partnership Opportunities', value: 'partnership opportunities' },
	{ label: 'General Inquiry', value: 'general inquiry' },
	{ label: 'Media and Press', value: 'media and press' },
	{ label: 'Volunteer Opportunities', value: 'volunteer opportunities' },
	{ label: 'Technical Support', value: 'technical support' },
	{ label: 'Event Registration Assistance', value: 'event registration assistance' },
	{ label: 'Feedback or Suggestions', value: 'feedback or suggestions' },
	{ label: 'Other', value: 'other' }
];
