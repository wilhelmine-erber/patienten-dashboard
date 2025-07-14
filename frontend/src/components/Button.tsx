import type { ButtonProps } from '../types';

export default function Button({ children, onClick, ...props }: ButtonProps) {
    return <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-100 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={onClick}
        {...props}>
        {children}
    </button>
}