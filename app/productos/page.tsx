import Productos from '@/components/productos/Productos'
import { Products } from '@/const/products';
import React from 'react';


const page = () => {

  const productos = Products
  return (    
      <Productos productos={productos} />    
  )
}

export default page
