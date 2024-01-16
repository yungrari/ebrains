import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Window({ open }: { open?: string }) {
  return (
    <>
      <Link
        className="fixed top-0 right-0 p-2 z-10 uppercase tracking-tighter font-medium hover:opacity-50"
        href={!open ? '/?open=1' : '/'}
        title="About"
      >
        About
      </Link>

      <article
        className={cn(
          'flex flex-col justify-center text-4xl md:text-5xl font-medium tracking-tighter indent-20 backdrop-blur-lg bg-white bg-opacity-50 transition-opacity duration-500',
          !open
            ? 'invisible opacity-0 h-px'
            : 'visible opacity-1 h-auto min-h-screen p-2'
        )}
      >
        <h1 className="indent-0">
          EBRAINS CoCreate Artificial Intelligence Art
        </h1>

        <p>
          3D Web application to visually communicate convergence of design,
          neurotechnology, neuromorphic computing, Trustworthy AI, and
          Sustainable development.
        </p>

        <p>
          The application was inspired and co-developed within EBRAINS Community
          CoCreate AI project.
        </p>

        <p>
          EBRAINS CoCreate Artificial Intelligence Art is currently showcased on{' '}
          <a
            className="underline"
            href="https://ebrains-community.web.app/_ideas/-MuqsAgs1AnL0PK2RVJF/about"
            title="EBRAINS CoCreate Artificial Intelligence Art"
            target="_blank"
            rel="noopener noreferrer"
          >
            EBRAINS.EU
          </a>{' '}
          Science Market.
        </p>

        <p>
          EBRAINS is a state-of-the-art ecosystem for neuroscience created by
          the EU-funded Human Brain Project.
        </p>
      </article>
    </>
  )
}
