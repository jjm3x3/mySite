var React = require('react');
var DefaultLayout = require('./layouts/default');

var DownloadsPage = React.createClass({
    render: function(){
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                   <h1>Downloads</h1>
                   <p>If you have come here to download the latest version of SimpleAccountant</p>
                   <p>A zip of everything your should need can be found right <a href="/files/SimpleAccountant.zip">here</a></p>
                </div>
            </DefaultLayout>
        )
    }
});

module.exports = DownloadsPage
