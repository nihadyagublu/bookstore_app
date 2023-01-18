import styles from "./ReceivedComment.module.css";

const ReceivedComment = (props) => {
  return (
    <li className={styles["posted_comment"]}>
      <span className={styles["posted_name_surname"]}>
        {props.name} {props.surname}
      </span>
      <span className={styles["body_comment"]}>
        <p>{props.userComment}</p>
      </span>
    </li>
  );
};

export default ReceivedComment;
