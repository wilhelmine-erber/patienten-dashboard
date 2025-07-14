import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";
import type { NewProjectProps } from "../types";

export default function NewProject({ onAdd, onCancel }: NewProjectProps) {

    const modal = useRef<HTMLDialogElement>(null);

    const name = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const health = useRef<HTMLTextAreaElement>(null);

    function handleSave() {
        const enteredName = name.current?.value ?? "";
        const enteredAge = age.current?.value ?? "";
        const enteredHealth = health.current?.value ?? "";

        if (enteredName.trim() === '' || enteredAge.trim() === '' || enteredHealth.trim() === '') {
            if (modal.current) {
                modal.current.open();
            }
            return;
        }

        onAdd({
            name: enteredName,
            age: enteredAge,
            health: enteredHealth
        })
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">

                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={name} label='Name' textarea={undefined} />
                    <Input ref={age} label='Age' textarea={undefined} />
                    <Input ref={health} label='Health' textarea />
                </div>
            </div>
        </>)
}