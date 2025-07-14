import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ModalProps, ModalRef } from "../types";
import Button from "./Button";

const Modal = forwardRef<ModalRef, ModalProps>(function Modal({ children }, ref) {

    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                if (dialog.current) {
                    dialog.current.showModal();
                }
            },
            close() {
                if (dialog.current) {
                    dialog.current.close();
                }
            }
        }
    });

    // Sicherstellen, dass modal-root existiert
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        console.error('Modal root element not found. Make sure there is a div with id="modal-root" in your HTML.');
        return null;
    }

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600">Close</Button>
            </form>
        </dialog>,
        modalRoot
    );
});

export default Modal;