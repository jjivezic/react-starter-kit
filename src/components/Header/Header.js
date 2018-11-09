/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import history from '../../history';
import Link from '../Link';
import logo from './logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass:
        'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (history.location.pathname === '/') {
      this.setState({
        navbarClass:
          'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other transparent',
      });
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  componentWillReceiveProps(props) {
    if (history.location.pathname === '/') {
      window.addEventListener('scroll', this.handleScroll);
      this.setState({
        navbarClass:
          'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other transparent',
      });
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      this.setState({
        navbarClass:
          'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other',
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY > 585) {
      this.setState({
        navbarClass:
          'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other',
      });
    } else {
      this.setState({
        navbarClass:
          'navbar navbar-dark navbar-expand-lg navbar-dark-custom-other transparent',
      });
    }
  }
  render() {
    return (
      <div className={this.state.navbarClass}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="mr-2 img-fluid" />
            Hyperether
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar-collapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav-link--rounded" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link--rounded" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link--rounded" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link--rounded" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link--rounded" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
