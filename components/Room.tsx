import React, { ReactNode } from 'react'

const Room = ({childern} : {childern : ReactNode}) => {
  return (
    <div>
        <RoomProvider />
    </div>
  )
}

export default Room