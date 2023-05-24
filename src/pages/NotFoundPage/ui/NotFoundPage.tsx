import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation('not-found-page');

  return (
    <div>{t('not-found-page')}</div>
  );
};

export default NotFoundPage;
