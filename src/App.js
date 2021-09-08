import { Suspense } from "react";
import Fallback from "./components/Fallback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
function App() {
  function RouteContainer(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Suspense key={index} fallback={<Fallback />}>
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          </Suspense>
        );
      });
    }
    return result;
  }
  return (
    <Router>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Switch>{RouteContainer(routes)}</Switch>
      {/* <ScrollToTop /> */}
    </Router>
  );
}

export default App;
