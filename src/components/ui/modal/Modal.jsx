import React from "react";
import styles from "./Modal.module.css";

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {

    console.log(e.currentTarget);
    
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
