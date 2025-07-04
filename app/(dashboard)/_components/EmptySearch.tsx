import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const EmptySearch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm"
    >
      <Image 
        src="/EmptySearch.png" 
        alt="empty search image" 
        width={400} 
        height={400}
        className="opacity-100 hover:opacity-75 transition-opacity duration-300"
      />
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        No results found
      </h2>
      <p className="text-muted-foreground text-lg mt-3 text-center max-w-md">
        Try searching for something else
      </p>
    </motion.div>
  )
}

export default EmptySearch