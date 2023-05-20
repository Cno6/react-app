import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

enum routeName {
  MAIN = 'main',
  ABOUT = 'about'
}

const routePath: Record<routeName, string> = {
  [routeName.MAIN]: "/",
  [routeName.ABOUT]: "/about"
}

const routeConfig: RouteProps[] = [
  { path: routePath.main, element: <MainPage /> },
  { path: routePath.about, element: <AboutPage /> },
]

export {
  routeName,
  routePath,
  routeConfig
}
