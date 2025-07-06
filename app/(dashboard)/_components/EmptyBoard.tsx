'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { useApiMutation } from '@/hooks/useApiMutation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/router'

const EmptyBoard = () => {
  const router = useRouter();
    const {organization} = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create)

    const onClick = () => {
        if(!organization) return;
        mutate({
            title: "Untitled",
            orgId: organization.id
        })
        .then((id) => {
            toast.success("Board Created")
            router.push(`/boards/${id}`)
        })
        .catch(() => toast.error("Failed to craete a board"))
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm"
    >
      <Image 
        src="/EmptyBoard.png" 
        alt="empty board image" 
        width={400} 
        height={400}
        className="opacity-100 hover:opacity-75 transition-opacity duration-300"
      />
      <h2 className="text-3xl font-bold mt-6 text-gray-800">
        No boards found
      </h2>
      <p className="text-muted-foreground text-lg mt-3 text-center max-w-md">
        Create a new board to get started
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Creating...
            </>
          ) : (
            'Create Board'
          )}
        </Button>
      </div>
    </motion.div>
  )
}

export default EmptyBoard