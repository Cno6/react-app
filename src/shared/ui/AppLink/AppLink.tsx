import cls from "./AppLink.module.scss"

import { FC } from "react"
import { Link, LinkProps } from "react-router-dom"

import { classNames } from "shared/lib/classNames"

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

// интерфейс унаследуем от LinkProps из react-router-dom для доступа к пропсам to и т.д.
interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
