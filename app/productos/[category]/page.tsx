import ProductoCard from '@/components/productos/ProductoCard';
import Productos from '@/components/productos/Productos';
import { Products } from '@/const/products';
import React from 'react'

const ProductosFilter = ({ params }: any) => {

  const { category } = params;

  const products = Products.filter(d => d.category.toLowerCase() == category.toLowerCase())
  

  if (products.length == 0) { 
    return <h1>Sin Resultados</h1>
  }

  return (
      <Productos productos={products} />
      )
}

export default ProductosFilter
