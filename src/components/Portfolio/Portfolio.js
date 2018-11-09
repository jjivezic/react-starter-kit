/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pipitit from './products/Pipitit.png';
import osc from './products/osc.png';
import ordero from './products/Ordero.png';
import gg from './products/GG.png';
import cc from './products/cityCam.png';
import ti from './products/tradeit.png';
import 'react-tabs/style/react-tabs.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main-section">
        <div className="gallery-hero">
          <section className="container">
            <h1>Showcase of our latest projects </h1>
            <p>
              We believe in simple and efficient ways to grow a business by
              being smart.
            </p>
          </section>
        </div>
        <div className="gallery-portfolio">
          <div className="container no-override">
            <Tabs>
              <TabList>
                <Tab>Proprietary Software</Tab>
                <Tab>Open Source</Tab>
              </TabList>

              <TabPanel>
                <div className="row no-gutters">
                  <div className="col-md-6 col-lg-4">
                    <a
                      href="http://tradeit.hyperether.com"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3 className="">TradeIt</h3>
                          <p>
                            TradeIt makes it easy to find the local pros
                            proficient in the type of work you need to get done.
                          </p>
                        </span>
                        <span className="btn-see-project"> See project</span>
                      </span>
                      <img className="logo-tradit" src={ti} alt="" />
                      <h6 className="tradit-title">TradeIt</h6>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a
                      href="http://ordero.hyperether.com"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3>Ordero</h3>
                          <p>
                            Discover restaurants, order food, book a table, and
                            manage reservations - anytime, anywhere. For free!
                          </p>
                        </span>
                        <span className="btn-see-project">See project</span>
                      </span>
                      <img className="logo-ordero" src={ordero} alt="" />
                      <h6 className="title-ordero">Ordero</h6>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a
                      href="https://www.osc01.com/"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3>OSC</h3>
                          <p>
                            The ultimate office communication solution in a
                            single smartphone. OneSmartConnect™. These services
                            are now available for both iPhones and Android
                            phones.
                          </p>
                        </span>
                        <span className="btn-see-project">See project</span>
                      </span>
                      <img className="logo-pipitit" src={osc} alt="" />
                      <h6 className="title-pipitit">OSC</h6>
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row no-gutters">
                  <div className="col-md-6 col-lg-4">
                    <a
                      href="https://www.pipitit.com"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3>Pipitit</h3>
                          <p>
                            Pipitit allows you to send Push, SMS, Email and
                            WebSocket notifications to your customers.
                          </p>
                        </span>
                        <span className="btn-see-project">See project</span>
                      </span>
                      <img className="logo-pipitit" src={pipitit} alt="" />
                      <h6 className="title-pipitit">Pipitit</h6>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a
                      href="http://mycitycamera.com/"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3>City Camera</h3>
                          <p>Snap the Life of Your City</p>
                        </span>
                        <span className="btn-see-project">See project</span>
                      </span>
                      <img className="logo-cam" src={cc} alt="" />
                      <h6 className="title-cam">CityCamera</h6>
                    </a>
                  </div>

                  <div className="col-md-6 col-lg-4 ">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hyperether.getgoing"
                      className="project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">
                        <span className="info">
                          <h3>Get Going</h3>
                          <p>
                            This top-notch tracking application for walking,
                            running, and cycling will help you control your
                            workout on the go.
                          </p>
                        </span>
                        <span className="btn-see-project"> See project</span>
                      </span>
                      <img className="logo-getGoing" src={gg} alt="" />
                      <h6>Get Going</h6>
                    </a>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="gallery-cta">
          <div className="container">
            <h3>Want to work with us? </h3>
            <p>
              Have an idea for an awesome project? We'd love to help make it
              real.
              <br /> <Link to="contact">Get in touch</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
