"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full px-6 text-center md:px-8 
      min-h-screen overflow-hidden 
      bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)]  
      dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] 
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-white dark:bg-black 
        bg-[radial-gradient(closest-side,#fff_82%,#000000)] 
        dark:bg-[radial-gradient(closest-side,#000_82%,#ffffff_99%_50%)]"
      />

      <div className="pt-40">
        {/* Eyebrow */}
        {eyebrow && (
          <a href="#" className="group">
            <span
              className="text-sm text-gray-600 dark:text-gray-400 font-geist mx-auto px-5 py-2 
              bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
              border-[2px] border-gray-300/20 dark:border-white/5 
              rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
            >
              {eyebrow}
              <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        )}

        {/* Title */}
        <h1
          className="text-balance 
          bg-gradient-to-br from-black from-30% to-black/40 
          bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
          text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
          dark:from-white dark:to-white/40"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="mb-12 text-balance 
          text-lg tracking-tight text-gray-600 dark:text-gray-400 
          md:text-xl"
        >
          {subtitle}
        </p>
      </div>

      <div className="relative mt-12 w-full flex justify-center">
        <Image
          src="/Orphion.png"
          alt="Orphion"
          width={1200}
          height={1200}
          className="rounded-t-lg"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Bottom Fade */}
      <div
        className="relative mt-32 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_2%,transparent)]"
      />
    </section>
  )
}
