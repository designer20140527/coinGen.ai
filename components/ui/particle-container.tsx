"use client"

import { useEffect, useRef } from "react"

export function ParticleContainer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 50
    const connectionDistance = 100
    const mouseRadius = 100

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.directionX = (Math.random() - 0.5) * 0.5
        this.directionY = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 1.5 + 0.5
        this.color = "#695FE2"
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) {
          this.directionX = -this.directionX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX
        this.y += this.directionY
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    function init() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(105, 95, 226, ${1 - distance / connectionDistance})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" />
}

