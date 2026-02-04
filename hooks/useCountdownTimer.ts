"use client";
import { useState, useEffect, useCallback } from "react";

const useCountdownTimer = (targetTimeMs: number) => {
	const [timeLeft, setTimeLeft] = useState<{
		months: string;
		days: string;
		hours: string;
		minutes: string;
		seconds: string;
	}>({
		months: "00",
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	const calculateTimeLeft = useCallback(() => {
		const now = Date.now();
		const difference = targetTimeMs - now;

		if (difference <= 0) {
			return {
				months: "00",
				days: "00",
				hours: "00",
				minutes: "00",
				seconds: "00",
			};
		}

		const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
		const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return {
			months: months.toString(),
			days: padWithZero(days),
			hours: padWithZero(hours),
			minutes: padWithZero(minutes),
			seconds: padWithZero(seconds),
		};
	}, [targetTimeMs]);

	useEffect(() => {
		const updateCountdown = () => {
			setTimeLeft(calculateTimeLeft());
		};

		updateCountdown();

		const intervalId = setInterval(updateCountdown, 1000);

		return () => clearInterval(intervalId);
	}, [calculateTimeLeft]);

	return timeLeft;
};

export default useCountdownTimer;

const padWithZero = (num: number): string => {
	return num < 10 ? `0${num}` : num.toString();
};
