"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as Slider from "@radix-ui/react-slider"
import * as RadixSlider from "@radix-ui/react-slider";

// const Progress = React.forwardRef<
//     React.ElementRef<typeof ProgressPrimitive.Root>,
//     React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
// >(({ className, value, isExpanded, setProgress, onChange , ...props }, ref) => (
//     // <ProgressPrimitive.Root
//     //
//     //     ref={ref}
//     //     className={
//     //         ` ${isExpanded ? 'cursor-pointer relative h-[2px] w-[100%] bg-[#ddd]' : 'absolute top-0  h-[2px] w-full bg-[#5F5F5F]'}  left-0 right-0 overflow-hidden`}
//     //     value={value}
//     // >
//     //     <ProgressPrimitive.Indicator
//     //         className={` ${isExpanded ? 'relative h-[2px] bg-[black]' : 'absolute top-0 w-full h-[2px] transition-all'} bg-white left-0 right-0`}
//     //         style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
//     //     />
//     // </ProgressPrimitive.Root>
//
// ))
// Progress.displayName = ProgressPrimitive.Root.displayName
//
// export { Progress }

interface ProgressProps {
    value?: number;
    onChange?: (value: number) => void;
}

const Progress: React.FC<ProgressProps> = ({
    value = 1,
    onChange
}) => {
    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0]);
    }

    return (
        <RadixSlider.Root className={'m-0 p-0 relative flex items-center select-none touch-none w-full h-10'} defaultValue={[1]} value={[value]} onValueChange={handleChange} max={50} step={0.1} aria-label={'Progress'}>
            <RadixSlider.Track className={'bg-neutral-600 relative grow rounded-full h-[3px]'}>
                <RadixSlider.Range className={'absolute bg-white rounded-full h-full'} />
            </RadixSlider.Track>
        </RadixSlider.Root>
    );
};

export default Progress;
