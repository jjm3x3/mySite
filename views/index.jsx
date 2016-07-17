var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    Hello {this.props.title},
                    <br/>
                    Welcome to the web site for Jacob J Meixner a Software engineer and computer enthusiast 


                </div>
            </DefaultLayout >
        )
    }
});

module.exports = HelloMessage;
