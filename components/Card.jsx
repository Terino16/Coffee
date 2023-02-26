import React from 'react'
import Link from 'next/link'
import { urlFor } from 'lib/client'

const Card = ({product:{ image, name,slug, Cost }}) => {
  return (
    <div className='grid justify-center w-[300px] h-[300px] border border-grey-300'>
    <Link href={`/products/${slug.current}`}>
      <div className="product-card">
        <img 
          src={urlFor(image && image[0])}
          className="w-[200px] h-[200px]"
        />
        <p className="product-name">{name}</p>
        <div className='flex gap-4 items-center'>
        <p className="product-price">Rs:{Cost}</p>
        <button class="bg-green-700 hover:bg-cream hover:text-black text-white font-bold py-1 px-3 rounded-full">
  Add to Cart
</button>
        </div>
      </div>
    </Link>
  </div>
)
  
}

export default Card