'use client'
import { useRenameModal } from '@/store/UseRemaneModel'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

const RenameModal = () => {

  const {isOpen, onClose, initialValues} = useRenameModal();

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Edit Board Title
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Enter a new title for the Board.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RenameModal