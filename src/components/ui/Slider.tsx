'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'

interface SliderProps {
  children: React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
  breakpoints?: {
    [width: number]: {
      slidesPerView: number
      spaceBetween: number
    }
  }
}

export default function Slider({ 
  children,
  slidesPerView = 1,
  spaceBetween = 32,
  breakpoints
}: SliderProps) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      className="explore-slider"
    >
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
} 