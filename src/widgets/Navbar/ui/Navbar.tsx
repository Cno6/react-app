import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/router';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.Links, {}, [className])}>
        <AppLink to={routePath.main}>{t('header.links.main-page')}</AppLink>
        <AppLink to={routePath.about}>{t('header.links.about-page')}</AppLink>
      </div>
    </div>
  );
};
