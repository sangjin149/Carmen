import { ClickAwayListener } from '@ui';
import styles from './Modal.module.scss';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

//TODO: 백드롭 구현
//TODO: (prop에 따라) 모달 외 공간 클릭시 닫히기

const Modal = forwardRef(function ResultModal({ children, ...props }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  function handleBackdropClick(e) {
    if (e.target === dialog.current) dialog.current.close();
  }

  return createPortal(
    <dialog ref={dialog} className={styles.modal} {...props}>
      <ClickAwayListener onClickAway={handleBackdropClick}>
        <div>{children}</div>
      </ClickAwayListener>
    </dialog>,
    document.getElementById('modal'),
  );
});

export default Modal;
