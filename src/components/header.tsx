import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useRef } from 'react'

gsap.registerPlugin(TextPlugin)

export function Header() {
  const h1Ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
    tl.to(h1Ref.current, {
      duration: 2,
      text: 'Santana.Dev',
      ease: 'none',
    })
    tl.to(h1Ref.current, {
      duration: 2,
      text: ' ',
      ease: 'none',
      delay: 1.5,
    })
  }, [])

  return (
    <header className="relative w-full flex flex-col items-center justify-center overflow-hidden py-20 px-4 text-center">
      <h1
        ref={h1Ref}
        className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground relative z-10 h-20"
      >
        {' '}
      </h1>

      <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto relative z-10">
        description
      </p>
    </header>
  )
}

