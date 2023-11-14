import React from 'react'
import Image from 'next/image'
import LogoImage from '@/images/logo.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image width={84} height={84} priority src={LogoImage} alt='logo' className='rounded-full' />
    
    </Link>
    
  )
}

export default Logo
