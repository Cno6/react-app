import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('error')}
      <AppButton type={'button'} onClick={reloadPage}>{t('Обновить страницу')}</AppButton>
    </div>
  );
};
