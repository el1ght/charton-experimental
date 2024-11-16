import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <input
            type={type}
            className={twMerge(`
                flex
                w-full
                p-3 
                bg-[#424242]/[.4] 
                rounded-xl 
                text-[#424242]
                border
                border-transparent
                text-[14px]
                file:border-0
                placeholder:text-[#5B5B5B]
                disabled:cursor-not-allowed
                disabled:opacity-50
                focus:outline-none  
            `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        />
    )
});

Input.displayName = "Input";

export default Input;