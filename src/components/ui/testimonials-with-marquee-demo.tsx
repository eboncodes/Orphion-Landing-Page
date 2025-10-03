"use client";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"
import { WaitlistDialog } from "@/components/ui/waitlist-dialog"
import { useState } from "react"


const testimonials = [
  {
    author: {
      name: "Rafiul Islam",
      handle: "Software Engineer",
      avatar: ""
    },
    text: "Orphion has completely revolutionized our development workflow. The AI agent's ability to understand context and generate precise code is outstanding. Highly recommended!"
  },
  {
    author: {
      name: "Tasnim Ahmed",
      handle: "Product Designer",
      avatar: ""
    },
    text: "The image generation feature with Nano Banana is incredible! Creating and editing visuals has never been this easy. Orphion is a game-changer for our design team."
  },
  {
    author: {
      name: "Mehedi Hasan",
      handle: "Full Stack Developer",
      avatar: ""
    },
    text: "Orphion's code preview and thinking capabilities are phenomenal. It feels like having an expert developer on the team 24/7. Best AI tool I've used!"
  }
]

export function TestimonialsSectionDemo() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      <TestimonialsSection
        title="What Our Beta Testers Are Saying"
        testimonials={testimonials}
        onJoinWaitlist={() => setIsWaitlistOpen(true)}
      />
    </>
  )
}
