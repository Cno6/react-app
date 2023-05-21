import './styles/index.scss'

import { AppRouter } from "./providers/router";
import { useTheme } from './providers/ThemeProvider';

import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames';

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App;
