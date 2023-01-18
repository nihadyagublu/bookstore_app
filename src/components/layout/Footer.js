import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["separator-line"]}></div>
      <section className={classes["footer-info"]}>
        <h3>Contact us: bookstore123@mail.com</h3>
      </section>
    </div>
  );
}
