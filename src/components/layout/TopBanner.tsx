'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#5DE2FA] border border-[#6FC7D6] py-2 overflow-hidden sticky top-0 z-[999]">
      <div className="max-w-[1238px] mx-auto px-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="z-50 absolute top-0 right-1 xl:-right-8 w-6 aspect-square rounded border border-black shadow-smallShadow bg-white hover:bg-yellow hover:shadow-none grid place-content-center"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path
              fill="#000"
              d="M16.904 15.171a1.226 1.226 0 0 1-1.734 1.734l-6.476-6.478-6.479 6.476a1.226 1.226 0 1 1-1.734-1.734L6.96 8.693.483 2.215A1.226 1.226 0 1 1 2.217.481L8.693 6.96 15.172.48a1.226 1.226 0 0 1 1.734 1.734l-6.478 6.48 6.476 6.477Z"
            />
          </svg>
        </button>

        <div className="flex flex-wrap -mx-4 items-center gap-y-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex gap-3 items-center">
              <div>
                <Image
                  src="/images/weather-xm-box.webp"
                  alt="Weather XM Box"
                  width={96}
                  height={96}
                  className="max-w-14 md:max-w-24"
                />
              </div>

              <div>
                <h3 className="inline-flex gap-1 md:gap-3 items-center text-18 lg:text-24 mb-2 md:mb-0 relative pr-10 font-anton">
                  Dabba wxm lightning deal
                  <Image
                    src="/images/moon-rocket.webp"
                    alt=""
                    width={44}
                    height={44}
                    className="max-w-[30px] md:max-w-[44px] hidden md:block"
                  />
                </h3>

                <p className="mb-0 text-12 md:text-14">
                  Purchase a limited edition lighting deal hotspot to also receive WXM rewards.
                  <br />
                  <span className="font-bold">
                    Purchase with $WXM and receive a 5% discount.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-16 md:text-20 font-bold font-anton uppercase">
                    Hotspots reserved
                  </h3>
                  <div className="text-12 font-plus-jakarta font-semibold">0 / 2400 Units</div>
                </div>

                <div className="w-full h-2 md:h-4 rounded overflow-hidden relative bg-[#DDFEFF]">
                  <Image
                    src="/images/progress.webp"
                    alt=""
                    fill
                    className="-translate-x-1/2"
                  />
                </div>
              </div>

              <div>
              <Button>Whitelist</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 