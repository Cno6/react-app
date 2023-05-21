import cls from './Navbar.module.scss'

import { classNames } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.Links, {}, [className])}>
        <AppLink to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}
