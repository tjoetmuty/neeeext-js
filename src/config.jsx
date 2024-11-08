import { ChartSpline, Home, NotebookText, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname()
  const isItemActive = (pathname, navigation) => {
    return pathname.includes(navigation)
  }
  return (
    [
      {
        id: 1,
        name: 'Home',
        href: '/',
        icon: <Home size={20}/>,
        active: pathname === '/',
        position: 'top'
      },
      {
        id: 2,
        name: 'Practices',
        href: '/',
        icon: <NotebookText size={20}/>,
        active: pathname === '/practices',
        position: 'top'
      },
      {
        id: 3,
        name: 'Learning Progress',
        href: '/',
        icon: <ChartSpline size={20}/>,
        active: pathname === '/learning-progress',
        position: 'top'
      },
      {
        id: 4,
        name: 'Settings',
        href: '/',
        icon: <Settings size={20} />,
        active: pathname === '/settings',
        position: 'bottom'
      },
    ]
  )
}

export default NavItems