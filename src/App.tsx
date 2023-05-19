import './styles/index.scss'

import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

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
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
