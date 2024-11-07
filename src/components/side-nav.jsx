'use client'

import { useState } from "react"
import NavItems from "@/config"

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navItems = NavItems() 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className={`${isSidebarOpen ? 'w-[200px]' : 'w-[68px]'} border-r transition-all duration-300 ease-in-out`}>side-nav</div>
  )
}

export default SideBar