var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');
var useRouterHistory = ReactRouter.useRouterHistory;
var IndexRoute = ReactRouter.IndexRoute;

var History = useRouterHistory(CreateHistory)({
  queryKey: false
});

var BasePage = require("./components/BasePage.jsx");
var HomePage = require("./components/HomePage.jsx");
var ProductPage = require("./components/ProductPage.jsx");

var Routes = (
  <Router history = {History}>
    <Route path = "/" component = {BasePage}>
      <IndexRoute component = {HomePage}></IndexRoute>
      <Route path = "/product/:productId" component = {ProductPage}>
      </Route>
    </Route>
  </Router>
);

module.exports = Routes;
