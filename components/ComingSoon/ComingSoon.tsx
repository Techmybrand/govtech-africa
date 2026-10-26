"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import styles from "./ComingSoon.module.scss";

const DEFAULT_TARGET_JUNE_2027_MS = 1811808000000;

export interface ComingSoonProps {
	title?: string;
	featureName?: string;
	description?: string;
	badgeText?: string;
	backUrl?: string;
	backText?: string;
	showCountdown?: boolean;
	showNotifyForm?: boolean;
	showQuickLinks?: boolean;
	targetTimeMs?: number;
}

interface ComingSoonBaseProps extends ComingSoonProps {
	queryFeature?: string | null;
}

const ComingSoonBase = ({ title, featureName, queryFeature, description, badgeText, backUrl = "/",
	backText = "Back to Homepage", showCountdown = true, showNotifyForm = true, showQuickLinks = true,
	targetTimeMs = DEFAULT_TARGET_JUNE_2027_MS,
}: ComingSoonBaseProps) => {
	const effectiveFeature = featureName || queryFeature;

	const displayBadge = badgeText || (effectiveFeature ? `${effectiveFeature} • In Progress` : "Feature In Development");

	const displayTitle = title || (effectiveFeature ? `${effectiveFeature} Coming Soon` : "Coming Soon");

	const displayDescription = description || (effectiveFeature
        ? `${effectiveFeature} is currently being prepared for Africa Govtech Week 2027. Check back soon or return to the main site to explore active sections.`
        : "This page or feature is currently being crafted for Africa Govtech Week 2027. We are building powerful digital experiences to power Africa's public sector digitisation.");

	const { months, days, hours, minutes, seconds } = useCountdownTimer(targetTimeMs);

	const [email, setEmail] = useState<string>("");
	const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleNotifySubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
			setError("Please enter a valid email address");
			return;
		}
		setIsSubscribed(true);
	};

	const quickLinks = [
		{ label: "Home", href: "/" },
		{ label: "About AGW", href: "/about-us" },
		{ label: "Partners", href: "/partner" },
		{ label: "Media", href: "/media" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Contact Us", href: "/contact" },
	];

	return (
		<div className={styles.coming_soon_container}>
			<div className={styles.overlay}></div>
			<div className={styles.ambient_orb_1}></div>
			<div className={styles.ambient_orb_2}></div>

			<div className={styles.content_card}>
				<div className={styles.badge_wrapper}>
					<span className={styles.pulse_dot}></span>
					<span className={styles.badge_text}>{displayBadge}</span>
				</div>

				<div className={styles.header_section}>
					<h1>
						{displayTitle.split(" ").slice(0, -2).join(" ")}{" "}
						<span className={styles.highlight}>
							{displayTitle.split(" ").slice(-2).join(" ")}
						</span>
					</h1>
					<p className={styles.description}>{displayDescription}</p>
				</div>

				{showCountdown && (
					<div className={styles.countdown_strip}>
						<div className={styles.countdown_header}>
							<span className={styles.calendar_icon}>📅</span>
							<span>Countdown to Africa Govtech Week 2027</span>
						</div>
						<div className={styles.timer_boxes}>
							<div className={styles.timer_box}>
								<span className={styles.timer_val}>{months}</span>
								<span className={styles.timer_label}>Months</span>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.timer_box}>
								<span className={styles.timer_val}>{days}</span>
								<span className={styles.timer_label}>Days</span>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.timer_box}>
								<span className={styles.timer_val}>{hours}</span>
								<span className={styles.timer_label}>Hours</span>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.timer_box}>
								<span className={styles.timer_val}>{minutes}</span>
								<span className={styles.timer_label}>Mins</span>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.timer_box} data-active="secs">
								<span className={styles.timer_val}>{seconds}</span>
								<span className={styles.timer_label}>Secs</span>
							</div>
						</div>
					</div>
				)}

				{showNotifyForm && (
					<div className={styles.notify_section}>
						{!isSubscribed ? (
							<form className={styles.notify_form} onSubmit={handleNotifySubmit}>
								<input
									type="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										if (error) setError("");
									}}
									placeholder="Enter your email to get notified when ready..."
									aria-label="Email address for notifications"
									required
								/>
								<button type="submit" className={styles.notify_button}>
									Notify Me
								</button>
							</form>
						) : (
							<div className={styles.notify_success}>
								<span className={styles.success_icon}>✓</span>
								<p>You&apos;re on the list! We&apos;ll notify you as soon as this is ready.</p>
							</div>
						)}
						{error && (
							<p style={{ color: "#FF7770", fontSize: "1.3rem", marginTop: "0.8rem" }}>
								{error}
							</p>
						)}
					</div>
				)}

				{/* Action Buttons */}
				<div className={styles.actions_container}>
					<Link href={backUrl} className={styles.btn_primary}>
						<span>{backText}</span>
						<span className={styles.arrow}>→</span>
					</Link>
					<Link href="/about-us" className={styles.btn_secondary}>
						<span>About AGW 2027</span>
					</Link>
					<Link href="/contact" className={styles.btn_secondary}>
						<span>Contact Us</span>
					</Link>
				</div>

				{/* Quick Links */}
				{showQuickLinks && (
					<div className={styles.quick_links_wrapper}>
						<span className={styles.quick_links_title}>Explore Active Sections</span>
						<div className={styles.quick_links_list}>
							{quickLinks.map((item, idx) => (
								<Link key={idx} href={item.href} className={styles.quick_link_pill}>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const ComingSoonWithParams: React.FC<ComingSoonProps> = (props) => {
	const searchParams = useSearchParams();
	const queryFeature = searchParams
		? searchParams.get("feature") ||
		  searchParams.get("page") ||
		  searchParams.get("title")
		: null;

	return <ComingSoonBase {...props} queryFeature={queryFeature} />;
};

const ComingSoon: React.FC<ComingSoonProps> = (props) => {
	return (
		<Suspense fallback={<ComingSoonBase {...props} />}>
			<ComingSoonWithParams {...props} />
		</Suspense>
	);
};

export default ComingSoon;