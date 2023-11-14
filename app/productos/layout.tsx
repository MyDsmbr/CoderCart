"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ProductoLayout = ({
  children,
}: {
  children: React.ReactNode
  }) => {
  
  const pathname = usePathname()  
  return (
    <div className='flex md:flex-col'>
      <div className='w-1/3 md:w-full flex flex-col md:flex-row  p-3 md:justify-center'>        
      <Link href={"/productos"} className='p-2 hover:bg-indigo-600 hover:rounded-md hover:text-white text-center' >Todos</Link>
        <Link href={"/productos/comida"} className='p-2 hover:bg-indigo-600 hover:rounded-md hover:text-white text-center' >Comida</Link>
        <Link href={"/productos/hardware"} className='p-2 hover:bg-indigo-600 hover:rounded-md hover:text-white text-center' >Hardware</Link>
        <Link href={"/productos/tv"} className='p-2 hover:bg-indigo-600 hover:rounded-md hover:text-white text-center' >TVs</Link>
      </div>              
      {children}      
    </div>
  )
}

export default ProductoLayout
