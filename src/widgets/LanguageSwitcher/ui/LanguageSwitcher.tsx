import { classNames } from "shared/lib/classNames"
import cls from "./LanguageSwitcher.module.scss"
import { useTranslation } from "react-i18next"

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button onClick={toggleLanguage} className={classNames(cls.LanguageSwitcher, {}, [className])}>
      {i18n.language === 'ru' ? 'Русский' : 'English'}
    </button>
  )
}
