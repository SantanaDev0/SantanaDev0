import { motion } from 'framer-motion'

interface BackgroundProps {
  imageUrl: string
}

export function Background({ imageUrl }: BackgroundProps) {
  // Cria partículas de anime flutuantes com mais variação
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
    size: 2 + Math.random() * 6,
    opacity: 0.3 + Math.random() * 0.7,
  }))

  // Estrelas brilhantes estilo anime
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
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
          className="absolute rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 blur-sm"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ['100vh', '-10vh'],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Estrelas brilhantes estilo anime */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute"
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <div className="relative">
            {/* Brilho central */}
            <div className="w-2 h-2 bg-white rounded-full blur-sm" />
            {/* Raios de luz */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rotate-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rotate-90" />
          </div>
        </motion.div>
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
