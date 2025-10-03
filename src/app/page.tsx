"use client";
import React from 'react';
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-demo";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Features } from "@/components/ui/features-6";
import { Hero } from "@/components/ui/hero-1";
import { Footer } from "@/components/layout/footer";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Lenis from '@studio-freight/lenis'
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-with-marquee-demo";

export default function Home() {
	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	const images = [
		{
			src: '/3d/one.png',
			alt: 'Parallax Image 1',
		},
		{
			src: '/3d/two.png',
			alt: 'Parallax Image 2',
		},
		{
			src: '/3d/three.png',
			alt: 'Parallax Image 3',
		},
		{
			src: '/3d/four.png',
			alt: 'Parallax Image 4',
		},
		{
			src: '/3d/five.png',
			alt: 'Parallax Image 5',
		},
		{
			src: '/3d/six.png',
			alt: 'Parallax Image 6',
		},
		{
			src: '/3d/seven.png',
			alt: 'Parallax Image 7',
		},
	];
  return (
    <>
      <NavbarDemo />
      <Hero
        title="Build. Research. Create Smarter with Orphion"
        subtitle="Unlock your full potential with Orphion's intelligent AI agent. Streamline workflows and accelerate productivity with enterprise-grade security, lightning-fast performance, and intuitive simplicity—unified on one powerful platform."
      />
      <section id="integrations" className="bg-black w-full py-20">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <h2
              className="text-balance 
          bg-gradient-to-br from-white from-30% to-white/40
          bg-clip-text py-6 text-6xl font-semibold leading-none tracking-tighter 
          text-transparent sm:text-7xl"
            >
              Orphion integrates with
            </h2>
            <p
              className="text-balance 
          text-xl tracking-tight text-gray-400 
          md:text-2xl"
            >
              Everyday apps you use
            </p>
          </div>
          <AnimatedBeamMultipleOutputDemo className="h-[500px]" />
        </div>
        <Features />
        <div className="text-center">
          <h2
            className="text-balance 
          bg-gradient-to-br from-white from-30% to-white/40
          bg-clip-text py-6 text-6xl font-semibold leading-none tracking-tighter 
          text-transparent sm:text-7xl"
          >
            Do more with Orphion
          </h2>
        </div>
        <ZoomParallax images={images} />
        <TestimonialsSectionDemo />
      </section>
      <Footer />
    </>
  );
}
