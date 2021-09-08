import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes';
import Header from './components/Layouts/Header'

function App() {

  function RouteContainer(routes) {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
    return result
  }
  return (
    <Router>
      <Header />
      <Switch>
        {RouteContainer(routes)}
      </Switch>
      {/* <ScrollToTop /> */}

    </Router>
  );
}

export default App;
