import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";
interface Props {
	className?: string;
	type?: "main" | "footer"
}

const Logo = ({ className, type= "main" }: Props) => {
	return (
		<div className={`${styles.logo} ${className}`}>
			<Image
				src={`/svgs/${type === "main" ? "header_logo" : "footer_logo"}.svg`}
				loading="eager"
				priority={true}
				alt="Gear Up"
				fill
				sizes="100vw"
				quality={100}
			/>
		</div>
	);
};

export default Logo;
