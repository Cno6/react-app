import { Link } from "react-router-dom";

import { AppRouter } from "./providers/router";
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss'

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
      <AppRouter />
    </div>
  )
}

export default App;
