'use client'

import { useState } from 'react'
import Image from 'next/image'

const WIDTH = 40
const HEIGHT = 30
const PERSPECTIVE = 5000
const CELLS = [
  '/MEG.png',
  '/die-unscreen(1).gif',
  '/HDC2.png',
  '/penta.png',
  '/tor(2).gif',
]

export default function Constructivism() {
  const [degree, setDegree] = useState([0, 0])

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
        {CELLS.map((src, index, array) => (
          <div
            key={src}
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
              className="w-full h-full object-contain"
              src={src}
              alt={src}
              draggable="false"
              fill
              priority={index === 0}
              sizes="20vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
