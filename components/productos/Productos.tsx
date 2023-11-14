import React from 'react'
import ProductoCard from './ProductoCard'
import { IProducto } from '@/interface/Producto'


interface ProductosProps  {
  productos:IProducto[]
}

const Productos:React.FC<ProductosProps> = ({productos}) => {
  

  return (
    <div className='flex flex-col md:flex-row md:flex-wrap w-full  gap-3 my-2 p-2'>
      { productos.map( (producto) => ( <ProductoCard key={producto.id} producto={producto}  />  )) }
    </div>
  )
}

export default Productos
