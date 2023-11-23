"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, {useEffect} from 'react'

function ErrorPage({error}: {error : Error}) {
    useEffect(() => {
        console.log(error)
        }, [error])
    
  return (
    <div className='flex w-full h-full flex-col items-center justify-center gap-4'>
        <h1>Error</h1>
        <Button asChild>
            <Link href={"/"}>Go back!</Link>
        </Button>
    </div>
  )
}

export default ErrorPage