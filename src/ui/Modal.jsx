import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function ResultModal({ children }, ref) {
  //TODO: 모달 정적 레이아웃 구현
  //TODO: 모달 켜는 함수 구현
  //TODO: 모달 끄는 함수 구현
  //TODO: 백드롭 구현
  //TODO: (prop에 따라) 모달 외 공간 클릭시 닫히기
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  console.log(document.getElementById('modal'));

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {children}
    </dialog>,
    document.getElementById('modal'),
  );
});

export default Modal;
