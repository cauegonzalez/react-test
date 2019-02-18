

var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <div className="container">
                    <div className="row">
                        <Form onContactSubumit={this.handleContactSubmit}/>
                    </div>

                </div>
            </myElement>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);
