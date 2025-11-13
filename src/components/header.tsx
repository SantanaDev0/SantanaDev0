import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useRef, useState } from 'react'

gsap.registerPlugin(TextPlugin)

export function Header() {
  const h1Ref = useRef(null)
  const dotsRef = useRef(null)
  const [showDots, setShowDots] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowDots(true)
    })

    // Animação inicial fluida do nome completo
    tl.to(h1Ref.current, {
      duration: 2.5,
      text: 'SantanaDev0',
      ease: 'power2.inOut',
    })
    .to(h1Ref.current, {
      duration: 0.5,
      delay: 0.5,
    })
    .to(h1Ref.current, {
      duration: 0.8,
      text: 'SantanaDev',
      ease: 'power2.inOut',
    })
  }, [])

  // Animação dos pontos
  useGSAP(() => {
    if (showDots && dotsRef.current) {
      const dotsTl = gsap.timeline({ repeat: -1 })
      dotsTl
        .to(dotsRef.current, { duration: 0.5, text: '.', ease: 'none' })
        .to(dotsRef.current, { duration: 0.5, text: '..', ease: 'none' })
        .to(dotsRef.current, { duration: 0.5, text: '...', ease: 'none' })
        .to(dotsRef.current, { duration: 0.5, text: '..', ease: 'none' })
        .to(dotsRef.current, { duration: 0.5, text: '.', ease: 'none' })
        .to(dotsRef.current, { duration: 0.5, text: '', ease: 'none' })
    }
  }, [showDots])

  return (
    <header className="relative w-full flex flex-col items-center justify-center overflow-hidden py-20 px-4 text-center">
      <div className="flex items-center gap-1">
        <h1
          ref={h1Ref}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground relative z-10"
        >
          {' '}
        </h1>
        {showDots && (
          <span
            ref={dotsRef}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-muted-foreground relative z-10 w-16"
          >
          </span>
        )}
        {showDots && (
          <span className="text-4xl sm:text-5xl text-muted-foreground/60 ml-2 animate-pulse">
            ⟳
          </span>
        )}
      </div>

      <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto relative z-10">
        Desenvolvedor Full Stack apaixonado por criar experiências web únicas, com um toque especial de anime
      </p>
    </header>
  )
}

