import React from "react";
import type { Metadata } from "next";
import { ComingSoon } from "@/components";

export const metadata: Metadata = {
	title: "Coming Soon | Africa Govtech Week 2027",
	description:
		"This page or feature is currently under active development for Africa Govtech Week 2027. Stay tuned for exciting updates on powering Africa's public sector digitisation.",
};

export default function ComingSoonPage() {
	return <ComingSoon />;
}