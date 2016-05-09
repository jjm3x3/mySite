var React = require('react')
var DefaultLayout = require('./layouts/default').default;

var ErrorPage = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                <div>
                    <h1> There has been a terrible failure</h1>
                </div>
                </body>
            </html>
        )
    }
});

module.exports = ErrorPage;
