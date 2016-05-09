var React = require('react');

var DefaltLayou = React.createClass({
    render: function() {
        return (
            <html>
            <head> <title>{this.props.title}</title></head>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
});

module.exports = DefaltLayou
