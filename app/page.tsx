"use client";

import Link from 'next/link';
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
  const targetRefs = useRef<Array<HTMLDivElement | null>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      }
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

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // 考虑固定导航栏的高度
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1528] to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="flex items-center justify-between px-6 py-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-5ESsHQvScLW9mtQxINzMmDavSm61kC.png"
              alt="coinGen.ai Logo"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              coinGen.ai
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
            >
              About
            </a>
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
              className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
            >
              How It Work
            </a>
            <Button 
              variant="outline" 
              className="border-[#695FE2] text-[#695FE2] hover:bg-[#695FE2] hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://x.com/coinGenAI_', '_blank')}
            >
              Twitter
            </Button>
            <Button 
              className="bg-[#695FE2] hover:bg-[#5648d1] text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/coinGenAI_Official', '_blank')}
            >
              Telegram
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="relative pt-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#695FE2]/20 via-transparent to-transparent opacity-30 animate-pulse" />
            <div 
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#695FE2]/20 rounded-full blur-3xl"
              style={{
                animation: 'float1 8s ease-in-out infinite',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
              }}
            />
            <div 
              className="absolute top-[60%] left-[45%] w-[600px] h-[600px] bg-[#4B0082]/30 rounded-full blur-3xl"
              style={{
                animation: 'float2 12s ease-in-out infinite',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
              }}
            />
          </div>
          <div className="max-w-6xl mx-auto px-6 py-16 lg:px-8 text-center">
            {/* Centered Logo */}
            <div className="mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-5ESsHQvScLW9mtQxINzMmDavSm61kC.png"
                alt="coinGen.ai Logo"
                width={160}
                height={160}
                className="mx-auto"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-[#695FE2] to-white bg-[200%_auto] animate-shine bg-clip-text text-transparent">
                Track. Analyze. Invest.
              </span>
              <span className="block text-[#695FE2] mt-2">The Solana Ecosystem, Now Smarter.</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
              Welcome to coinGen.ai, your new AI-powered companion designed to make the Solana ecosystem smarter, faster,
              and more accessible. Whether you're a developer, investor, or analyst, coinGen.ai is here to give you the
              data insights and AI-driven analytics you need to stay ahead in the rapidly evolving Solana space.
            </p>

            {/* CTA Button */}
            <Link 
            href="https://www.dextools.io/app/en/solana/pair-explorer/BCKbHJjMHtrDTVKJeWx3Au2E8iuskTFv1BKoPyGVm1YH?t=1750025469480" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button className="bg-[#695FE2] hover:bg-[#5648d1] text-white text-lg px-10 py-6 h-auto rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              DEXTools
            </Button>
            </Link>

            {/* Demo Image */}
            <div className="mt-20 relative transform-gpu" 
              style={{ 
                transform: `perspective(1000px) rotateX(${Math.min(scrollY * 0.02, 15)}deg)`,
                transition: 'transform 0.1s ease-out'
              }}>
              <Image
                src="/ui.png"
                alt="coinGen.ai Dashboard"
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="about" className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We simplify the noise and bring clarity to the chaos
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Imagine having the smartest AI on your side, analyzing token trends, tracking data, and organizing
              everything into neat, easy-to-understand categories. That's coinGen.ai—designed for those who want more
              than just numbers.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="bg-[#0e0e0f] border-0 backdrop-blur-sm hover:bg-[#0e0e0f]/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#695FE2]/20 h-[400px] rounded-2xl">
                      <CardContent className="flex flex-col p-6 h-full">
                        <div className="relative w-full h-48 mb-6 flex-shrink-0">
                          <Image
                            src={`/c-${index + 1}.png`}
                            alt={feature.title}
                            fill
                            className="object-contain object-left"
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
            <CarouselPrevious className="hidden md:flex h-12 w-12 bg-[#695FE2]/10 hover:bg-[#695FE2]/20 border-2 border-[#695FE2]/20 [&>svg]:text-[#695FE2] hover:[&>svg]:text-white [&:active>svg]:text-white">
              <ChevronLeft className="w-6 h-6 transition-colors" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:flex h-12 w-12 bg-[#695FE2]/10 hover:bg-[#695FE2]/20 border-2 border-[#695FE2]/20 [&>svg]:text-[#695FE2] hover:[&>svg]:text-white [&:active>svg]:text-white">
              <ChevronRight className="w-6 h-6 transition-colors" />
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
                  ref={(el: HTMLDivElement | null) => {
                    if (el) targetRefs.current[index] = el;
                  }}
                  className="text-gray-400 transition-colors duration-500"
                >
                  {group.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div id="features" className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
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
                    className="w-full justify-start gap-3 p-4 text-left text-base bg-black/40 data-[state=active]:bg-[#695FE2]/20 
                    data-[state=active]:text-white backdrop-blur-sm border border-white/5 hover:border-[#695FE2]/20 
                    transition-all duration-300 rounded-xl flex items-center group hover:translate-x-1"
                  >
                    <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse">
                      {feature.icon}
                    </span>
                    <span className="truncate">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                {keyFeatures.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id} className="mt-0">
                    <div className="grid gap-6">
                      <div className="relative aspect-video w-full max-w-2xl mx-auto overflow-hidden">
                        <Image
                          src={
                            feature.id === "token-tracking" ? "/f-1.svg" :
                            feature.id === "categorization" ? "/f-2.png" :
                            feature.id === "ai-insights" ? "/f-3.png" :
                            feature.id === "integration" ? "/f-4.png" :
                            "/f-5.png"
                          }
                          alt={feature.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#695FE2] text-left">
                        {feature.title}
                      </h3>
                      <div className="text-gray-300">{feature.description}</div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>

        {/* How Does It Work? Section */}
        <div id="how-it-works" className="max-w-6xl mx-auto px-6 py-24 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How Does It Work?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              coinGen.ai takes complex blockchain data and turns it into actionable insights. Here's how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 bg-[#695FE2] rounded-full flex items-center justify-center text-2xl font-bold animate-scale">
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
              Join the coinGen.ai community and let us do the hard work so you can focus on what matters most—building,
              investing, and growing in the Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-xl mx-auto">
            {[
              { img: 'icon-1.png', link: 'https://t.me/coinGenAI_Official' },
              { img: 'icon-2.png', link: 'https://x.com/coinGenAI_' },
              { img: 'icon-3.png', link: 'https://www.dextools.io/app/en/solana/pair-explorer/BCKbHJjMHtrDTVKJeWx3Au2E8iuskTFv1BKoPyGVm1YH?t=1750025469480' },
              { img: 'icon-4.png', link: 'https://dexscreener.com/solana/BCKbHJjMHtrDTVKJeWx3Au2E8iuskTFv1BKoPyGVm1YH' },
            ].map((item, i) => (
              <div key={i} className="group">
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={`/${item.img}`}
                        alt={`Feature ${i + 1}`}
                        fill
                        className="rounded-xl object-contain"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="relative w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={`/${item.img}`}
                      alt={`Feature ${i + 1}`}
                      fill
                      className="rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline Section */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#695FE2]/10 backdrop-blur-3xl">
            <div 
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#695FE2]/20 rounded-full blur-3xl"
              style={{
                animation: 'float1 8s ease-in-out infinite',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
              }}
            />
            <div 
              className="absolute top-[60%] left-[45%] w-[600px] h-[600px] bg-[#4B0082]/30 rounded-full blur-3xl"
              style={{
                animation: 'float2 12s ease-in-out infinite',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
              }}
            />
          </div>
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
            <div className="text-gray-400">© 2025 coinGen.ai. All rights reserved.</div>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/coinGenAI_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://t.me/coinGenAI_Official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/BCKbHJjMHtrDTVKJeWx3Au2E8iuskTFv1BKoPyGVm1YH?t=1750025469480" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                Dextools
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-48 overflow-hidden">
          <h2 className="text-[230px] font-bold text-center tracking-tighter opacity-20 absolute -bottom-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap animate-float-text">
            coinGen.ai
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
      "No more complex spreadsheets or searching through endless data. coinGen.ai gives you everything you need with a few clicks.",
  },
]

const userGroups = [
  {
    title: "Developers",
    description:
      "Want to see which tokens are picking up momentum? coinGen.ai's got your back with real-time analysis to guide your project choices.",
    icon: <Code className="w-6 h-6 text-[#695FE2]" />,
  },
  {
    title: "Investors",
    description:
      "Stop chasing trends. Let coinGen.ai give you the tools to identify potential opportunities before they blow up.",
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
      "With coinGen.ai, you'll never miss out on the next big thing in the Solana ecosystem. Track new tokens, rising stars, and the ones losing steam—all with real-time data.",
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
      "Built for ease of use, coinGen.ai works across all your devices, so you can get token data wherever you are—mobile, desktop, or tablet.",
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
