import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton';

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
      className={classNames('', {}, [className])}
    >
      {i18n.language === 'ru' ? 'Русский' : 'English'}
    </AppButton>
  );
};
