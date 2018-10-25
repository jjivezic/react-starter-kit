/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Slider from "react-slick";
import ji from './teamImg/ji.jpg';
import sp from './teamImg/sp.jpg';
import lh from './teamImg/lh.jpg';
import ph from './teamImg/ph.jpg';
import bs from './teamImg/bs.jpg';
import ic from './teamImg/ic.jpg';
import dbk from './teamImg/dbk.jpg';
import mbk from './teamImg/mbk.jpg';
import ibk from './teamImg/ibk.jpg';
import nn from './teamImg/nn.jpg';
import mk from './teamImg/mk.jpg';
import pb from './teamImg/pb.jpg';
import nb from './teamImg/nb.jpg';
import vk from './teamImg/vk.jpg';
import ls from './teamImg/ls.jpg';
import nh from './teamImg/nh.jpg';
import office1 from './teamImg/office1.png';
import office2 from './teamImg/office2.png';

class Team extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        };
        return (
            <div className="main-section">
                <div className="about-us-slider">
                    <div className="container">
                        <div className="header">
                            <h3>Hyperether team</h3>
                            <p>
                                Talent wins games, but teamwork and intelligence win championships.
                         </p>
                        </div>
                        <Slider {...settings}>
                            <div>
                                <img src={office2} alt="office" />
                            </div>
                            <div>
                                <img src={office1} alt="office" />
                            </div>
                            <div>
                                <img src={office1} alt="office" />
                            </div>

                        </Slider>
                    </div>
                </div>

                <div className="about-us-team">
                    <div className="container text-left">
                        <h1 className="header">We care about our work</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    You always have your smartphone with you.
                                    It follows your steps, thoughts and plans.
                                    It keeps you company when you’re talking,
                                    running, driving your car, having lunch
                                    (eating?), taking photos, listening to music,
                                    traveling and even sleeping.
                                    It keeps you safe and sound in everyday
                                    situations. It makes you more efficient in
                                    business. It boosts your creativity in your
                                    leisure time.
                            </p>
                                <p>
                                    We are dedicated to creating mobile applications that become part of your everyday life.
                            </p>
                                <p>
                                    Our apps are designed for all current versions
                                    of mobile operating systems. From building
                                    simpler apps to developing more complex
                                    ones, to creating apps that contain
                                    confidential information, HyperEther always
                                    applies advanced programming concepts and
                                    work organization. When your app becomes
                                    popular on Google Play, you’ll see the quality
                                    of our work.
                         </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    We have a small but dedicated team of full
                                    stack web developers, with special focus on
                                    JavaScript technologies. Both back-end and
                                    front-end solutions are provided to our clients,
                                    guaranteeing a high degree of
                                    professionalism and commitment.
                           </p>
                                <a href="/#/contact" className="btn-shadow btn-shadow-info mt-3">Join our team</a>
                            </div>
                        </div>
                        <div className="row stats">
                            <div className="col-sm-3">
                                <strong>16</strong>
                                employees
                        </div>
                            <div className="col-sm-3">
                                <strong>1k</strong>
                                customers
                        </div>
                            <div className="col-sm-3">
                                <strong>7</strong>
                                Web site applications
                        </div>
                            <div className="col-sm-3">
                                <strong>10</strong>
                                Mobile applications
                        </div>
                        </div>
                        <div className="team">

                            <div className="team-row d-flex  flex-wrap">
                                <div className="img-frame">
                                    <img src={sp} className="img-fluid" data-toggle="tooltip" title="Slobodan Prijić - CEO, Senior Mobile Software Developer" alt="Slobodan Prijić &#013;CEO, Senior Mobile Software Developer" />
                                    <h4>Slobodan Prijić</h4>
                                    <p>CEO, Senior Mobile Software Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={lh} className="img-fluid" data-toggle="tooltip" title="Laslo Horvat - CA, Senior Full Stack Software Developer" alt="testimonial" />
                                    <h4>Laslo Horvat</h4>
                                    <p>CA, Senior Full Stack Software Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={dbk} className="img-fluid" data-toggle="tooltip" title="Dragan Brčić Kostić - COO, Senior Mobile Software Developer" alt="testimonial" />
                                    <h4>Dragan Brčić Kostić</h4>
                                    <p>COO, Senior Mobile Software Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={nb} className="img-fluid" data-toggle="tooltip" title="Nebojša Branković - CTO, Senior Mobile Software Developer" alt="testimonial" />
                                    <h4>Nebojša Branković</h4>
                                    <p>Senior Mobile Software Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={mbk} className="img-fluid" data-toggle="tooltip" title="Marija Brčić-Kostić - CFO" alt="testimonial" />
                                    <h4>Marija Brčić-Kostić</h4>
                                    <p>CFO</p>
                                </div>

                                <div className="img-frame">
                                    <img src={ph} className="img-fluid" data-toggle="tooltip" title="Paulina Horvat - HR manager" alt="testimonial" />
                                    <h4>Paulina Horvat</h4>
                                    <p>HR manager</p>
                                </div>
                                <div className="img-frame">
                                    <img src={vk} className="img-fluid" data-toggle="tooltip" title="Vladimir Kukuć - Full Stack Web Developer / Architect" alt="testimonial" />
                                    <h4>Vladimir Kukuć</h4>
                                    <p>Full Stack Web Developer / Architect</p>
                                </div>
                                <div className="img-frame">
                                    <img src={bs} className="img-fluid" data-toggle="tooltip" title="Borislav Stamenić - JavaScript full stack developer" alt="testimonial" />
                                    <h4>Borislav Stamenić</h4>
                                    <p>JavaScript full stack developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={mk} className="img-fluid" data-toggle="tooltip" title="Marko Katić - Android application Developer" alt="testimonial" />
                                    <h4>Marko Katić</h4>
                                    <p>Android application Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={nn} className="img-fluid" data-toggle="tooltip" title="Nikola Nikolić - Mobile application Developer" alt="testimonial" />
                                    <h4>Nikola Nikolić</h4>
                                    <p>Mobile application Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={pb} className="img-fluid" data-toggle="tooltip" title="Petar Bajić - Full Stack Web Developer" alt="testimonial" />
                                    <h4>Petar Bajić</h4>
                                    <p>Full Stack Web Developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={ic} className="img-fluid" data-toggle="tooltip" title="Ivan Crnogorac - Web developer" alt="testimonial" />
                                    <h4>Ivan Crnogorac</h4>
                                    <p> Web developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={ji} className="img-fluid" data-toggle="tooltip" title="Jelena Ivezić - Web developer" alt="testimonial" />
                                    <h4>Jelena Ivezić</h4>
                                    <p> Web developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={ibk} className="img-fluid" data-toggle="tooltip" title="Ivan Brčić-Kostić - QA, Software Tester" alt="testimonial" />
                                    <h4>Ivan Brčić-Kostić</h4>
                                    <p> QA, Software Tester</p>
                                </div>
                                <div className="img-frame">
                                    <img src={ls} className="img-fluid" data-toggle="tooltip" title="Lazar Stijaković ,  Web developer" alt="testimonial" />
                                    <h4>Lazar Stijaković</h4>
                                    <p> Web developer</p>
                                </div>
                                <div className="img-frame">
                                    <img src={nh} className="img-fluid" data-toggle="tooltip" title="Ivan Brčić-Kostić - QA, Software Tester" alt="testimonial" />
                                    <h4>Nikola Hadzić</h4>
                                    <p>Android application Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;