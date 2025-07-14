import { createPortal } from "react-dom"


export default function Modal({ children }: any) {
    return createPortal(
        <dialog>
            {children}
        </dialog>,
        document.getElementById('modal-root')
    );
}