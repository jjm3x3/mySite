var React = require('react');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DeaultLayout title= {this.props.title}>
                <div> Hello {this.props.title} </div>
            <DeaultLayout>
    }
});

module.exports = HelloMessage;
