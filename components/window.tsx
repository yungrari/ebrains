import { useId } from 'react'

export default function Window() {
  const id = useId()

  return (
    <>
      <label
        className="fixed top-0 right-0 p-2 z-10 uppercase tracking-tighter font-medium cursor-pointer hover:opacity-50"
        htmlFor={id}
        title="About"
      >
        About
      </label>

      <input className="hidden peer" id={id} type="checkbox" />

      <article className="flex flex-col justify-center text-3xl md:text-5xl font-medium tracking-tighter indent-20 backdrop-blur-lg bg-white bg-opacity-50 transition-opacity duration-500 invisible opacity-0 h-px peer-checked:visible peer-checked:opacity-100 peer-checked:h-auto peer-checked:min-h-screen peer-checked:p-2">
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
