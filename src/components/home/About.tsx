'use client'

import React from 'react'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="">
          
          <div className="relative">
            <div className="max-w-[840px] mx-auto">
              <div className="static md:absolute max-w-[540px] top-5 right-32 bg-[url('/images/speech-popup.webp')] bg-contain bg-center px-12 md:px-22.5 py-[70px] md:py-[120px] bg-no-repeat">
                <h2 className="text-16 font-anton md:text-[28px] uppercase leading-[1.2] tracking-[2px] text-center translate-x-2 max-w-[212px] md:max-w-full mx-auto">
                  participate in the lighting deal to receive $WXM and $DBT rewards
                </h2>
              </div>
              
              <div>
                <Image 
                  src="/images/india-map.webp" 
                  alt="India Map"
                  width={840}
                  height={600}
                  className="w-full"
                />
              </div>

              <div className="text-center mt-18">
                *Participants will receive a genesis airdrop uptill token launch
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 