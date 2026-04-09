import {OptimisticSortOrder} from '@/components/OptimisticSortOrder'
import type {SettingsQueryResult} from '@/sanity.types'
import {studioUrl} from '@/sanity/lib/api'
import {resolveHref} from '@/sanity/lib/utils'
import {createDataAttribute, stegaClean} from 'next-sanity'
import Link from 'next/link'

interface NavbarProps {
  data: SettingsQueryResult
}
/*
export function Navbar(props: NavbarProps) {
  const {data} = props
  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null
  return (
    <header
      className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32"
      data-sanity={dataAttribute?.('menuItems')}
    >
      <OptimisticSortOrder id={data?._id} path="menuItems">
        {data?.menuItems?.map((menuItem) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={menuItem._key}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem?._type === 'home' ? 'font-extrabold text-black' : 'text-gray-600'
              }`}
              data-sanity={dataAttribute?.([
                'menuItems',
                {_key: menuItem._key as unknown as string},
              ])}
              href={href}
            >
              {stegaClean(menuItem.title)}
            </Link>
          )
        })}
      </OptimisticSortOrder>
    </header>
  )
}


import type {SettingsQueryResult} from '@/sanity.types'
import {resolveHref} from '@/sanity/lib/utils'
import Link from 'next/link'

interface NavbarProps {
  data: SettingsQueryResult
}
*/
export function Navbar({ data }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20"> 
          
          {/* 1. THE LOGO / TITLE */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            Fundación <span className="text-emerald-600">Cayena</span>
          </Link>

          {/* 2. THE NAVIGATION LINKS */}
          <nav className="hidden md:flex gap-x-8">
            {/* Look inside 'data' to find 'menuItems' */}
            {data?.menuItems?.map((menuItem, key) => {
              // Sanity's helper figures out if it's a page or project and makes the right URL
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              
              // If there's no URL, don't try to draw the link
              if (!href) return null

              return (
                <Link
                  key={key}
                  href={href}
                  className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {menuItem.title}
                </Link>
              )
            })}
          </nav>
          
          {/* Mobile Menu Button (we will make this functional later) */}
          <div className="md:hidden">
             <button className="p-2 text-gray-600">Menu</button>
          </div>

        </div>
      </div>
    </header>
  )
}
