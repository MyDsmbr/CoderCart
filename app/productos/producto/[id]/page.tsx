"use client"
import ProductoCard from '@/components/productos/ProductoCard'
import { Products } from '@/const/products'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductDetail = ({ params }: any) => {
  
  const router = useRouter()
  const {id} = params
  const producto = Products.find(d => d.id == id)
  
  return (
    <div className='w-full p-4 space-y-2'>
      <button className='bg-slate-200 hover:bg-slate-300 rounded-md h-[40px] w-full' onClick={() => router.back() }>Volver</button>   
    {
        producto && (
          <ProductoCard producto={producto} details cart />
      )
        }        
    </div>
      )
}

export default ProductDetail
