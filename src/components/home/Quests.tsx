'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const quests = [
  {
    title: 'Follow Wifidabba on X/Twitter',
    xp: 100,
    status: 'completed'
  },
  {
    title: 'Share a tweet about Wifidabba',
    xp: 300,
    status: 'pending'
  },
  {
    title: "Join Wifidabba's Discord community",
    xp: 800,
    status: 'pending'
  },
  {
    title: 'Participate in a Wifidabba webinar',
    xp: 1000,
    status: 'pending'
  },
  {
    title: 'Participate in a beta test for new features',
    xp: 2000,
    status: 'pending'
  },
  {
    title: 'Become a Wifidabba ambassador',
    xp: 5000,
    status: 'pending'
  }
]

export default function Quests() {
  return (
    <section className="py-10 md:py-20" id="quests">
      <div className="max-w-[1290px] mx-auto px-4 relative">
        <div className="relative mb-10">
          {/* Decorative SVGs */}
          <div className="hidden md:block absolute top-15 left-[55%]">
            <svg width="48" height="40" fill="none" viewBox="0 0 48 40">
              <path
                fill="url(#aa)"
                d="M48 40V0C26.386 9 15.05 8.908 0 0v38c16-9.5 29.754-9.5 48 2Z"
              />
              <defs>
                <linearGradient
                  id="aa"
                  x1="49.412"
                  x2="-.089"
                  y1="20"
                  y2="21.438"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2F2F2" />
                  <stop offset="1" stopColor="#D5F278" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-wrap -mx-4 items-center flex-col-reverse md:flex-row gap-y-4">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="heading-yellow mb-4">WXM x Dabba Quest</h2>
              <p className="max-w-[610px] mb-6 font-semibold">
                Join the journey to earn XP by completing exciting challenges.
                Level up your engagement with Wifidabba and unlock rewards as
                you progress!
              </p>

              <div className="flex items-center gap-6">
                <Button>Connect Wallet</Button>
                <a
                  href="#!"
                  className="font-heading text-16 pb-1 border-b-2 border-dashed border-b-black hover:border-transparent"
                >
                  See Terms & Condition
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <div className="md:ml-auto max-w-[180px] md:max-w-[280px]">
                <Image 
                  src="/images/dabba-quest.webp" 
                  alt="Dabba Quest"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 font-anton">
          {quests.map((quest, index) => (
            <div key={index} className="bg-[#CDF4FB] rounded-2xl overflow-hidden">
              <div className="bg-[url('/images/pattern-bg-2.webp')] flex gap-12 p-4 bg-cover">
                <div className="flex flex-col justify-between flex-1">
                  <h3 className="text-16/5 md:text-20/7 uppercase">
                    {quest.title}
                  </h3>

                  <Button 
                    className={quest.status === 'completed' ? 'bg-[#0ce201]' : ''}
                    variant="default"
                    disabled={quest.status === 'completed'}
                  >
                    {quest.status === 'completed' ? 'Completed' : 'Start Quest'}
                  </Button>
                </div>

                <div className="w-[110px] h-[100px] text-24 md:w-[155px] md:h-[145px] grid place-content-center font-heading uppercase md:text-[36px] shadow-bigShadow blue-white-gradient border border-black rounded-lg">
                  {quest.xp} XP
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button className="w-full">VIEW ALL QUESTS</Button>
        </div>
      </div>
    </section>
  )
} 