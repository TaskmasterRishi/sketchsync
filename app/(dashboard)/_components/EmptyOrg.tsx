'use client'
import Image from 'next/image'
import React from 'react'
import NewButton from './sidebar/NewButton'
import { motion } from 'framer-motion'

const EmptyOrg = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm"
    >
      <Image 
        src="/Designtools.svg" 
        alt="Empty organization" 
        width={300} 
        height={300}
        className="opacity-100 hover:opacity-75 transition-opacity duration-300"
      />
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        Welcome to Sketchsync
      </h2>
      <p className="text-muted-foreground text-lg mt-3 text-center max-w-md">
        Create an organization to get started and collaborate with your team.
      </p>
      <div className="mt-6">
        <NewButton text="Create organization" />
      </div>
    </motion.div>  
  )
}

export default EmptyOrg