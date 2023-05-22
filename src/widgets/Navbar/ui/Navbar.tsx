import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

import { classNames } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.Links, {}, [className])}>
        <AppLink to={'/'}>{t('header.links.main-page')}</AppLink>
        <AppLink to={'/about'}>{t('header.links.about-page')}</AppLink>
      </div>
    </div>
  )
}
