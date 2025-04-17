"use client";

import Link from "next/link";
import { footerNav, socialMediaLinks } from "@/mock/navLists.mock";
import { footerNavProps, socialsProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
	const router = useRouter();
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_body}>
				<div className={styles.questions_container}>
					<div className={styles.questions}>
						<h3>Questions?</h3>
						<p>
							For more information on conference programme or 
							registration, please visit the 
							<span onClick={() => router.push('/faq')}> FAQ page </span> 
							or <span onClick={() => router.push('/contact')}> contact us </span>
						</p>
					</div>
					<div className={styles.copy_write}>
						<h3>
							&copy; AGW {year} All Rights Reserved.
						</h3>
					</div>
				</div>

				<ul className={styles.nav_list}>
					{footerNav?.map((nav: footerNavProps, index: number) =>
						<Link href={nav?.href} key={index}>
							<li>{nav?.label}</li>
						</Link>
					)}
				</ul>

				<div className={styles.socials_and_logo}>
					<div className={styles.socials}>
						{socialMediaLinks?.map((socials: socialsProps, index: number) =>
							<Link href={socials?.href} key={index}>
								<div className={styles.social_icon}>
									<Image alt={socials?.label} fill src={socials?.icon} />
								</div>
							</Link>
						)}
					</div>
					<div className={styles.footer_logo}>
						<h3>Powered By</h3>
						<Link href='#'>
							<div className={styles.logo}>
								<Image alt="logo" fill src='/svgs/footer_logo.svg' />
							</div>
						</Link>
					</div>
				</div>

				<div className={styles.divider}>
					<h3>
						&copy; AGW {year} All Rights Reserved.
					</h3>
				</div>
			</div>
			<div className={styles.image_background__container}>
				<div className={styles.image_background}>
					<Image src="/images/africa-background.png" fill alt="" />
				</div>
        	</div>
		</footer>
	);
};

export default Footer;
