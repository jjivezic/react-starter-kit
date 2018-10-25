import React, { Component } from 'react'
import Loader from 'react-loader-spinner';
import './blogPost.css';
import sp from './sp.png';
//var apiUrl ='http://hyperether.com/';
var apiUrl ="http://localhost:3000/";
export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      date: "",
      isLoading: true
    }
  }

  componentWillMount() {
    fetch(`${apiUrl}api/blog/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(post => {
        this.setState({ post: post, date: post.createdAt, isLoading: false })
      })
  }
  render() {
    let date = this.state.date;
    return (

      <div className="main-section">
        {this.state.isLoading ?
          <div className="loader">
            <p>Loading, please wait ...</p>
            <Loader
              type="Oval"
              color="#6eb31e"
              height="60"
              width="60"
            />
          </div>
          :
          <div className="post-wrapper">
            <div className="blog-cover">
              {this.state.post && this.state.post.cover ?
                <img src={`data:image/png;base64, ${this.state.post.cover}`} />
                : <div className="overlay-cover"></div>}
              <h1>{this.state.post.title}</h1>
              <div className="overlay-cover"></div>
            </div>
            <div className="blog-post-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 post">
                    <div className="blog-post-header">
                      <div className="blog-post-author">
                        <div className="blog-post-author-box">
                          <img src={sp} className="avatar" />
                          <p>By <span>Slobodan Prijic, <small>CEO and software developer @ HyperEther</small> </span></p>
                        </div>
                      </div>
                      <div className="blog-post-date">
                        Date: <span> {date.substring(0, 10)}</span>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.post.imgUrl }} className="content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
