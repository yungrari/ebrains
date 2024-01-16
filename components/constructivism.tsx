'use client'

import { useState } from 'react'
import Image from 'next/image'

import pic1 from '@/public/1.webp'
import pic2 from '@/public/2.webp'
import pic3 from '@/public/3.webp'
import pic4 from '@/public/4.webp'
import pic5 from '@/public/5.webp'

const items = [
  { src: pic1, alt: 'MEG' },
  { src: pic2, alt: 'DIE' },
  { src: pic3, alt: 'HDC' },
  { src: pic4, alt: 'PENTAGRAM' },
  { src: pic5, alt: 'TOR' },
]

const WIDTH = 40
const HEIGHT = 30
const PERSPECTIVE = 5000

export default function Constructivism() {
  const [degree, setDegree] = useState([0, 0])

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const element = event.target as HTMLImageElement

    element.classList.remove('opacity-0')
  }

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
      style={{
        width: `${WIDTH}vw`,
        height: `${HEIGHT}vh`,
        perspective: `${PERSPECTIVE}px`,
      }}
    >
      <div
        className="absolute w-full h-full transition-all duration-1000 ease-in-out"
        style={{
          transform: `rotateY(${degree[0]}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((item, index, array) => (
          <div
            key={item.alt}
            className="absolute bg-no-repeat bg-center overflow-hidden border border-solid border-gray-300"
            style={{
              width: `${WIDTH}vw`,
              height: `${HEIGHT}vh`,
              transform: `rotateY(${
                (360 / array.length) * index
              }deg) translateZ(${
                WIDTH / 2 / Math.tan(Math.PI / array.length)
              }vw)`,
            }}
          >
            <Image
              className="w-full h-full object-contain opacity-0 transition-opacity duration-1000"
              src={item.src}
              alt={item.alt}
              draggable="false"
              priority={index === 0}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
