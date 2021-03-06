var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css"></link>
                </head>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
});

module.exports = DefaultLayout;
