import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"} className='font-bold text-2xl bg-gradient-to-t from-indigo-400 to-cyan-400 text-transparent bg-clip-text font-sans hover:cursor-pointer'>FormShare<span>360</span></Link>
  )
}

export default Logo