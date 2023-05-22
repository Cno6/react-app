import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
