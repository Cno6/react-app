import './styles/index.scss'

import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';



const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
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
