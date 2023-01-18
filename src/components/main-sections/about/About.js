import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["header_about"]}>
        <h1> About</h1>
      </div>
      <div className={styles["about_body"]}>
        <h3>
          This is a web application developed by Nihad Yagublu. I've used New
          York Times Books API and axios to fetch the data. Besides, Firebase
          was used for small database related functions.
        </h3>
      </div>
    </div>
  );
};

export default About;
