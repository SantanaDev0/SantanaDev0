import { motion } from 'framer-motion'

interface BackgroundProps {
  imageUrl: string
}

export function Background({ imageUrl }: BackgroundProps) {
  // Cria partículas de anime flutuantes
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
    size: 2 + Math.random() * 4,
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: 'brightness(0.4) saturate(1.2)',
        }}
      />

      {/* Gradiente animado de anime */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(88, 28, 135, 0.3), rgba(157, 23, 77, 0.2), rgba(30, 58, 138, 0.3))',
            'linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(88, 28, 135, 0.3), rgba(157, 23, 77, 0.2))',
            'linear-gradient(to bottom right, rgba(157, 23, 77, 0.2), rgba(30, 58, 138, 0.3), rgba(88, 28, 135, 0.3))',
            'linear-gradient(to bottom right, rgba(88, 28, 135, 0.3), rgba(157, 23, 77, 0.2), rgba(30, 58, 138, 0.3))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Partículas flutuantes estilo anime */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-60 blur-sm"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ['100vh', '-10vh'],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Gradiente para transição suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* SVG decorativo */}
      <img
        src="/stroke.svg"
        className="absolute bottom-0 left-250 translate-y-[5%] w-300 h-auto opacity-8 pointer-events-none select-none"
      />
    </div>
  )
}
