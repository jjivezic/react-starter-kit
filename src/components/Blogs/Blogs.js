import React from 'react'
//import Pagination from "react-js-pagination";
//import Loader from 'react-loader-spinner';
import Link from '../Link';
var apiUrl ="http://localhost:3000/";

function bufferToBase64(buf) {
  return buf;
}

export default class Blogs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: {},
      posts: [],
      activePage: 1,
      isLoading: true
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
    fetch(`${apiUrl}api/blogs/${page}`)
      .then(response => response.json())
      .then(page => {
        this.setState({ page: page, isLoading: false });
      });
  }

  renderPost(post) {
    const imgBase64 = bufferToBase64(post.cover);
    return (
      <div className="post pt-5 text-left" key={post.id}>
        <Link to={`/blogPost/${post.id}`}>
          {imgBase64 ? <img src={`data:image/png;base64, ${imgBase64}`} className="img-fluid" alt="blogpost" /> : null}

        </Link>
        <div className="title">
          <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
        </div>
        <div className="author">
          {/* <img src={sp} className="avatar" alt="author" /> */}

          Slobodan Prijic, {post.createdAt.substring(0, 10)}
        </div>
        <Link to={`/blogPost/${post.id}`}>Continue reading this post</Link>
      </div>
    );
  }

  render() {
    const posts = this.state.page.content;
    return (
      <div className="main-section">
        {this.state.isLoading ?
          <div className="loader">
           <p>Loading, please wait ...</p>
            {/* <Loader
              type="Oval"
              color="#6eb31e"
              height="60"
              width="60"
            /> */}
          </div>
          :
          <div className="blog-posts">
            <div className="container d-flex justify-content-center">
              <div className="posts-box">
                {posts && posts.length > 0 ? posts.map(post => {
                  return this.renderPost(post);
                }) : null}

                {/* {posts && posts.length > 8 ?
                  <div className="pages">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.page.size}
                      totalItemsCount={this.state.page.totalElements}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                    />
                  </div> : null
                } */}
              </div>
            </div>
          </div>}
      </div>
    )
  }
}
