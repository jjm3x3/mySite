var React = require('react');
var DefaltLayout = require('./layouts/default').default;

var HelloMessage = React.createClass({
    render: function() {
        return (
            <html>
                <div> Hello {this.props.title} </div>
            </html>
        )
    }
});

module.exports = HelloMessage;
