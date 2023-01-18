import styles from "./ReceivedComment.module.css";

const ReceivedComment = (props) => {
  return (
    <li className={styles["posted_comment"]}>
      <div className={styles["posted_name_surname"]}>
        {props.name} {props.surname}
      </div>
      <div className={styles["body_comment"]}>
        <p>{props.userComment}</p>
      </div>
    </li>
  );
};

export default ReceivedComment;
