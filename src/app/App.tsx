import './styles/index.scss'

import { AppRouter } from "./providers/router";
import { useTheme } from './providers/ThemeProvider';

import { Navbar } from "widgets/Navbar";

import { classNames } from 'shared/lib/classNames';

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App;
