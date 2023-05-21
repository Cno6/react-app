import cls from './Navbar.module.scss'

import { classNames } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.Links, {}, [className])}>
        <AppLink to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}
