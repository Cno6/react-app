import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import ThemeLightIcon from 'shared/assets/icons/ThemeLightIcon.svg';
import ThemeDarkIcon from 'shared/assets/icons/ThemeDarkIcon.svg';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      theme={ThemeAppButton.TEXT}
      type={'button'}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </AppButton>
  );
};
