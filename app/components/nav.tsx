'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  "/": {
    name: "home",
  },
  "/cv": {
    name: "cv",
  },
  "/projects": {
    name: "projects",
  },
  "/publications": {
    name: "publications",
  },
  // "/blog": {
  //   name: "blog",
  // },
}

// Temporary: hide these tabs without removing routes/content.
const hiddenNavRoutes = new Set(["/cv", "/projects", "/publications"])

export function Navbar() {
  const currentPath = usePathname()
  return (
    <aside className="-ml-[8px] mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link href="/">
              <Image
              src="/logo/logo-light.svg"
              alt="Logo"
              width={20}
              height={20}
              className="m-1 dark:hidden"
              />
              <Image
              src="/logo/logo-dark.svg"
              alt="Logo"
              width={20}
              height={20}
              className="m-1 hidden dark:block"
              />
            </Link>
            <div className="pr-2"></div>
            {Object.entries(navItems)
              .filter(([path]) => !hiddenNavRoutes.has(path))
              .map(([path, { name }]) => {
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
