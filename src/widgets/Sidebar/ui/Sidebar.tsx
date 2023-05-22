import { useState } from "react"

import cls from "./Sidebar.module.scss"

import { ThemeSwitcher } from "widgets/ThemeSwitcher"

import { classNames } from "shared/lib/classNames"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button
        onClick={() => setCollapsed(prev => !prev)}
        className={classNames(cls.toggle)}
      >
        {collapsed ? '>>' : '<<'}
      </button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
