import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames"
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className="links">
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>
    </div>
  )
}
