
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
function App() {

  const RouteContainer = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        let isHome = route.path === '/' ? true : false
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={() => {
              return (
                <>
                  {route.path !== '/login' &&
                    route.path !== '/register' &&
                    route.path !== '/Dashboard' &&
                    route.path !== '/Admin/Dashboard' &&
                    route.path !== ''
                    && <Header isHome={isHome} />}
                  <route.main />
                  {route.path !== '/login' &&
                    route.path !== '/register' &&
                    route.path !== '/Dashboard' &&
                    route.path !== '/Admin/Dashboard' &&
                    route.path !== ''
                    && <Footer />}
                </>
              )
            }}
          />
        )
      });
    }
    return result;
  }
  return (
    <Router>
      <Switch>
        {RouteContainer(routes)}
      </Switch>
    </Router>
  );
}

export default App;
