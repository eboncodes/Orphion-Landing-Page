import { Bot, Image as ImageIcon, Code2, Zap, Brain, FileText, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'
import Image from 'next/image'

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center rounded-sm border-t border-l">{children}</div>
    </div>
)

export function Features() {
    return (
        <section id="features" className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-12 px-6">
                <div className="relative z-10 text-center">
                    <h2
                        className="text-balance
bg-gradient-to-br from-white from-30% to-white/40
bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter
text-transparent sm:text-6xl"
                    >
                        One AI Agent. Limitless Possibilities.
                    </h2>
                    <p
                        className="text-balance
text-lg tracking-tight text-gray-400
md:text-xl"
                    >
                        From intelligent code generation to stunning image creation, document automation to data visualization—Orphion's AI agent adapts to your workflow and handles it all seamlessly.
                    </p>
                </div>
                
                <div className="relative w-full flex justify-center my-12">
                    <Image
                        src="/Orphion-canvas.png"
                        alt="Orphion Canvas"
                        width={1200}
                        height={1200}
                        className="rounded-t-lg"
                        style={{
                            maskImage:
                                "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
                        }}
                    />
                </div>

                <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 text-center md:mt-16 md:grid-cols-3">
                    <Card className="group border-white/10 bg-white/5 shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Bot className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Intelligent AI Agent</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">Advanced AI agent that thinks through problems, takes full steps, and adapts to your workflow with autonomous decision-making capabilities.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-white/10 bg-white/5 shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ImageIcon className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Image Generation & Editing</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">Create and edit stunning images using Nano Banana AI. Generate visuals from text or transform existing images with intelligent editing.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-white/10 bg-white/5 shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Code2 className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Code Generation & Preview</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">Expert coding assistant that generates, previews, and refines code in real-time. Perfect for rapid development and prototyping.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 pt-16 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Lightning Fast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Instant responses powered by optimized AI infrastructure for maximum productivity and seamless workflow.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />
                            <h3 className="text-sm font-medium">Deep Thinking</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Advanced reasoning capabilities that analyze complex problems and deliver thoughtful, comprehensive solutions.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FileText className="size-4" />
                            <h3 className="text-sm font-medium">Document Creation</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Create professional documents in Canvas and export them as PDF or DOCX with intelligent formatting.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4" />

                            <h3 className="text-sm font-medium">Charts & Graphs</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Generate interactive charts and graphs from your data with intelligent visualization recommendations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
