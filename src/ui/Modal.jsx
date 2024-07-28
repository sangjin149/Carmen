import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ResultModal({ children }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {children}
        </dialog>,
        document.getElementById("modal")
    );
});

export default Modal;
