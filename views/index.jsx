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
		    <p>This first post is really just an introduction to me. I am a programmer by trade and the main purpose of this website is to give myself an online presence. As a young professional in the technology industry, it seems that the best way to make a name for yourself outside of doing good work and contributing to open source is to host a personal website. Another reason I am writing this website is because I hope to improve my skills on the web platform. This is a goal of mine because there seems to be quite a move to make everything from your thermostat to your car available over the web, making it a hugely relevant platform for programmers like myself.</p>
		    <p>This page is written in express and served using Nginx. Using express was to satisfy a curiosity I have about writing websites in JavaScript. I have written a number of REST APIs in Ruby on Rails so I am quite familiar with how these web frameworks work at a high level. However, I have always been kind of interested in writing more JavaScript because as much as I can appreciate ruby and its flexibility, I am still somewhat partial to the java-like syntax that JavaScript brings to the table.</p>
<p>Another new-ish technology that I am writing this site with is React. I understand that most people just go with the MEAN stack for things like this but I am not a very big fan of angular and I have only minimally used react. So, I wanted to take this opportunity to improve those skills and improve my knowledge of the framework.</p>
<p>I will try to make a post to this blog at least once per week just to share some cool things I am looking at and getting into but I am going to sign off for right now. As stated above, I hope to make this site multifaceted but some of theses features will come in due time. That's all for now. Thanks for reading and stay tuned.</p>

                    <p> Jacob Meixner 09-03-2016</p>
                    

                    <p>For my recent work take a look at my <a href="https://github.com/jjm3x3/">GitHub</a></p>
                    <p>If you are here looking for the latest release of SimpleAccountant go  <a href={this.props.downloadUrl }>here</a>

                        <p>
                            <h2>Interested in hiring me?</h2>
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
