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
import $ from 'jquery';
import devices1 from './description.png';
import devices2 from './index-device.png';
import devices3 from './devices3.png';
import feature1 from './feature1.png';
import feature2 from './feature2.png';
import feature4 from './feature4.png';
import android1 from './techs/android1.png';
import ios1 from './techs/ios1.png';
import java1 from './techs/java1.png';
import node from './techs/node.png';
import angular1 from './techs/angular1.png';
import react1 from './techs/react.png';
import mongo2 from './techs/mongo2.png';
import sql1 from './techs/sql1.png';

class Lending extends React.Component {
  componentDidMount() {
    this.init();
  }

  init() {
    const $navDots = $('#slider nav a');
    const $next = $('.slide-nav.next');
    const $prev = $('.slide-nav.prev');
    const $slides = $('#slider .slides .slide');
    let actualIndex = 0;
    let swiping = false;
    let interval;

    $navDots.click(function(e) {
      e.preventDefault();
      if (swiping) {
        return;
      }
      swiping = true;

      actualIndex = $navDots.index(this);
      updateSlides(actualIndex);
    });

    $next.click(e => {
      e.preventDefault();
      if (swiping) {
        return;
      }
      swiping = true;

      clearInterval(interval);
      interval = null;

      actualIndex++;
      if (actualIndex >= $slides.length) {
        actualIndex = 0;
      }

      updateSlides(actualIndex);
    });

    $prev.click(e => {
      e.preventDefault();
      if (swiping) {
        return;
      }
      swiping = true;

      clearInterval(interval);
      interval = null;

      actualIndex--;
      if (actualIndex < 0) {
        actualIndex = $slides.length - 1;
      }

      updateSlides(actualIndex);
    });

    function updateSlides(index) {
      // update nav dots
      $navDots.removeClass('active');
      $navDots.eq(index).addClass('active');

      // update slides
      const $activeSlide = $('#slider .slide.active');
      const $nextSlide = $slides.eq(index);

      $activeSlide.fadeOut();
      $nextSlide.addClass('next').fadeIn();

      setTimeout(() => {
        $slides.removeClass('next').removeClass('active');
        $nextSlide.addClass('active');
        $activeSlide.removeAttr('style');
        swiping = false;
      }, 1000);
    }

    interval = setInterval(() => {
      if (swiping) {
        return;
      }
      swiping = true;

      actualIndex++;
      if (actualIndex >= $slides.length) {
        actualIndex = 0;
      }

      updateSlides(actualIndex);
    }, 5000);
  }

  render() {
    return (
      <div className="main-section">
        <div className="slider-hero" id="slider">
          <a className="slide-nav prev" href="#">
            Prev
          </a>
          <a className="slide-nav next" href="#">
            Next
          </a>
          <nav>
            <a className="active" href="#" />
            <a href="#" />
            <a href="#" />
          </nav>
          <div className="slides">
            <div className="slide first active">
              <div className="bg" />
              <div className="container customFadeInUp">
                <h1 className="hero-text">
                  Get your product idea tailored to your needs and brought to
                  life by us!!
                </h1>
                <p className="sub-text">
                  ART IS ALWAYS IN YOUR HANDS. BE CREATIVE!
                </p>
                <div className="video-wrapper">
                  <div className="video">
                    <img src={devices1} id="demo-player" alt="videoplayer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide second">
              <div className="bg" />
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 info">
                    <h1 className="hero-text">Mobile Development</h1>
                    <p className="sub-text">
                      We offer complete solutions for Mobile development, from
                      idea to launch.
                    </p>
                    <div className="cta">
                      <Link to="contact" className="button-outline">
                        CONTACT US
                        <i className="fa fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6 hidden-xs mobiles">
                    <img
                      src={devices3}
                      className="img-fluid customFadeInUp"
                      alt="devices"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="slide third">
              <div className="bg" />
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 hidden-xs mobiles">
                    <img
                      src={devices2}
                      className="img-fluid customFadeInDown"
                      alt="devices"
                    />
                  </div>
                  <div className="col-sm-6 info text-left">
                    <h1 className="hero-text">Web Development</h1>
                    <p>
                      We have a small but dedicated team of full stack web
                      developers, with special focus on JavaScript technologies.
                      Both back-end and front-end solutions are provided to our
                      clients, guaranteeing a high degree of professionalism and
                      commitment.
                    </p>
                    <div className="cta">
                      <Link to="contact" className="button-outline">
                        CONTACT US
                        <i className="fa fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="video-modal">
                        <div className="wrap">
                            <iframe src="https://player.vimeo.com/video/22439234" width="620" height="350" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div> */}
        </div>
        <div className="features-section">
          <div className="container">
            <div className="header text-center">
              <h2>You have an idea?</h2>
              <p className="mt-3">We will turn your idea into reality.</p>
            </div>
            <div className="feature">
              <div className="row">
                <div className="col-md-6">
                  <div className="info text-left">
                    <h4 className="mt-lg-5">
                      You’ve just come up with an original idea? With us, the
                      practical solution is right behind the corner.
                    </h4>
                    <p>
                      You can come to us with an idea and we will offer you some
                      solutions. With our help, you’ll pick the best one for
                      your needs.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src={feature4} className="img-fluid" alt="feature1" />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="feature">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="info text-left">
                    <h4 className="mt-lg-4">
                      Fully featured app solutions, from iOS and Android mobile
                      apps to complete server solutions.
                    </h4>
                    <p>Keep your app in sync with modern trends.</p>
                  </div>
                </div>
                <div className="col-md-6 order-md-1 text-center">
                  <img src={feature2} className="img-fluid" alt="feature2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clients-section">
          <div className="container">
            <h3>Technologies we are using:</h3>
            <p>
              Some of the technologies we are using in everyday app development.
            </p>
            <div className="logos">
              <img src={android1} alt="Android" />
              <img src={ios1} alt="Ios" />
              <img src={java1} alt="Java" />
              <img style={{ width: `${100}px` }} src={node} alt="Javascript" />
              <img src={angular1} alt="Angular" />
              <img style={{ width: `${68}px` }} src={react1} alt="React" />
              <img src={mongo2} alt="Mongo" />
              <img src={sql1} alt="Sql" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lending;
