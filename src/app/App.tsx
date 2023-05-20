import { Link } from "react-router-dom";

import { AppRouter } from "./providers/router";
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss'

import { classNames } from 'shared/lib/classNames';
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div>
        <button onClick={toggleTheme}>Поменять тему</button>
      </div>
      <AppRouter />
    </div>
  )
}

export default App;
