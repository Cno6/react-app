import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      theme={ThemeAppButton.TEXT}
      onClick={toggleLanguage}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
    >
      {i18n.language === 'ru' ? 'Русский' : 'English'}
    </AppButton>
  );
};
