var firebase = require('firebase')
var React = require('react')
var ReactDOM = require('react-dom')
var Routes = require('./routes')

var config = {
    apiKey: "AIzaSyDT1hah6d1EIF2D4YKCZajVbdmxAWoBcNQ",
    authDomain: "cliave-seta.firebaseapp.com",
    databaseURL: "https://cliave-seta.firebaseio.com"
}

firebase.initializeApp(config)

var mountNode = document.getElementById('app');

ReactDOM.render(Routes, mountNode)