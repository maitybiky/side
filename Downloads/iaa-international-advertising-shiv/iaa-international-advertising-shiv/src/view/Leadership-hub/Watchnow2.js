import React from 'react'
import r9 from "../../images/top-img-watch now.jpg"
export default function Watchnow2() {
    const loop = [1, 2, 3]
    return (
        <div>
            <section className="introduction-academy-part clearfix">
                <div className="container">
                    <div className="introduction-academy-wrap d-flex justify-content-between">
                        <div className="introduction-academy-video-box">
                            <video
                                id="my-video"
                                className="video-js vjs-big-play-centered "
                                controls=""
                                controlslist="nodownload"
                                preload="auto"
                                height={500}
                                poster="https://www.iaaglobal.org/storage/cover_images/6033f0496e824.jpg"
                                data-setup='{"fluid": true}'
                            >
                                <source
                                    id="now_playing"
                                    src="https://www.iaaglobal.org/storage/subscriber_content_files/o_1ev5e5bed1ve5j7h107n1fi111818.mp4"
                                />
                                <p className="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading
                                    to a web browser that
                                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                                        supports HTML5 video
                                    </a>
                                </p>
                            </video>
                            <div className="introduction-academy-video-content">
                                <h2>Introduction to IAA Academy</h2>
                                <a href="https://www.iaaglobal.org/leadership-hub/video_series/marketing-aide">
                                    Category - Marketing Aide
                                </a>
                                <p>
                                    In this introductory episode, hear from the expert herself, Carol
                                    Schuster talk about the IAA Academy and what it has to offer to
                                    Marcom Professionals &amp; Aspiring Marcom Professionals alike.
                                </p>
                            </div>
                            <div className="introduction-academy-video-icon" id="st-1">
                                <div
                                    className="st-btn st-first"
                                    data-network="facebook"
                                    style={{ display: "inline-block" }}
                                >
                                    <img
                                        alt="facebook sharing button"
                                        src="https://platform-cdn.sharethis.com/img/facebook.svg"
                                    />
                                    <span className="st-label">Share</span>
                                </div>
                                <div
                                    className="st-btn st-second"
                                    data-network="twitter"
                                    style={{ display: "inline-block" }}
                                >
                                    <img
                                        alt="twitter sharing button"
                                        src="https://platform-cdn.sharethis.com/img/twitter.svg"
                                    />
                                    <span className="st-label">Tweet</span>
                                </div>
                                <div
                                    className="st-btn st-third"
                                    data-network="pinterest"
                                    style={{ display: "inline-block" }}
                                >
                                    <img
                                        alt="pinterest sharing button"
                                        src="https://platform-cdn.sharethis.com/img/pinterest.svg"
                                    />
                                    <span className="st-label">Pin</span>
                                </div>
                                <div
                                    className="st-btn st-fourth"
                                    data-network="email"
                                    style={{ display: "inline-block" }}
                                >
                                    <img
                                        alt="email sharing button"
                                        src="https://platform-cdn.sharethis.com/img/email.svg"
                                    />
                                    <span className="st-label">Email</span>
                                </div>
                                <div
                                    className="st-btn st-last"
                                    data-network="sharethis"
                                    style={{ display: "inline-block" }}
                                >
                                    <img
                                        alt="sharethis sharing button"
                                        src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                                    />
                                    <span className="st-label">Share</span>
                                </div>
                                <h3 className="block-title">
                                    <span className="introduction-academy-video-btn">
                                        MORE EPISODES
                                    </span>
                                </h3>
                            </div>
                            {loop.map((item, index) => {
                                return (
                                    <div className="introduction-academy-video-btm-mini-wrap d-flex justify-content-between">
                                        <div className="introduction-academy-video-mini-box">
                                            <img
                                                src={r9}
                                                width="250px"
                                            />
                                            <div className="introduction-academy-video-mini-content">
                                                <h3>Email Marketing in a Post Pandemic World</h3>
                                            </div>
                                        </div>
                                        <div className="introduction-academy-video-mini-box">
                                            <img
                                                src={r9}
                                                width="250px"
                                            />
                                            <div className="introduction-academy-video-mini-content">
                                                <h3>How to Manage a Marketing Budget During a Crisis</h3>
                                            </div>
                                        </div>
                                        <div className="introduction-academy-video-mini-box">
                                            <img
                                                src={r9}
                                                width="250px"
                                            />
                                            <div className="introduction-academy-video-mini-content">
                                                <h3>Building Brand Loyalty in a Digital World</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            )}
                            <div className="introduction-academy-video-btm-mini-wrap d-flex justify-content-flex-start">
                                <div className="introduction-academy-video-last-mini-box">
                                    <img src={r9} width="250px" />
                                    <div className="introduction-academy-video-mini-content">
                                        <h3>The SMB Guide to Activating on TikTok</h3>
                                    </div>
                                </div>
                                <div className="introduction-academy-video-last-mini-box">
                                    <img src={r9} width="250px" />
                                    <div className="introduction-academy-video-mini-content">
                                        <h3>Getting Started with TikTok Ads Manager</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="introduction-academy-form-box">
                            <form>
                                <h3>Expand your Global Horizon</h3>
                                <p>Become an IAA subscriber</p>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" />
                                    <div className="clear" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Sign Up" />
                                    <div className="clear" />
                                </div>
                                <span className="introduction-academy-form-disclamer">
                                    <a href="#" style={{ textDecoration: "none" }} target="_blank">
                                        Disclaimer
                                    </a>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
