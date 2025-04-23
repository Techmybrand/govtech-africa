export interface NavLinkMenu {
	label: string;
	id?: string;
	href: string;
	external: boolean;
	icon?: string;
}

export interface NavLinkSub {
	label: string;
	icon: string;
	href: string;
	id?: string;
	menu?: NavLinkMenu[];
}

export interface NavLink {
	label: string;
	id?: string;
	href?: string;
	external: boolean;
	videoUrl?: string;
	subMenu?: NavLinkSub[];
	title?: string;
	description?: string;
	button?: string;
	icon?: string;
}

export interface footerNavProps {
	label: string
	href: string
}

export interface socialsProps {
	label: string
	href: string
	icon: string
}
export interface StatItem {
    value: number;
    label: string;
}