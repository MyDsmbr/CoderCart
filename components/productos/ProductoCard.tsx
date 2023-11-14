'use client'
import { IProducto } from '@/interface/Producto'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


interface ProductosCardProps {
  producto: IProducto,
  details?: boolean,
  cart?:boolean
}

const ProductoCard: React.FC<ProductosCardProps> = ({ producto, details, cart }) => {
  

  const [cantidad,setCantidad] = useState(0)

  const router = useRouter()

  const onClick = () => {
    router.push(`/productos/producto/${producto.id}`);
  }

  const onCantidad = (valor:number) => {
    const temp = cantidad + valor;
    if (temp <= 0) { setCantidad(0); return }
    setCantidad(temp)
  }

  return (
    <div className='border rounded-lg w-full md:w-1/3 relative  hover:shadow-lg'
    
    >      
      <div className="overflow-hidden rounded-t-lg relative w-full h-[250px] hover:cursor-pointer" onClick={onClick} >
            <Image
              src={producto.avatar}
              alt={producto.name}
              fill
              className={"h-auto w-auto object-cover transition-all  aspect-square"}
            />
          </div>
        <div className="space-y-1 text-sm p-4">
        <h3 className="font-medium leading-none">{producto.name}</h3>
        {
          details && <p className='text-xs text-muted-foreground'>{ producto.description}</p>
        }
      </div>       
      {
        cart && (
          <div className='w-full space-y-2 p-2'>
          <p className="text-2xl text-muted-foreground">$10000</p>
          <div className='flex gap-2 items-center justify-center'>
            <button className='bg-indigo-600 hover:bg-indigo-500 w-[40px] h-[40px] rounded-md text-white disabled:bg-slate-400 disabled:cursor-not-allowed'
              disabled={cantidad == 0}
              onClick={() => onCantidad(-1)} >-</button>
            <p className='font-bold '>{cantidad}</p>
            <button className='bg-indigo-600 hover:bg-indigo-500 w-[40px] h-[40px] rounded-md text-white' onClick={() => onCantidad(+1)} >+</button>
          </div>
          <button className='w-full bg-indigo-600 hover:bg-indigo-500 rounded-md text-white h-[40px]'>Agregar Al carrito</button>      
        </div>
        )
      }

       
      
    </div>
  )
}

export default ProductoCard
