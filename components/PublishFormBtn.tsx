import React from 'react'
import { Button } from './ui/button'
import { MdOutlinePublic } from 'react-icons/md'

function PublishFormBtn() {
  return (
    <Button className='gap-2 text-white bg-gradient-to-r from-indigo-500 to-cyan-500' variant={"outline"}><MdOutlinePublic className ="h-4 w-4"/>Publish</Button>
  )
}

export default PublishFormBtn