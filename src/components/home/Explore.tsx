'use client'

import React from 'react'
import Slider from '@/components/ui/Slider'
import Button from '@/components/ui/Button'

const exploreItems = [
  {
    videoId: '6gSDpAmJvu0',
    title: 'Own a hotspot',
    description: 'This video talks about Dabba'
  },
  {
    videoId: '6gSDpAmJvu0',
    title: 'Own a hotspot',
    description: 'This video talks about Dabba'
  },
  {
    videoId: '6gSDpAmJvu0',
    title: 'Own a hotspot',
    description: 'This video talks about Dabba'
  },
  {
    videoId: '6gSDpAmJvu0',
    title: 'Own a hotspot',
    description: 'This video talks about Dabba'
  }
]

export default function Explore() {
  return (
    <section>
      <div className="max-w-[1290px] mx-auto px-4 relative">
        <div className="py-10 md:py-20">
          <div className="bg-[url('/images/speech-popup.webp')] bg-contain bg-center py-18 md:py-[100px] bg-no-repeat mx-auto mb-12">
            <h2 className="text-[28px] font-anton text-black md:text-48 uppercase leading-[1.2] tracking-[1px] text-center md:translate-x-2 max-w-[330px] mx-auto [-webkit-text-stroke:1px_rgba(255,215,0,1)] [text-shadow:2px_2px_0px_rgba(0,0,0,1)]">
              Explore
            </h2>
          </div>

          <Slider
            slidesPerView={1}
            spaceBetween={32}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32
              }
            }}
          >
            {exploreItems.map((item, index) => (
              <div key={index} className="bg-[#F0EDFE] rounded-2xl border border-[#DEDAED]">
                <div className="bg-[url('/images/pattern-bg-2.webp')] bg-cover p-4 pb-6">
                  <div className="border-2 border-white rounded-t-xl overflow-hidden mb-6">
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div>
                    <h3 className="heading-yellow !text-24 mb-2">{item.title}</h3>
                    <p className="text-16 font-semibold mb-4">{item.description}</p>
                    <Button>Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
} 