import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["header_about"]}>
        <h1> About</h1>
      </div>
      <div className={styles["about_body"]}>
        <h3 align="justify">
          The project uses a public API that shows the current The New York
          Times Best Sellers list and periodically updates the data. Visitors of
          the app can click the button to upload the list and choose an item
          that interests them. With that they can quickly look up to the details
          of the item and follow the Amazon link to actually make the purchase.
        </h3>
      </div>
    </div>
  );
};

export default About;
