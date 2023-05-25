import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from 'shared/config/router';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';

const AppRouter = () => (
  <div className={'content'}>
    <Suspense fallback={<AppLoader />}>
      <Routes>
        {routeConfig.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
      </Routes>
    </Suspense>
  </div>
);

export default AppRouter;
