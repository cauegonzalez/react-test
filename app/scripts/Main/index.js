var React = require('react')
var firebase = require('firebase')
var ReactFireMixin = require('reactfire')

var Main = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function(){
        return {
            leads: []
        }
    },
    componentDidMount: function(){
        var fireRef = firebase.database().ref('leads')
        this.bindAsArray(fireRef, 'leads')
    },
    render: function() {
        console.log(this.state)
        return(<div>Hello</div>)
    }
})

module.exports = Main