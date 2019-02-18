var React = require('react')
var ReactRouter = require('react-router')
var Main = require('./Main')

var Router = ReactRouter.Router
var Route = ReactRouter.Route

module.exports = (
    <Router history={ReactRouter.hashHistory}>
    
        <Route path="/" component={Main}/>
    </Router>
)