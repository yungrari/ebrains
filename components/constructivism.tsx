'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import pic1 from '@/public/1.webp'
import pic2 from '@/public/2.webp'
import pic3 from '@/public/3.webp'
import pic4 from '@/public/4.webp'
import pic5 from '@/public/5.webp'

const config = {
  items: [
    { src: pic1, alt: 'MEG' },
    { src: pic2, alt: 'DIE' },
    { src: pic3, alt: 'HDC' },
    { src: pic4, alt: 'PENTAGRAM' },
    { src: pic5, alt: 'TOR' },
  ],
}

const WIDTH = 40
const HEIGHT = 30
const PERSPECTIVE = 5000

export default function Constructivism() {
  const [degree, setDegree] = useState([0, 0])
  const [isAutoplay, setIsAutoplay] = useState(false)

  const isDragging = useRef(false)
  const touchStart = useRef({ x: 0, y: 0 })

  const handleMove = (deltaX: number, deltaY: number) => {
    setDegree((prevDegree) =>
      Math.abs(deltaX) > Math.abs(deltaY)
        ? [prevDegree[0], prevDegree[1] + (deltaX / window.innerWidth) * 360]
        : [prevDegree[0] + (deltaY / window.innerHeight) * 360, prevDegree[1]]
    )
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }

    setIsAutoplay(false)
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y

    handleMove(deltaX, deltaY)
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    touchStart.current = { x: event.clientX, y: event.clientY }
    isDragging.current = true

    setIsAutoplay(false)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging.current) {
      const deltaX = event.clientX - touchStart.current.x
      const deltaY = event.clientY - touchStart.current.y

      handleMove(deltaX, deltaY)
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAutoplay(!Object.values(touchStart.current).some(Boolean))
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-move"
      style={{
        width: `${WIDTH}vw`,
        height: `${HEIGHT}vh`,
        perspective: `${PERSPECTIVE}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      <div
        className={cn(
          'absolute w-full h-full transition-transform duration-500 ease-in-out',
          isAutoplay && 'animate-autoplay'
        )}
        style={{
          transform: `rotateX(${degree[0]}deg) rotateY(${degree[1]}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {config.items.map((item, index, array) => (
          <div
            key={item.alt}
            className="absolute bg-no-repeat bg-center overflow-hidden border border-solid border-neutral-300"
            style={{
              width: `${WIDTH}vw`,
              height: `${HEIGHT}vh`,
              transform: `rotateY(${
                (360 / array.length) * index
              }deg) translateZ(${(
                WIDTH /
                2 /
                Math.tan(Math.PI / array.length)
              ).toFixed(4)}vw)`,
            }}
          >
            <Image
              className="w-full h-full object-contain select-none"
              src={item.src}
              alt={item.alt}
              draggable="false"
              priority={index === 0}
              sizes="20vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
