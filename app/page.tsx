import Link from 'next/link'

export default function Home() {
  return (
    <Link
      className="fixed bottom-0 md:top-0 right-0 px-3 py-2 z-10 uppercase tracking-tighter font-medium cursor-pointer text-black hover:opacity-50"
      href="/about"
      title="ABOUT"
    >
      ABOUT
    </Link>
  )
}
