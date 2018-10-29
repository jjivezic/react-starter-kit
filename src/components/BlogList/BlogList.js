import React from 'react'
import Pagination from "react-js-pagination";
import axios from 'axios';
import Link from '../Link/Link';
var Loader = require('react-loader');
var apiUrl = "http://localhost:3000/";

function bufferToBase64(buf) {
  return buf;
}

class BlogList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: {},
      posts: [],
      activePage: 1,
      isLoading: true,
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

    this.renderPost = this.renderPost.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber }, () => {
      this.loadData(pageNumber);
    });
  }

  componentWillMount() {
    this.loadData();
  }

  loadData(page) {
    axios.get(`${apiUrl}api/blogs/${page}`)
      .then((response) => {
        this.setState({ page: response.data, isLoading: false });
      })
      .catch((error) => {
      });
  }

  renderPost(post) {
    const imgBase64 = bufferToBase64(post.cover);
    return (
      <div className="post pt-5 text-left" key={post.id}>
        <Link to={`/blog/${post.id}`} id={post.id}>
          {imgBase64 ? <img src={`data:image/png;base64, ${imgBase64}`} className="img-fluid" alt="blogpost" /> : null}

        </Link>
        <div className="title">
          <Link to={`/blog/${post.id}`} id={post.id}>{post.title}</Link>
        </div>
        <div className="author">
          {/* <img src={sp} className="avatar" alt="author" /> */}

          Slobodan Prijic, {post.createdAt.substring(0, 10)}
        </div>
        <Link to={`/blog/${post.id}`}>Continue reading this post</Link>
      </div>
    );
  }

  render() {
    const posts = this.state.page.content;
    return (
      <div className="main-section">
        {this.state.isLoading ?
          <div className="loader-box">
            <p>Loading, please wait ...</p>
            <Loader className="loader-icon" loaded={false} options={this.state.options} />
          </div>
          :
          <div className="blog-posts">
            <div className="container d-flex justify-content-center">
              <div className="posts-box">
                {posts && posts.length > 0 ? posts.map(post => {
                  return this.renderPost(post);
                }) : null}

                {posts && posts.length > 8 ?
                  <div className="pages">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.page.size}
                      totalItemsCount={this.state.page.totalElements}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                    />
                  </div> : null
                }
              </div>
            </div>
          </div>}
      </div>
    )
  }
}

export default BlogList;