import React from "react";
import styles from "./SpaceErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles["backdrop_errorModal"]} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles["errorModal_unit"]}>
      <header className={styles["error_title"]}>
        <h3>Error occured</h3>
      </header>
      <div className={styles["error_message_body"]}>
        <h4>Please make sure you filled in all the blanks</h4>
      </div>
      <section className={styles["error-modal-actions"]}>
        <button
          className={styles["button_confirm"]}
          onClick={props.onConfirm.bind(null, false)}
        >
          Okay
        </button>
      </section>
    </div>
  );
};

const SpaceErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default SpaceErrorModal;
