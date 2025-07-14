import { forwardRef } from "react";

type InputProps = {
    label: string;
    textarea?: boolean;
    [key: string]: any;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
    ({ label, textarea, ...props }, ref) => (
        <div className="mb-4">
            <label className="block mb-2 font-bold">{label}</label>
            {textarea ? (
                <textarea ref={ref as React.Ref<HTMLTextAreaElement>} {...props} className="border p-2 w-full" />
            ) : (
                <input ref={ref as React.Ref<HTMLInputElement>} {...props} className="border p-2 w-full" />
            )}
        </div>
    )
);

export default Input;