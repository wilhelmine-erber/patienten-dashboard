import Input from "./Input";
import { use, useRef } from "react";

type NewProjectProps = {
    onAdd: (data: { name: string; age: string; health: string }) => void;
};

export default function NewProject({ onAdd }: NewProjectProps) {

    const name = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const health = useRef<HTMLTextAreaElement>(null);

    function handleSave() {
        const enteredName = name.current?.value ?? "";
        const enteredAge = age.current?.value ?? "";
        const enteredHealth = health.current?.value ?? "";


        onAdd({
            name: enteredName,
            age: enteredAge,
            health: enteredHealth
        })
    }

    return <div className="w-[35rem] mt-16">

        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
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
}