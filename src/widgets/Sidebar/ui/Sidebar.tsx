import { useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <AppButton
        data-testid="sidebar-toggle"
        type="button"
        theme={ThemeAppButton.OUTLINED}
        onClick={() => setCollapsed((prev) => !prev)}
        className={classNames(cls.toggle)}
      >
        {collapsed ? '>>' : '<<'}
      </AppButton>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
