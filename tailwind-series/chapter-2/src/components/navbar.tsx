import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navbar = () => {
  return (
    <div className='flex items-center justify-between px-2 py-2'>
      <Link href="/">
      <Image 
      draggable= {false}
      loading='lazy'
      
       
      
      src="/finta-logo-light.svg" alt="Finta Logo" height={50} width={50} />
      </Link>
      <nav>
        <ul className='flex space-x-4'>
          { [
            
          ].map((item) => (
            <li key={item.title}>
              <Link href={item.href} className='text-gray-700 hover:text-blue-500'>
                {item.title}
              </Link>
            </li>
          )) }
        </ul>
      </nav>
    </div>
  )
}

export default navbar
