var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    <h1>Hello {this.props.title},</h1>
                    <br/>
                    <p>Welcome to the web site for Jacob J Meixner, a Software engineer and computer enthusiast.</p>

                    <p>For my recent work take a loog at my <a href="https://github.com/jjm3x3/">GitHub</a>
                        <p>
                            <h2>Intereted in hiring me?</h2>
                                <ul>
                                    <li>View my <a href="https://www.linkedin.com/in/jacob-meixner-10359b82">LinkedIn</a></li>
                                    <li>Download my latest <a href="/files/jacobjmeixner2016resume.doc">Resume</a></li>
                                </ul>
                        </p>
                    </p>


                </div>
            </DefaultLayout >
        )
    }
});

module.exports = HelloMessage;
