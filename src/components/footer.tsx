import { GridPattern } from '@/components/magicui/grid-pattern'
import { cn } from '@/lib/utils'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className="relative w-full z-40 mt-4">
      <div className="mx-auto max-w-[70rem] w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-t-xl border border-border border-b-0 overflow-hidden backdrop-blur-sm py-4 px-6 bg-background/60">
          <div className="absolute inset-0 -z-[5] pointer-events-none">
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                '[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] opacity-30 dark:opacity-60'
              )}
            />
          </div>

          <p className="text-sm text-foreground/80 select-none">
            © {new Date().getFullYear()} Santana.Dev - this website is <a className='hover:underline font-bold' href="https://github.com/SantanaDev0/SantanaDev.main">opensource</a>
          </p>

          <div className="flex items-center gap-4 text-foreground/80">
            <a
              href="https://github.com/SantanaDev0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="mailto:contato@santana.dev"
              className="hover:text-primary transition-colors"
            >
              <IoIosMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
