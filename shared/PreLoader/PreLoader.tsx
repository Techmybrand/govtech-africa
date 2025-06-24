// 'use client';
// import React, { useState, useEffect } from 'react';
// // import Image from 'next/image';
// import styles from './PreLoader.module.scss';

// const PreLoader = () => {
// 	const [loading, setLoading] = useState<boolean>(true);
// 	useEffect(() => {
// 		const handleLoad = () => {
// 			setTimeout(() => setLoading(false));
// 		}
// 		if ( document.readyState === 'complete' ) {
// 			handleLoad();
// 		} else {
// 			window.addEventListener('load', handleLoad);
// 		}

// 		return () => {
// 			window.removeEventListener('load', handleLoad);
// 		}
// 	}, []);
// 	return (
// 		<>
// 			{loading ? (
// 				<div className={styles.preloader}>
// 					<div className={styles.loader}></div>
// 					<div className={styles.icon_container}>
// 						<div className={styles.icon}>
// 							{/* <Image src={`/favicon.png`} priority={true} 
// 								alt='Sippy Life' fill quality={100} 
// 							/> */}
// 						</div>
// 					</div>
// 				</div>
// 			) : null}
// 		</>
// 	);
// };

// export default PreLoader;


'use client';
import React, { useState, useEffect } from 'react';
import styles from './PreLoader.module.scss';

const PreLoader: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
		const hidePreloader = () => {
			setTimeout(() => {
			setIsLoading(false);
			}, 500);
		};

		if (document.readyState === 'complete') {
			hidePreloader();
		} else {
			window.addEventListener('load', hidePreloader);
		}
		return () => {
			window.removeEventListener('load', hidePreloader);
		};
	}, []);

	if (!hasMounted || isLoading) {
		return (
		<div className={styles.preloader}>
			<div className={styles.loader}></div>
			<div className={styles.icon_container}>
				<div className={styles.icon}></div>
			</div>
		</div>
		);
	}
  	return null;
};

export default PreLoader;
