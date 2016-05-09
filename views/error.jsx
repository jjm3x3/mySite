var React = require('react')
var DefaultLayout = require('./layouts/default').default;

var ErrorPage = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <h1> There has been a terrible failure</h1>
                    <h1>{this.props.message}</h1>
                    <h2>{this.props.error.status}</h2>
                    {this.props.error.stack}
                <div>
                </div>
                </body>
            </html>
        )
    }
});

module.exports = ErrorPage;
