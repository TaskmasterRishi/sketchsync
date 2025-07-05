import Image from "next/image";
import React from 'react'


interface BoardCardProps {
    id : string;
    title  :string;
    authorName : string;
    authorId : string;
    createdAt : string;
    imageUrl : string;
    orgId : string;
    isFavorite : boolean;
}

const BoardCard = ({
    id,
    title,
    authorName,
    authorId,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}:BoardCardProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl group border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
        src={imageUrl}
        width={400}
        height={400}
      />
      
    </div>
  )
}

export default BoardCard