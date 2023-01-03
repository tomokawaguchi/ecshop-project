import styles from "./SubpageBanner.module.scss";

const SubpageBanner = ({ pageTitle, pagePara }) => {
	return (
		<section className={styles.SubpageBanner}>
			<div>
				<h1 className={styles.SubpageBanner_Title}>{pageTitle}</h1>
				{pagePara && <p className={styles.SubpageBanner_Para}>{pagePara}</p>}
			</div>
		</section>
	);
};

export default SubpageBanner;
