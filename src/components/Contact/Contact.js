/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import axios from 'axios';
import Link from '../Link';
//import Loader from 'react-loader-spinner';
import GoogleApiWrapper from './mapContainer';
var Loader = require('react-loader');

var apiBaseUrl = 'http://localhost:3000/';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            submitted: false,
            errorMsg: true,
            isLoading: false,
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange = event => {
        this.setState({ submitted: false });
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        const email = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        };
        this.setState({ isLoading: true });
        axios.post(apiBaseUrl + 'email', email)
            .then((response) => {
                this.setState({ isLoading: false });
                this.resetForm();
            })
            .catch((error) => {
            });
    }
    resetForm() {
        this.setState({ submitted: true });
        this.setState({ name: '', email: '', phone: '', message: '' });
    };
    validateForm() {
        return this.state.name.length > 3 && this.state.phone.length > 3 && this.state.email.length > 3 && this.state.message.length > 3;
    }

    render() {
        var requredStyle = {
            position: 'relative',
            top: '-15px',
            color: '#bbbaba',
        }
        return (
            <div className="main-section">
                <div className="contact-us-info">
                    <div className="contact-us-map">
                        <div className="container">
                            <div className="location d-none d-md-block">
                                <h5>Hyperether Headquarters</h5>
                                <p>Bulevar oslobođenja 3, Novi Sad, Serbia.</p>
                            </div>
                        </div>
                        <div id="map"><GoogleApiWrapper /></div>
                    </div>
                    <div className="container text-left">

                        <div className="row">
                            <div className="col-lg-8 message">
                                <h3>Send us a message</h3>
                                <p>
                                    You can contact us regarding anything related to product development.
                            </p>
                                <form role="form" id="contact-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" className="form-control" id="phone" value={this.state.phone} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your message</label>
                                        <textarea name="message" className="form-control" id="message" rows="6" value={this.state.message} onChange={this.handleChange}></textarea>
                                    </div>
                                    <small style={requredStyle}>*All fields are required!</small>
                                    <div className="submit">
                                        <button type="submit" className="btn-shadow btn-shadow-info mt-3" disabled={!this.validateForm()}> Email us</button>
                                    </div>
                                </form>
                                {this.state.isLoading ?
                                    <div className="loader-mini">
                                        <p>Sending ...</p>
                                        {/* <Loader
                                            type="Oval"
                                            color="#6eb31e"
                                            height="50"
                                            width="50"
                                        /> */}
                                        <Loader className="loader" loaded={false} options={this.state.options} />
                                    </div> : null}

                                {this.state.submitted === true ?
                                    <div className="">
                                        <br />
                                        <div className="alert alert-primary">
                                            Your message has been successfully sent.
                                       </div>
                                    </div> : null}
                            </div>

                            {/* {this.state.errorMsg == true ?
                                <div className="col-lg-8">
                                    <br />
                                    <div className="alert alert-danger">
                                        All field must be filled.
                            </div>
                                </div> : null} */}
                            <div className="col-lg-4 contact">
                                <div className="address">
                                    <h3>Our Address</h3>
                                    <p>
                                        Bulevar oslobođenja 3, <br />
                                        21000 Novi Sad, <br />
                                        Serbia
                                </p>
                                </div>
                                <div className="phone">
                                    <h3>By Phone</h3>
                                    <p>
                                        +381 21 3012452
                                </p>
                                </div>
                                <div className="phone">
                                    <h3>By Email</h3>
                                    <p>
                                        office@hyperether.com
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
