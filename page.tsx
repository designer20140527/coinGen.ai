"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  TrendingUp,
  BarChart,
  LineChart,
  FolderKanban,
  Brain,
  Laptop,
  Database,
  ArrowRight,
  Cpu,
  BarChart3,
  Wallet,
} from "lucide-react"
import { ParticleContainer } from "@/components/ui/particle-container"
import { GridBackground } from "@/components/ui/grid-background"

export default function Page() {
  const targetRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("text-white")
            entry.target.classList.remove("text-gray-400")
          } else {
            entry.target.classList.remove("text-white")
            entry.target.classList.add("text-gray-400")
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    targetRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1528] to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-5ESsHQvScLW9mtQxINzMmDavSm61kC.png"
            alt="CoinGen.ai Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold">CoinGen.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Documentation
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Pricing
          </a>
          <Button className="bg-[#695FE2] hover:bg-[#5648d1] text-white">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:px-8 text-center">
          {/* Centered Logo */}
          <div className="mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-5ESsHQvScLW9mtQxINzMmDavSm61kC.png"
              alt="CoinGen.ai Logo"
              width={160}
              height={160}
              className="mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Track. Analyze. Invest.
            <span className="block text-[#695FE2] mt-2">The Solana Ecosystem, Now Smarter.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Welcome to CoinGen.ai, your new AI-powered companion designed to make the Solana ecosystem smarter, faster,
            and more accessible. Whether you're a developer, investor, or analyst, CoinGen.ai is here to give you the
            data insights and AI-driven analytics you need to stay ahead in the rapidly evolving Solana space.
          </p>

          {/* CTA Button */}
          <Button className="bg-[#695FE2] hover:bg-[#5648d1] text-white text-lg px-10 py-6 h-auto rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            Start Analyzing
          </Button>

          {/* Demo Image */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-nDtu7m4QU1NV75Y5I3Dw64vW4Vs2RM.png"
              alt="CoinGen.ai Dashboard"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We simplify the noise and bring clarity to the chaos
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Imagine having the smartest AI on your side, analyzing token trends, tracking data, and organizing
              everything into neat, easy-to-understand categories. That's CoinGen.ai—designed for those who want more
              than just numbers.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-black/40 border-0 backdrop-blur-sm">
                      <CardContent className="flex flex-col p-6">
                        <div className="relative w-full h-48 mb-6">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-nDtu7m4QU1NV75Y5I3Dw64vW4Vs2RM.png"
                            alt={feature.title}
                            fill
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#695FE2]">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex h-12 w-12 bg-[#695FE2]/10 hover:bg-[#695FE2]/20 border-2 border-[#695FE2]/20">
              <ChevronLeft className="w-6 h-6 text-[#695FE2]" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:flex h-12 w-12 bg-[#695FE2]/10 hover:bg-[#695FE2]/20 border-2 border-[#695FE2]/20">
              <ChevronRight className="w-6 h-6 text-[#695FE2]" />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Who's it for? Section with updated cards */}
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who's it for?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userGroups.map((group, index) => (
              <div
                key={group.title}
                className="relative group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:border-[#695FE2]/20 overflow-hidden"
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--mouse-x": `${mousePosition.x}px`,
                    "--mouse-y": `${mousePosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(105,95,226,0.15), transparent 40%)",
                  }}
                />
                <div className="flex items-center gap-3 mb-4">
                  {group.icon}
                  <h3 className="text-2xl font-semibold text-[#695FE2]">{group.title}</h3>
                </div>
                <div
                  ref={(el) => (targetRefs.current[index] = el)}
                  className="text-gray-400 transition-colors duration-500"
                >
                  {group.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Key Features</h2>
          </div>

          <Tabs defaultValue={keyFeatures[0].id} className="w-full">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <TabsList className="flex flex-col h-auto bg-transparent p-0 space-y-2">
                {keyFeatures.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="w-full justify-start gap-3 p-4 text-left text-base bg-black/40 data-[state=active]:bg-[#695FE2]/20 data-[state=active]:text-white backdrop-blur-sm border border-white/5 hover:border-[#695FE2]/20 transition-all duration-300 rounded-xl flex items-center"
                  >
                    <span className="flex-shrink-0">{feature.icon}</span>
                    <span className="truncate">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                {keyFeatures.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id} className="mt-0">
                    <div className="grid gap-6">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-nDtu7m4QU1NV75Y5I3Dw64vW4Vs2RM.png"
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-gray-300">{feature.description}</div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>

        {/* How Does It Work? Section */}
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How Does It Work?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              CoinGen.ai takes complex blockchain data and turns it into actionable insights. Here's how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#695FE2] rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="pl-16">
                  <h3 className="text-xl font-semibold mb-4 text-[#695FE2]">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Today Section */}
        <div className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Started Today</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Join the CoinGen.ai community and let us do the hard work so you can focus on what matters most—building,
              investing, and growing in the Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-3xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="group">
                <div className="relative w-32 h-32 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl z-10" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-nDtu7m4QU1NV75Y5I3Dw64vW4Vs2RM.png"
                    alt={`Feature ${i + 1}`}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline Section */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#695FE2]/10 backdrop-blur-3xl"></div>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Where Solana's tokens come to life.</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">Powered by AI, designed for YOU.</p>
              <Button className="bg-white text-[#695FE2] hover:bg-gray-100 text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[1000px] h-[1000px] opacity-30">
            <div className="absolute inset-0 bg-[#695FE2] blur-[120px] rounded-full"></div>
          </div>
          <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] opacity-20">
            <div className="absolute inset-0 bg-[#9747FF] blur-[100px] rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-8 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">© 2024 CoinGen.ai. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-48 overflow-hidden">
          <h2 className="text-[200px] font-bold text-center tracking-tighter opacity-20 absolute -bottom-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            CoinGen.ai
          </h2>
        </div>
      </footer>
      <ParticleContainer />
      <GridBackground />
    </div>
  )
}

const features = [
  {
    title: "Real-Time Token Analytics",
    description: "Get live updates and trends for Solana's token ecosystem.",
  },
  {
    title: "Comprehensive Data",
    description: "From market cap, liquidity, to price movement—we've got it all covered.",
  },
  {
    title: "AI-powered Insights",
    description:
      "Using advanced AI, we automatically categorize, summarize, and provide insights for developers, investors, and analysts.",
  },
  {
    title: "Easy to Use",
    description:
      "No more complex spreadsheets or searching through endless data. CoinGen.ai gives you everything you need with a few clicks.",
  },
]

const userGroups = [
  {
    title: "Developers",
    description:
      "Want to see which tokens are picking up momentum? CoinGen.ai's got your back with real-time analysis to guide your project choices.",
    icon: <Code className="w-6 h-6 text-[#695FE2]" />,
  },
  {
    title: "Investors",
    description:
      "Stop chasing trends. Let CoinGen.ai give you the tools to identify potential opportunities before they blow up.",
    icon: <TrendingUp className="w-6 h-6 text-[#695FE2]" />,
  },
  {
    title: "Analysts",
    description:
      "Need data? You'll love our automatic categorization and comprehensive reports to drive your decisions.",
    icon: <BarChart className="w-6 h-6 text-[#695FE2]" />,
  },
]

const keyFeatures = [
  {
    id: "token-tracking",
    title: "Token Trend Tracking",
    description:
      "With CoinGen.ai, you'll never miss out on the next big thing in the Solana ecosystem. Track new tokens, rising stars, and the ones losing steam—all with real-time data.",
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    id: "categorization",
    title: "Automatic Token Categorization",
    description:
      "No more sifting through endless spreadsheets! Our AI auto-organizes tokens by type, making it easy to spot patterns and trends, from utility tokens to governance tokens and more.",
    icon: <FolderKanban className="w-5 h-5" />,
  },
  {
    id: "ai-insights",
    title: "AI-Driven Insights",
    description:
      "Let our AI do the heavy lifting for you. It doesn't just show you the data—it analyzes it, summarizes it, and gives you actionable insights you can trust.",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description:
      "Built for ease of use, CoinGen.ai works across all your devices, so you can get token data wherever you are—mobile, desktop, or tablet.",
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    id: "ecosystem-data",
    title: "Up-to-date Solana Ecosystem Data",
    description:
      "We cover everything from the most popular tokens to emerging ones. All the tokens you care about, analyzed in one place, updated continuously for accuracy.",
    icon: <Database className="w-5 h-5" />,
  },
]

const steps = [
  {
    title: "Data Collection",
    description: "We collect data from the Solana blockchain in real time.",
    icon: <Database className="w-12 h-12" />,
  },
  {
    title: "AI Processing",
    description: "Our AI processes the data, categorizes it, and highlights key trends.",
    icon: <Cpu className="w-12 h-12" />,
  },
  {
    title: "Insight Generation",
    description: "You get it all—straightforward charts, stats, and reports—so you can make smarter decisions.",
    icon: <BarChart3 className="w-12 h-12" />,
  },
  {
    title: "Portfolio Tracking",
    description: "You get to track your portfolio and adjust investments based on the most up-to-date trends.",
    icon: <Wallet className="w-12 h-12" />,
  },
]

