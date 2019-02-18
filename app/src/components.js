var Nav = React.createClass({
    render:function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});
var Title = React.createClass({
    render: function(){
        return (
            <div className="row">
                <h1>{ this.props.title }</h1>
            </div>
        );
    }
});
var Button = React.createClass({

    getInitialState: function(){
        return {
            click: false
        };
    },

    toggleClick: function(){
        this.setState({
            click: !this.state.click
        });
    },

    render: function(){
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.title;
        return (
            <button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
        );
    }
});

var Form = React.createClass({
    handleNameChange: function(e){
        this.setState({name: e.target.value});
    },
    handleEmailChange: function(e){
        this.setState({email: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        if (!name || !email)
        {
            return;
        }
        this.props.onContactSubmit({name:name, email:email});
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={ this.handleNameChange } id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={ this.handleEmailChange } id="email" placeholder="Email"/>
                </div>
                <Button title="Enviar" textActive="Loading.." />
            </form>
        );
    }
});
