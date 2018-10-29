import React, { Component } from 'react'
import axios from 'axios';
import sp from './sp.png';
import history from '../../history'
var Loader = require('react-loader');
//var apiUrl ='http://hyperether.com/';
var apiUrl = "http://localhost:3000/";


export default class BlogSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      date: "",
      isLoading: true,
      id: history.location.state.id,
      options: {
        lines: 13,
        length: 15,
        width: 2,
        radius: 10,
        scale: 1.00,
        color: '#96d05c',
        opacity: 0.35,
        rotate: 0,
        direction: 1,
        speed: 1,
        shadow: false,
        hwaccel: false,
      }
    }
  }

  componentWillMount() {

    console.log('History', history.location.state.id);

    axios.get(`${apiUrl}api/blog/${this.state.id}`)
      .then((response) => {
        this.setState({ post: response.data, date: response.data.createdAt, isLoading: false })
      })
      .catch((error) => {
      });
  }

  render() {
    let date = this.state.date;
    return (

      <div className="main-section">
        {this.state.isLoading ?
          <div className="loader-box">
            <p>Loading, please wait ...</p>
            <Loader className="loader-icon" loaded={false} options={this.state.options} />
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
