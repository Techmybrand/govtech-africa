'use client';
import React from "react";
import { Footer, Header } from "@/shared";
import styles from './layout.module.scss'

export default function GovTechLayout({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.layout_wrapper}>
            <Header />
            <div className={styles.children_wrapper}>
                {children}
            </div>
            <Footer />
        </div>
    )
}