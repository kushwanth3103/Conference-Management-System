import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classes from './SuccessModal.module.css'; 
import { useNavigate, useParams } from "react-router-dom"; 

const SuccessModal = forwardRef(function SuccessModal({ email }, ref) {
  const dialog = useRef();
  const navigate = useNavigate(); 
  const { conferenceId } = useParams();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    }
  }));

  const handleClose = () => {
    navigate(`/call-for-papers/${conferenceId}`);
  };

  return createPortal(
    <dialog ref={dialog} className={classes.successModal}>
      <div className={classes.successModalContent}>
        <h3 className={classes.successModalTitle}>Submission Successful</h3>
        <p className={classes.successModalMessage}>
          Your paper has been submitted successfully.
        </p>
        <p className={classes.successModalMessage}>
          A confirmation email has been sent to <strong>{email}</strong>.
        </p>
        <form method="dialog" className={classes.successModalActions} onSubmit={handleClose}>
          <button type="submit" className={classes.successModalButton}>Close</button>
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
});

export default SuccessModal;
