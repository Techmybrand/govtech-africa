"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { CustomLink } from "@/shared";
import useCountdownTimer from "@/hooks/useCountdownTimer";

export default function Home() {
	const { months, days, hours, minutes, seconds } = useCountdownTimer(1754866800000);

	// console.log(months, days, hours, minutes, seconds)

	return (
		<section className={styles.section}>
			<div className={styles.hero}>
				<div className={styles.container}>
					<div className={styles.image_1}>
						<Image src="/images/hero-1.png" fill alt="" />
					</div>
				</div>
			</div>
			<div className={styles.theme}>
				<div className={styles.content}>
					<div className={styles.row}>
						<div className={styles.text}>
							<h1>2025 Theme</h1>
						</div>
						<div className={styles.text}>
							<h3>Enabling Government Excellence in Africa:</h3>
							<p>
								Harnessing the Power of Technology and the Digital Economy
								for Shared Prosperity{" "}
							</p>
						</div>
					</div>
					<div className={styles.link_container}>
						<CustomLink href="#" label="Learn more" />
					</div>
				</div>
				<div className={styles.countdown}>
					<div className={styles.text}>
						<h6>COUNTDOWN</h6>
					</div>
					<div className={styles.countdown_text}>
						<div className={styles.text}>
							<p>{months}</p>
							<p>Months</p>
						</div>
						<span>:</span>
						<div className={styles.text}>
							<p>{days}</p>
							<p>Days</p>
						</div>
						<span>:</span>
						<div className={styles.text}>
							<p>{hours}</p>
							<p>hrs</p>
						</div>
						<span>:</span>
						<div className={styles.text}>
							<p>{minutes}</p>
							<p>Mins</p>
						</div>
						<span>:</span>
						<div className={styles.text} style={{ color: "#14361B" }}>
							<p style={{ color: "#14361B" }}>{seconds}</p>
							<p style={{ color: "#14361B" }}>Secs</p>
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.image}>
						<Image src="/images/theme-background.png" fill alt="" />
					</div>
					<div className={styles.text}>
						<h3 style={{ color: "#3DB54A" }}>Background</h3>
						<ul className={styles.bullet_list}>
							<li>
								Technology and the digital economy are essential to
								improving government operations globally.
							</li>
							<li>
								Africa has a unique opportunity to leverage these
								advancements to accelerate development and address
								challenges.
							</li>
							<li>
								A 2024 UN E-Government Survey highlights a global upward
								trend in digital government development, with increased
								investments in resilient infrastructure and advanced
								technologies across many African governments, underscoring
								the continent&apos;s progress in embracing e-Government
								services.
							</li>
							<li>
								The event aims to provide a platform for relevant
								stakeholders to discuss strategies for using technology in
								enhancing public service delivery and streamlining
								government processes.
							</li>
						</ul>
						<CustomLink href="#" label="Learn more" />
					</div>
				</div>
			</div>
			<div className={styles.africa}>
				<div className={styles.text}>
					<h1>Africa Govtech Week in Numbers</h1>
				</div>
				<div className={styles.row}>
					<div className={styles.grid}>
						<div className={styles.text}>
							<h2>200+</h2>
							<p>African Public and Private Sector Leaders </p>
						</div>
						<div className={styles.text}>
							<h2>3000+</h2>
							<p>VIP and Delegate Participants</p>
						</div>
						<div className={styles.text}>
							<h2>50+</h2>
							<p>Exhibiting companies</p>
						</div>
						<div className={styles.text}>
							<h2>15+</h2>
							<p>Technical and commercial sessions/forums/fireside chats</p>
						</div>
						<div className={styles.text}>
							<h2>5</h2>
							<p>Days of week-long engagements</p>
						</div>
						<div className={styles.text}>
							<h2>3</h2>
							<p>
								days of core conferencing, exhibition, and networking
								parleys{" "}
							</p>
						</div>
					</div>
					<div className={styles.image}>
						<Image src="/images/africa.png" fill alt="" />
					</div>
				</div>
				<div className={styles.image_background__container}>
					<div className={styles.image_background}>
						<Image src="/images/africa-background.png" fill alt="" />
					</div>
				</div>
			</div>
			<div className={styles.event}>
				<div className={styles.row}>
					<div className={styles.block}>
						<div className={styles.icon}>
							<Image src="/svgs/event-icon.svg" fill alt="" />
						</div>
						<div className={styles.text}>
							<h1>Event Overview</h1>
						</div>
					</div>
					<ul className={styles.bullet_list}>
						<li>
							The Africa GovTech Week is the continent&apos;s flagship event
							dedicated to accelerating the adoption of technology in
							government operations. With 3 days of core conferencing, 5
							days of week-long engagements, and over 10 conference panel
							sessions — excluding workshops and technical sessions, the
							event will unite 200+ leaders and 2000+ participants from
							amongst African governments, private-sector innovators,
							investors, and global development partners.
						</li>
						<li>
							The government and private sector-led physical event will
							provide a platform for knowledge sharing as well as robust
							policy discussions around technology adoption and digital
							transformation in the public sector.
						</li>
						<li>
							The conference will also serve as a matchmaking hub for
							stakeholders, playing host to government technology
							exhibitions, networking social events, tailored trainings, and
							hackathons, among other supplementary highlights that will
							shimmer the conference to strike a memorable stroke on
							participants.
						</li>
					</ul>
				</div>
				<div className={styles.grid}>
					<div className={styles.image}>
						<Image src="/images/events-1.png" fill alt="" />
					</div>
					<div className={styles.image}>
						<Image src="/images/events-2.png" fill alt="" />
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.text}>
						<h3>Who should participate?</h3>
						<ul className={styles.bullet_list}>
							<li>
								The Public Sector: Presidents, ICT Ministers and
								Commissioners, Legislators, Judicial Officers, Heads of
								Regulatory Agencies and Government Businesses, ICT
								Department Heads/Directors of MDAs, etc across national,
								regional and subnational governments within Africa;
							</li>
							<li>
								The Private Sector: Tech Giants/Service Providers, African
								Startups and Youth Innovators, Investors, Interested
								Corporate Houses, etcetera; and
							</li>
							<li>
								Others: Civil Society, International Development Partners,
								Foreign Missions, NGOs, Academia, Ecosystem Partners,
								Media, et al.
							</li>
						</ul>
					</div>
					<div className={styles.image_container}>
						<div className={styles.image}>
							<Image src="/images/events-background.png" fill alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.slides}>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
					<div key={item} className={styles.slide}>
						<Image
							quality={100}
							priority
							src="/images/slide.png"
							alt="Govtech"
							fill
						/>
					</div>
				))}
			</div>
			<div className={styles.partner}>
				<div className={styles.row}>
					<div className={styles.image}>
						<Image src="/images/partner.png" fill alt="Partners" />
					</div>
					<div className={styles.text}>
						<h3>Why Partner with Africa GovTech Week?</h3>
						<p>
							<span>1. For African Governments</span>
							<br />
							Digital transformation is no longer optional—it is essential
							for efficient, transparent, and citizen-centric governance.
						</p>
						<p>
							<span>2. For Private Sector</span>
							<br />
							The private sector plays a pivotal role in shaping the digital
							future of governance, offering the technologies and expertise
							that enable seamless, efficient, and secure public service
							delivery
						</p>
						<p>
							<span>3. For International Development Organizations</span>
							<br />
							For global and regional development organizations, supporting
							GovTech initiatives is essential to achieving broader
							socio-economic development goals
						</p>
						<CustomLink href="#" label="Learn more" className={styles.link} />
					</div>
				</div>
			</div>
		</section>
	);
}
