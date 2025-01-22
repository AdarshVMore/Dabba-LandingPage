'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <div className="py-6 md:py-4 flex gap-13 justify-between md:justify-center items-center">
          <div className="max-w-[80px]">
            <Link href="/">
              <Image 
                src="/images/wifidabba-wxm-logo.webp" 
                alt="wifidabba-wxm-logo"
                width={80}
                height={40}
              />
            </Link>
          </div>

          <div>
            <button 
              className="flex flex-col gap-2 w-7 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="rounded-full w-full h-1 shadow-smallShadow bg-yellow border border-black"></span>
              <span className="rounded-full w-full h-1 shadow-smallShadow bg-yellow border border-black"></span>
            </button>

            <nav className={`flex gap-13 nav-main ${isMenuOpen ? 'active' : ''}`}>
              <div className="absolute top-0 left-0 right-0 -translate-y-[60%] block md:hidden">
                <Image 
                  src="/images/speech-popup.webp" 
                  alt=""
                  width={300}
                  height={200}
                  className="scale-[1.5]"
                />
              </div>

              <button
                className="absolute top-5 right-5 block md:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="21" height="21" fill="none" viewBox="0 0 21 21" className="drop-shadow-[1px_1px_0px_#fff]">
                  <path
                    fill="#000"
                    stroke="#fff"
                    strokeWidth=".5"
                    d="M20.21 18.543a1.18 1.18 0 1 1-1.669 1.67l-7.555-7.558-.177-.177-.177.177-7.558 7.555a1.18 1.18 0 0 1-1.67-1.67l7.559-7.554.177-.177-.177-.177-7.556-7.558a1.18 1.18 0 1 1 1.67-1.669l7.555 7.558.177.176.177-.176 7.558-7.56a1.18 1.18 0 0 1 1.67 1.67l-7.559 7.559-.176.177.176.177 7.556 7.557Z"
                  />
                </svg>
              </button>

              <div>
                <Link href="#rewards">
                  <Button variant="white">Rewards</Button>
                </Link>
              </div>
              <div>
                <Link href="#quests">
                  <Button variant="white">Quests</Button>
                </Link>
              </div>
              <div>
                <Link href="#whitelist">
                  <Button>Whitelist</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 