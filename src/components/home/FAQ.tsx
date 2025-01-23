'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    question: 'What is Dabba?',
    answer: 'Wifi Dabba is a pioneer in building and operating low cost public wifi networks in India since 2017. Dabba Network was created in 2023 as a web3 DePin hotspot project building on the Solana blockchain and having deployed thousands of hotspots across India serving users with super fast and super cheap internet.'
  },
  {
    question: 'What is the Dabba Lite and what happens after my purchase?',
    answer: 'Wifi Dabba is a pioneer in building and operating low cost public wifi networks in India since 2017. Dabba Network was created in 2023 as a web3 DePin hotspot project building on the Solana blockchain and having deployed thousands of hotspots across India serving users with super fast and super cheap internet.'
  },
  {
    question: 'How is Dabba different from other DePin projects?',
    answer: 'Wifi Dabba is a pioneer in building and operating low cost public wifi networks in India since 2017. Dabba Network was created in 2023 as a web3 DePin hotspot project building on the Solana blockchain and having deployed thousands of hotspots across India serving users with super fast and super cheap internet.'
  },
  {
    question: 'Why is connectivity in India so important?',
    answer: 'Wifi Dabba is a pioneer in building and operating low cost public wifi networks in India since 2017. Dabba Network was created in 2023 as a web3 DePin hotspot project building on the Solana blockchain and having deployed thousands of hotspots across India serving users with super fast and super cheap internet.'
  },
  {
    question: 'When do I pay the activation fee and deploy my hotspot?',
    answer: 'Wifi Dabba is a pioneer in building and operating low cost public wifi networks in India since 2017. Dabba Network was created in 2023 as a web3 DePin hotspot project building on the Solana blockchain and having deployed thousands of hotspots across India serving users with super fast and super cheap internet.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="pb-10 md:pb-20">
      <div className="container">
        <div className="flex gap-3 md:gap-6 items-center justify-center mb-10">
          <Image
            src="/images/get-rewards.webp"
            alt=""
            width={80}
            height={80}
            className="max-w-[30px] md:max-w-[80px]"
          />
          <h2 className="heading-yellow text-yellow-300 [text-shadow:2px_2px_0px_rgba(0,0,0,1)]">Frequently asked questions</h2>
        </div>

        <div className="flex flex-col gap-4 mb-15 px-24">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <span className="text-18 md:text-18 ">{faq.question}</span>
                <div className="relative w-6 h-6">
                  <div className="absolute inset-0 w-full h-0.5 bg-black top-1/2 -translate-y-1/2"></div>
                  <div 
                    className={`absolute inset-0 w-0.5 text-18 h-full bg-black left-1/2 -translate-x-1/2 transition-transform duration-300 ${
                      activeIndex === index ? 'scale-y-0' : 'scale-y-100'
                    }`}
                  ></div>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="pb-4 text-18 text-black/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 