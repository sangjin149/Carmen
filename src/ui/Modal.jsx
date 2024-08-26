import styles from './Modal.module.scss';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

//TODO: 모달 정적 레이아웃 구현
//TODO: 모달 켜는 함수 구현
//TODO: 모달 끄는 함수 구현
//TODO: 백드롭 구현
//TODO: (prop에 따라) 모달 외 공간 클릭시 닫히기

const Modal = forwardRef(function ResultModal({ children }, ref) {
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

  return createPortal(
    <dialog ref={dialog} className={styles.modal}>
      {children}
    </dialog>,
    document.getElementById('modal'),
  );
});

export default Modal;
