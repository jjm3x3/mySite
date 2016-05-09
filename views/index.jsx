var React = require('react');
var DefaltLayout = require('./layouts/default').default;

var HelloMessage = React.createClass({
    render: function() {
        var style = {
            backgroundColor: '#990000'
        }
        return (
            <body style={style}>
            <div>
                Hello {this.props.title},
                <br/>
                Welcome to the web site for Jacob J Meixner a Software engineer and computer enthusiast 


            </div>
            </body>
        )
    }
});

module.exports = HelloMessage;
