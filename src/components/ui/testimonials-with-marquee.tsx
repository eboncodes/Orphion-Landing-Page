import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { DemoBackgroundPaths } from "./background-paths-demo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"

interface TestimonialsSectionProps {
  title: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
  onJoinWaitlist?: () => void
}

export function TestimonialsSection({ 
  title,
  testimonials,
  className,
  onJoinWaitlist
}: TestimonialsSectionProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className={cn(
      "bg-black text-foreground relative overflow-hidden",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="absolute inset-0">
        <DemoBackgroundPaths />
      </div>
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2
            className="text-balance 
          bg-gradient-to-br from-white from-30% to-white/40
          bg-clip-text py-6 text-6xl font-semibold leading-none tracking-tighter 
          text-transparent sm:text-7xl"
          >
            {title}
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
              {duplicatedTestimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-duplicate-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>

        {/* Waitlist Section */}
        <div className="relative mt-24 md:mt-32 px-6 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-transparent">
                Join the Future of AI-Powered Productivity
              </h2>
              <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
                Be among the first to experience Orphion's revolutionary AI agent. Get early access, exclusive features, and help shape the future of intelligent workflows.
              </p>
            </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="pr-4.5"
                  onClick={onJoinWaitlist}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  <span className="text-nowrap">Join Waitlist</span>
                  <ChevronRight className="ml-1 opacity-50" />
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                  <Link href="https://tejintelligence.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-nowrap">Learn More</span>
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
