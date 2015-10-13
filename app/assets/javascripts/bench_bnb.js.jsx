var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function(){

    return(
      <div>
        <h1>BenchBnB</h1>
        {this.props.children}
      </div>
    );
  }
});

$(document).ready(function(){
  React.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="new" component={BenchForm}/>
      <Route path="benches/:id" component={BenchShow}>
        <Route path="review/new" component={ReviewForm}/>
      </Route>
    </Route>
  </Router>
  , document.getElementById("content"));
});
