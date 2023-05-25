import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
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
      <button type={'button'} onClick={reloadPage}>{t('Обновить страницу')}</button>
    </div>
  );
};
