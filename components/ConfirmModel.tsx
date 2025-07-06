import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

interface ConfirmModelProps {
    children?: React.ReactNode;
    onConfirm: () => void;
    disabled: boolean;
    header: string;
    description?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ConfirmModel = ({
    children,
    onConfirm,
    disabled,
    header,
    description,
    open,
    onOpenChange,
}: ConfirmModelProps) => {
    const handleConfirm = () => {
        onConfirm();
        onOpenChange(false);
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={disabled} onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmModel