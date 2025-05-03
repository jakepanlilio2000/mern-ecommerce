"use client"
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  slides: number[]
}

const Carousel: React.FC<Props> = ({ slides }) => {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'center', loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!embla) return

    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap())
    embla.on('select', onSelect)
    onSelect() // Trigger on mount
  }, [embla])

  return (
    <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {slides.map((index) => (
          <div
            key={index}
            className={`shrink-0 grow-0 basis-[70%] min-w-0 pl-4 transition-transform duration-300 ${
              selectedIndex === index ? 'scale-100 z-10' : 'scale-90 opacity-80'
            }`}
          >
            <div className="flex items-center justify-center font-semibold text-6xl rounded-[1.8rem] select-none shadow-md h-[19rem] bg-white">
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
