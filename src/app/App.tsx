import './styles/index.scss'

import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from './providers/ThemeProvider';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { classNames } from 'shared/lib/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <div>
        <button onClick={toggleTheme}>Поменять тему</button>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
