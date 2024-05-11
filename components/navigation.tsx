'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Link
      className="fixed bottom-0 md:top-0 right-0 px-3 py-2 z-10 uppercase tracking-tighter font-medium"
      href={pathname === '/' ? '/about' : '/'}
      prefetch={false}
    >
      {pathname === '/' ? 'ABOUT' : 'HOME'}
    </Link>
  )
}
