'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/cv': {
    name: 'cv',
  },
  '/projects': {
    name: 'projects',
  },
  '/publications': {
    name: 'publications',
  },
  // '/blog': {
  //   name: 'blog',
  // },
}

export function Navbar() {
  const currentPath = usePathname()
  console.log('Current path:', currentPath)
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = currentPath === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all border border-transparent hover:border-neutral-800 hover:dark:border-neutral-200 rounded-lg flex align-middle relative py-1 px-2 m-1 ${isActive ? 'text-neutral-200 dark:text-neutral-800 bg-neutral-800 dark:bg-neutral-200 hover:text-neutral-200 hover:dark:text-neutral-800' : 'hover:text-neutral-800 hover:dark:text-neutral-200'}`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
