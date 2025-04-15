"use client";
import React from "react";
import styles from "./Button.module.scss";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: "secondary" | "transparent";
	children: React.ReactNode;
	iconPrefix?: string;
	iconSuffix?: string;
	className?: string;
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
	children,
	className,
	href,
	onClick,
	iconPrefix,
	buttonType,
	...otherProps
}: Props) => {
	const router = useRouter();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (href) {
			router.push(href);
		}
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`${className} ${styles.button}`}
			data-type={buttonType ? buttonType : ""}
			{...otherProps}
		>
			{!!iconPrefix && (
				<figure className={styles.button_icon}>
					<Image src={iconPrefix} layout="fill" alt="" />
				</figure>
			)}
			<div className={styles.children}>{children}</div>
		</button>
	);
};

export default Button;
