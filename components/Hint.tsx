import { Tooltip, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import React from 'react'

export interface HintProps {
    label : string;
    children : React.ReactNode;
    side? : "top" | "bottom" | "left" | "right";
    align? : "start" | "center" | "end";
    sideOffset? : number;
    alignOffset? : number;
}

const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}: HintProps) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent
                className="bg-black text-white px-2 py-1 rounded-md shadow-md p-3 text-sm font-medium"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
            >
                <p className="whitespace-nowrap font-semibold capitalize">
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default Hint