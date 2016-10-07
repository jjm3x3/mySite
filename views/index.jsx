var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    <h1>Hello {this.props.title},</h1>
                    <br/>
                    <p>Welcome to the website for Jacob J Meixner, a Software engineer and computer enthusiast.</p>
                    <p>This page will soon likely serve multiple purposes</p>
                    <ul>
                        <li>A distribution page for some of my pet projects</li>
                        <li>A site for me to blog about some of my interests</li>
                    </ul>

                    <h2>Blog</h2>
		    {this.props.postList.map(function(post){
                         return (<div>{post.map(function(element){
                                 if (element.type == "code") {
                                     return <pre>{element.content}</pre>
                                 } else if (element.type == "textWithLinks") {
                                     var para = element.content;
                                     var linkIndicator = para.indexOf("](");
                                     var endOfLink = para.indexOf(")",linkIndicator + 1);
                                     var startOfLink = para.lastIndexOf("[", linkIndicator);
                                     var firstPart = para.substring(0, startOfLink);
                                     var lastPart = para.substring(endOfLink + 1);
                                     var linkedText = para.substring(startOfLink + 1, linkIndicator);
                                     var ref  = para.substring(linkIndicator + 2, endOfLink);

                                     return <p>
                                         {firstPart}
                                         <a href={ref}>{linkedText}</a>
                                         {lastPart}
                                     </p>
                                 }else if (element.type == "Picture") {
                                     return <image src={element.content}></image>
                                 } else {
                                     return <p>{element.content}</p>
                                 }
                             })}
                             <hr></hr>
                         </div>)
                     })}
                    

                    <p>For my recent work take a look at my <a href="https://github.com/jjm3x3/">GitHub</a></p>
                    <p>If you are here looking for the latest release of SimpleAccountant go  <a href={this.props.downloadUrl }>here</a></p>

                        <h2>Interested in hiring me?</h2>
                        <ul>
                            <li>View my <a href="https://www.linkedin.com/in/jacob-meixner-10359b82">LinkedIn</a></li>
                            <li>Download my latest <a href="/files/jacobjmeixner2016resume.doc">Resume</a></li>
                        </ul>
                        {/* </p> */}


                </div>
            </DefaultLayout >
        )
    }
});

module.exports = HelloMessage;
