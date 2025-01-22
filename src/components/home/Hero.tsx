'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  useEffect(() => {
    const animationSequence = [
      { element: '.journalist-1', delay: 1000 },
      { element: '.journalist-2', delay: 1200 },
      { element: '.journalist-speech-1', delay: 2000 },
      { element: '.journalist-speech-2', delay: 2500 }
    ]

    animationSequence.forEach(({ element, delay }) => {
      setTimeout(() => {
        const el = document.querySelector(element)
        if (el) el.classList.add('active')
      }, delay)
    })
  }, [])

  return (
    <section className="pt-4 pb-5">
      <div className="max-w-[1438px] mx-auto px-4">
        <div className="rounded-[32px] overflow-hidden relative bg-[url('/images/hero-bg.webp')] bg-center bg-cover border-2 border-black pt-5 md:pt-0">
          <div className="text-center max-w-[634px] mx-auto py-10">
            <h2 className="heading text-white md:text-[36px] text-pretty [text-shadow:3px_3px_0px_rgba(0,0,0,1)]">
              Dabba is deploying and managing 800 Weather XM Stations across India
            </h2>
          </div>

          <div className="flex flex-col md:flex-row h-auto lg:h-[600px] items-end justify-end">
            <div className="w-full md:w-auto md:flex-1 relative">
              <Image
                src="/images/journalist-1.webp"
                alt=""
                width={500}
                height={700}
                className="max-w-[60%] md:max-w-[70%] journalist-1"
              />

              <div className="absolute max-w-[50%] top-[5%] right-4 md:right-0">
                <Image
                  src="/images/journalist-speech-1.webp"
                  alt=""
                  width={300}
                  height={250}
                  className="w-full journalist-speech-1"
                />
              </div>
            </div>

            <div className="w-full md:w-auto md:flex-1 relative flex justify-end -mt-15">
              <Image
                src="/images/journalist-2.webp"
                alt=""
                width={500}
                height={700}
                className="max-w-[70%] translate-x-9 md:max-w-[65%] md:translate-x-0 journalist-2"
              />

              <div className="absolute max-w-[60%] top-[5%] md:top-[25%] left-0">
                <Image
                  src="/images/journalist-speech-2.webp"
                  alt=""
                  width={300}
                  height={250}
                  className="w-full journalist-speech-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 