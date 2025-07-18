'use client';

import RenameModal from '@/components/modals/RenameModal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

    return (
    <div>
        <RenameModal/>
    </div>
  )
}

export default ModalProvider