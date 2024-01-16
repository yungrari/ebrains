'use client'

import { useState, useCallback, useRef } from 'react'
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

  const touchStart = useRef({ x: 0, y: 0 })

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const element = event.target as HTMLImageElement
      element.classList.remove('opacity-0')
    },
    []
  )

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }, [])

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDegree([degree[0], (deltaX / window.innerWidth) * 360])
    } else {
      setDegree([(deltaY / window.innerHeight) * 360, degree[1]])
    }
  }, [degree])

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
      style={{
        width: `${WIDTH}vw`,
        height: `${HEIGHT}vh`,
        perspective: `${PERSPECTIVE}px`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="absolute w-full h-full transition-all duration-1000 ease-in-out"
        style={{
          transform: `rotateX(${degree[0]}deg) rotateY(${degree[1]}deg)`,
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
              className="w-full h-full object-contain opacity-0 transition-opacity duration-500"
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
