'use client'
import React from 'react'
import Info from './Info'
import Participants from './Participants'
import { Toolbar } from './Toolbar'

interface CanvasProps {
  boardId : string;
}

const Canvas = ({boardId} : CanvasProps) => {
  return (
    <div className="h-full w-ful border-2 bg-neutral-100 touch-none rounded-md shadow-sm">
      {/* Canvas content will go here */}
      <Info/>
      <Participants/>
      <Toolbar/>
    </div>
  )
}

export default Canvas