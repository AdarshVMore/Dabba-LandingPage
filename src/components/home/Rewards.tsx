"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Rewards() {
  const [position, setPosition] = useState(0);
  const maxReward = 36; // Maximum WXM reward
  const calculateReward = (pos: number) => Math.round((pos / 100) * maxReward);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const newPosition = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(newPosition);
  };

  return (
    <section id="rewards">
      <div className="container">
        <div className="py-10 md:py-20">
          <div className="bg-[#EE205F] rounded-[32px] border border-[#C6144A]">
            <div className="bg-[url('/images/pattern-bg-2.webp')] bg-cover px-3">
              <div className="py-10 md:pt-12 md:pb-20">
                

                <div className="flex gap-3 md:gap-6 items-center justify-center mb-7">
                  <h2
                    className="
        font-heading 
        text-[28px] 
        md:text-[48px] 
        uppercase 
        leading-[1.2] 
        tracking-[1px]
        text-yellow
        font-normal
        heading-yellow
      "
                  >
                    Rewards calculator
                  </h2>
                  <Image
                    src="/img/bitcoin-icon.webp"
                    alt=""
                    width={60}
                    height={60}
                    className="max-w-[20px] md:max-w-[60px] w-auto h-auto"
                  />{" "}
                  <Image
                    src="/images/bitcoin-icon.webp"
                    alt=""
                    width={60}
                    height={60}
                    className="max-w-[20px] md:max-w-[60px]"
                  />
                </div>

                {/* Calculator Display */}
                <div className="relative max-w-[610px] mx-auto mb-10 md:mb-15">
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-[#262626] content-none top-3 scale-[0.96] z-10"></div>
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-[#202020] content-none top-6 scale-[0.92] z-0"></div>

                  <div className="bg-[#333] rounded-2xl border border-[#484848] py-3 text-center relative z-20">
                    <h3 className="text-16 md:text-[28px] font-anton text-white uppercase mb-3 md:mb-6">
                      {calculateReward(position)} WXM
                    </h3>

                    <p className="text-12 text-white/60 text-center uppercase mb-0 font-bold">
                      total wxm reward over 12 months <br />
                      starting <span className="text-yellow">feb 1.2025</span>,
                      limited to 2400 dabbas
                    </p>
                  </div>
                </div>
                <h2 className="heading text-white text-2xl text-center mb-10">
                  CALCULATE YOUR REWARDS
                </h2>

                {/* Reward Boxes */}
                <div className="flex items-center justify-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mb-12 md:mb-15">
                  
                  {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                      <div
                        className={`${
                          i % 2 === 0
                            ? "bg-[#f2f2f2] rotate-45"
                            : "bg-[#D5F278]"
                        } rounded-lg w-15 md:w-[124px] aspect-square flex justify-center`}
                      >
                        <div
                          className={`${
                            i % 2 === 0 ? "-rotate-45" : ""
                          } flex flex-col gap-1 md:gap-4 justify-center items-center`}
                        >
                          <h3 className="text-24 md:text-[36px] uppercase">
                            {calculateReward(position)}
                          </h3>
                          <p className="mb-0 text-12 md:text-16 font-semibold">
                            WXM
                          </p>
                        </div>
                      </div>
                      {i < 2 && (
                        <div className="relative z-10">
                          <svg
                            className={`w-6.5 md:w-auto h-auto ${i === 2 ? "rotate-180" : ""}`}
                            width="48"
                            height="40"
                            fill="none"
                            viewBox="0 0 48 40"
                          >
                            <path
                              fill={`url(#gradient-${i})`}
                              d="M0 40V0c21.614 9 32.95 8.908 48 0v38c-16-9.5-29.754-9.5-48 2Z"
                            />
                            <defs>
                              <linearGradient
                                id={`gradient-${i}`}
                                x1="-1.412"
                                x2="48.089"
                                y1="20"
                                y2="21.438"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor={i === 0 ? "#F2F2F2" : "#D5F278"} />
                                <stop offset="1" stopColor={i === 0 ? "#D5F278" : "#F2F2F2"} />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <h2 className="heading text-white text-2xl text-center mb-10">
                  CALCULATE YOUR REWARDS
                </h2>

                {/* Slider */}
                <div className="relative max-w-[610px] mx-auto mb-12 md:mb-20">
                  <div
                    className="absolute left-15 top-1/2 -translate-y-1/2 max-w-[80px] cursor-grab active:cursor-grabbing z-20"
                    style={{ left: `${position}%` }}
                    onMouseDown={(e) => handleDrag(e)}
                  >
                    <Image
                      src="/images/weather-xm-box.webp"
                      alt="Slider"
                      width={80}
                      height={80}
                      className="pointer-events-none"
                    />
                  </div>
                  <div className="w-full h-3 bg-transparent rounded-full flex items-center z-10">
                    <div className="w-full h-[14px] bg-white [mask-image:linear-gradient(90deg,white_50%,transparent_50%)] [mask-size:30px_1%]"></div>
                  </div>
                </div>

                

                <div className="text-center">
                  <Button>Join Whitelist</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gradient h-[1px] w-full"></div>
      </div>
    </section>
  );
}
