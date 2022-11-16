import React from 'react'
import m1 from "../../images/edu_banner.jpg";
import m2 from "../../images/line_icon1.png"
import m3 from "../../images/line_icon9.png"
import m4 from "../../images/line_icon12.png"
import m5 from "../../images/line_icon5.png"
import m6 from "../../images/institutes-logo3.png"
import m7 from "../../images/institutes-logo24.png"
import m8 from "../../images/institutes-logo21.png"
import m9 from "../../images/institutes-logo29.png"
import m10 from "../../images/mission-slide 2.png"
import m11 from "../../images/program_img7.png"
import m12 from "../../images/uni-certificate.png"
import m13 from "../../images/iaa-certificate.jpg"

export default function education() {
  const loop=[1,2,3,4,5,6]
  return (
    <div>
        <section className="education_banner clearfix">
    <div className="education_banner_img">
      <img src={m1} />
    </div>
  </section>
  <section className="education_tabs clearfix">
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">
            IAA Education Accreditation
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu1">
            Accreditation Application and Fees
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu2">
            Education Initiatives &amp; Learning Programs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu3">
            IAA Accredited Institutes
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="home" className="container tab-pane active">
          <br />
          <div className="container my-4">
            <div className="row">
              <div className="col-md-5 col-12 mb-4 ">
                <ul className="nav md-pills pills-secondary d-flex flex-column">
                  <li className="nav-item b-0">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel11"
                      role="tab"
                    >
                      <img src={m2}/>
                      Objective of IAA Education Accreditation -
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel12"
                      role="tab"
                    >
                      <img src={m3} />
                      Benefits of Accreditation for Institutes +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel13"
                      role="tab"
                    >
                      <img src={m4} />
                      Benefits of Accreditation for Students +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel14"
                      role="tab"
                    >
                      <img src={m5} />
                      Sample Certificates +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel15"
                      role="tab"
                    >
                      <img src={m2} />
                      Message from IAA +
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-12 mb-4">
                <div className="tab-content sandi_tab pt-0">
                  <div
                    className="tab-pane fade in show active"
                    id="panel11"
                    role="tabpanel"
                  >
                    <br />
                    <h5>Objective of IAA Accreditation</h5>
                    <p>
                      Aligned under our global compass vision, the strategic
                      goal of the (IAA) International Advertising Association’s
                      education pillar is to help prepare marketing
                      communications students for a future in the global
                      marketplace. With our academia focused content hub &amp;
                      regular events, we endeavor to help students and their
                      faculty navigate the transition from academia to a career
                      in marketing communications and advertising.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="panel12" role="tabpanel">
                    <br />
                    <h5>Benefits of Accreditation for Institutes</h5>
                    <ul>
                      <li>
                        <b>Become Part of Local and International Network</b>
                        <p>
                          Introduction to local and international network of IAA
                          members. Access to practicing industry professionals
                          via your local IAA Chapter, for networking,
                          best-practice sharing and guest lectures.
                        </p>
                      </li>
                      <li>
                        <b>
                          Global Content Hub, Database &amp; Industry Insights
                          Access
                        </b>
                        <p>
                          Five nominated faculty members related to Accredited
                          Program/Course will get premium access to IAA’s
                          thought leadership videos, blogs, audio podcasts,
                          presentations, well curated case studies, E-books,
                          members only newsletters, industry insights etc. and
                          database access to over 4000 individual members and
                          43+ IAA Accredited Institutes and their program
                          coordinators via the IAA website{" "}
                          <a href="#">
                            <span style={{ color: "red" }}>
                              (www.iaaglobal.org)
                            </span>
                          </a>
                        </p>
                      </li>
                      <li>
                        <b>Guest Lecturers</b>
                        <p>
                          Access to invite classroom speakers from the industry.
                          In countries where IAA chapters are located, members
                          of their executive committee or chapter members can be
                          approached to deliver guest lectures on agreed topics
                          of study.
                        </p>
                      </li>
                      <li>
                        <b>Review Curriculum</b>
                        <p>
                          IAA Education Council will review curriculum of the
                          course to be accredited and suggest changes if needed.
                        </p>
                      </li>
                      <li>
                        <b>Certificate of Recognition</b>
                        <p>
                          Provides an IAA Certificate that endorses the
                          accredited course/program so that the institution/
                          university could display at their premises or to use
                          it in marketing and promotional materials
                        </p>
                      </li>
                      <li>
                        <b>Global and Regional Events</b>
                        <p>
                          Special rates for IAA Accredited Course/Program
                          Institute faculty who wish to attend the IAA’s global
                          events. These events are another opportunity to
                          connect not only with other institutes but also to
                          learn and network with industry executives. Some
                          global IAA events include: Bi-annual IAA World
                          Congress, Bi-annual IAA Education Summit in
                          conjunction with the Congress, Global Apprentice
                          Conferences etc.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="panel13" role="tabpanel">
                    <br />
                    <h5>Benefits of Accreditation for Students.</h5>
                    <ul>
                      <li>
                        <b>
                          Free IAA Student Membership and Access to Global
                          Content Hub
                        </b>
                        <p>
                          Students enrolled in the Accredited Program will get
                          complimentary IAA Student Membership which includes
                          premium access to IAA’s thought leadership
                          videos,blogs, audio podcasts, presentations, well
                          curated case studies, E-books etc. via IAA website{" "}
                          <a href="#">
                            <span style={{ color: "red" }}>
                              (www.iaaglobal.org)
                            </span>
                          </a>
                          . This membership is renewable each year until
                          graduation via application on{" "}
                          <a href="#">
                            <span style={{ color: "red" }}>
                              https://www.iaaglobal.org/membership
                            </span>
                          </a>
                        </p>
                      </li>
                      <li>
                        <b>Personalized IAA Certificate</b>
                        <p>
                          Personalized IAA Certificate with unique Hologram ID
                          will be issued for each student upon completion of the
                          accredited program and graduation based on the list of
                          graduates provided by the university. (Subject to
                          request and payment by the university).
                        </p>
                      </li>
                      <li>
                        <b>
                          Student Competitions &amp; Apprenticeship Conferences
                        </b>
                        <p>
                          Opportunity for students to participate in a
                          real-world international case studies developed in
                          conjunction with a company-client who will provide
                          case materials for the student competition.This will
                          be reintroduced in 2021 with a tool kit with examples
                          for institutes to arrange with companies in their
                          region. Students will also get the opportunity to
                          attend apprenticeship conferences organized in their
                          region.
                        </p>
                      </li>
                      <li>
                        <b>Student Study/ Market Tours</b>
                        <p>
                          If your institute conducts market/study tours the IAA
                          can assist with introductions to agencies in cities/
                          countries where IAA has a chapter
                        </p>
                      </li>
                      <li>
                        <b>
                          Potential Joint Research or Student Group Project
                          Opportunities
                        </b>
                        <p>
                          Additional opportunities can be explored between
                          faculty and IAA and member companies for project ideas
                          and student research.
                        </p>
                      </li>
                      <li>
                        <b>Global and Regional Events</b>
                        <p>
                          Special rates for IAA Accredited Institute students to
                          attend the IAA’s global events. These events are
                          another opportunity to learn and connect not only with
                          other institutes but also with industry executives.
                          Some global IAA events include:Bi-annual IAA World
                          Congress, Bi-annual IAA Education Summit in
                          conjunction with the Congress, Global Apprentice
                          conferences etc.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="panel14" role="tabpanel">
                    <br />
                    <h5>Sample Certificates</h5>
                    <div className="sample-images">
                      <div className="certificates uni-certificate">
                        <h6>University Accreditation Certificate</h6>
                        <img src={m12} />
                      </div>
                      <div className="certificates iaa-certificate">
                        <h6>Student Certificate</h6>
                        <img src={m13} />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="panel15" role="tabpanel">
                    <br />
                    <h5>Message from IAA</h5>
                    <p>
                      Education is a foundational pillar of the IAA. Knowledge
                      and learning and creating lifelong learners in marketing
                      communications is at the core of our reason for being. We
                      provide current and relevant content and learnings from
                      across the world to our members, academicians and
                      students. Through the IAA program accreditation, student
                      memberships, content hub, apprentice conference,
                      competitions and global summits, we aim to prepare future
                      leaders in marketing communications across the world.{" "}
                    </p>
                    <h5>John D Chacko</h5>
                    <h5>IAA Global Vice President Education</h5>
                    <p>
                      For more information about IAA Accreditation, please
                      contact{" "}
                      <a href="#">
                        <span style={{ color: "red" }}>Jay Dhruv</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu1" className="container tab-pane fade">
          <br />
          <div className="container my-4">
            <div className="row">
              <div className="col-md-5 col-12 mb-4 ">
                <ul className="nav md-pills pills-secondary d-flex flex-column">
                  <li className="nav-item b-0">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel16"
                      role="tab"
                    >
                      <img src={m2} />
                      Course Accreditation Fees -
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel17"
                      role="tab"
                    >
                      <img src={m3} />
                      Annual Certificates Fee +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel18"
                      role="tab"
                    >
                      <img src={m4} />
                      IAA Course Accreditation &amp; Renewal Form +
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-12 mb-4">
                <div className="tab-content sandi_tab pt-0">
                  <div
                    className="tab-pane fade in show active"
                    id="panel16"
                    role="tabpanel"
                  >
                    <br />
                    <h5>Course Accreditation Fees</h5>
                    <ul>
                      <li>
                        <b>Program Accreditation for the 1st Course:</b>
                        <p>
                          Fees: <strong>US$ 3,000</strong>
                        </p>
                        <p>Tenure: 3 years</p>
                        <p>
                          Application Fee: <strong>US$ 300</strong> (deducted
                          from accreditation invoice)
                        </p>
                      </li>
                      <li>
                        <b>Renewal:</b>
                        <p>
                          Fees: <strong>US$ 2,500</strong>
                        </p>
                        <p>Tenure: 3 years</p>
                      </li>
                      <li>
                        <b>
                          Program Accreditation for additional (2 or more)
                          Courses:
                        </b>
                        <p>
                          Fees: <strong>US$ 1,500</strong> each course
                        </p>
                        <p>Tenure: 3 years</p>
                      </li>
                      <li>
                        <b>Renewal:</b>
                        <p>
                          Fees: <strong>US$ 1,000</strong> each course
                        </p>
                        <p>Tenure: 3 years</p>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="panel17" role="tabpanel">
                    <br />
                    <h5>Annual Certificates Fee:</h5>
                    <p>
                      Annual Fee for Certificates: <strong>US$ 1,500</strong>{" "}
                      (includes 25 personalized certificates and is mandatory
                      for all accredited institutes){" "}
                    </p>
                    <p>
                      For Incremental Certificates from 26 - 50:{" "}
                      <strong>US$ 30</strong> per certificate
                    </p>
                    <p>
                      For Incremental Certificates from 51 and above:{" "}
                      <strong>US$ 20</strong> per certificate
                    </p>
                  </div>
                  <div className="tab-pane fade" id="panel18" role="tabpanel">
                    <br />
                    <h5>IAA Course Accreditation &amp; Renewal Form</h5>
                    <p>
                      Please complete and submit an IAA Course Accreditation
                      &amp; Renewal Form for the course that your university
                      wants to accredit. A separate form must be completed for
                      each course.
                    </p>
                    <p>
                      <span className="download-pdf">
                        <a href="#">
                          Download IAA Course Accreditation &amp; Renewal Form
                        </a>
                      </span>
                    </p>
                    <p>
                      For more information about IAA Accreditation, please
                      contact{" "}
                      <a href="#">
                        <span style={{ color: "red" }}>Andrea Ugolini</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu2" className="container tab-pane fade">
          <br />
          <div className="container my-4">
            <div className="row">
              <div className="col-md-5 col-12 mb-4 ">
                <ul className="nav md-pills pills-secondary d-flex flex-column">
                  <li className="nav-item b-0">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel19"
                      role="tab"
                    >
                      <img src={m3} />
                      IAA Apprenticeship Future Leaders Program -
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel20"
                      role="tab"
                    >
                      <img src={m3} />
                      IAA Leardership Hub +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel21"
                      role="tab"
                    >
                      <img src={m2} />
                      IAA Big Idea (conducted presently by IAA Australia
                      Chapter) +
                    </a>
                  </li>
                  <li className="nav-item b-0">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel22"
                      role="tab"
                    >
                      <img src={m4} />
                      IAA Global Education Summit +
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-12 mb-4">
                <div className="tab-content sandi_tab pt-0">
                  <div
                    className="tab-pane fade in show active"
                    id="panel19"
                    role="tabpanel"
                  >
                    <br />
                    <h5>IAA Apprenticeship Future Leaders Program</h5>
                    <p>
                      IAA Apprenticeship Future Leaders Program is a global
                      MARCOM industry driven, high-quality career pathway to
                      help senior students and their faculty understand how to
                      navigate the transition from academia to a career in
                      marketing and advertising. A 2-day virtual conference with
                      5-6 hours per day which includes specifically tailored
                      keynote presentations, discussions &amp; workshops with
                      regional &amp; international industry practitioners,
                      recruiters &amp; clients where students have the chance to
                      listen, practice, network &amp; impress!
                    </p>
                    <p>
                      In the past, the IAA Apprenticeship Future Leaders Program
                      was organized through IAA Chapters including those in
                      Kuwait and the UAE. Students from various Middle East
                      accredited universities attended and networked in-person.
                      Last year, this entire program was shifted to an online
                      platform and included universities from both Middle East
                      and Africa regions. After the success of the 2020 edition,
                      including 1000+ participants from 20+ universities, the
                      IAA plans to organize annual apprenticeship programs
                      regionally for students and soon-to-be graduates
                      contemplating careers in advertising and marketing as well
                      as young professionals.
                    </p>
                    <p>
                      Here are some photos from previous Apprenticeship
                      Programs:
                    </p>
                    <div className="programm-image-box">
                      {loop.map((item,index) =>{
                        return(
                          <div className="programm-image-1">
                          <div className="image-box">
                            <a href="#">
                              <img src={m10} />
                            </a>
                          </div>
                          <div className="img-bottom-heading">
                            <h6>IAA Apprenticeship Conference 2015 in Dubai</h6>
                          </div>
                        </div>
                        )
                        }

                      )}
                     
                      {/* <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m10} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Apprenticeship Conference 2017 in Kuwait</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m10} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>
                            IAA Apprenticeship Future Leaders Program 2020:
                            Virtual Edition
                          </h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m10} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>Panel Discussion at 2020 Virtual Edition</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m10} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>Interactive QnA at 2020 Virtual Edition</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m10} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>Networking Tables at 2020 Virtual Edition</h6>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="panel20" role="tabpanel">
                    <br />
                    <h5>IAA Leadership Hub</h5>
                    <ul>
                      <li>
                        <p>
                          IAA introduces our state-of-the-art content streaming
                          platform- The IAA Leadership Hub. Through this
                          platform the IAA educates and inspires the Marketing
                          and Communications industry by providing access to
                          best-in-class knowledge, learning and thought
                          leadership.
                        </p>
                      </li>
                      <li>
                        <p>
                          The IAA Leadership Hub enables you to stream videos,
                          listen to podcasts, read through our blogs and E-Books
                          and stimulate thoughts with our whitepapers and
                          presentations.
                        </p>
                      </li>
                      <li>
                        <p>
                          Free access to the Leadership Hub is available to
                          students from IAA Accredited Institutes and you can
                          request access by{" "}
                          <a href="#">
                            <span style={{ color: "red" }}>clicking here</span>
                          </a>
                        </p>
                      </li>
                      <div className="lead-hub">
                        <a className="click-btn" href="#">
                          Explore IAA Leadership Hub
                        </a>
                      </div>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="panel21" role="tabpanel">
                    <br />
                    <h5>
                      IAA Big Idea (conducted presently by IAA Australia
                      Chapter)
                    </h5>
                    <ul>
                      <li>
                        <p>
                          IAA BIG IDEA was created in 2003 especially for
                          Australia’s marketing/advertising/
                          media/communications undergraduate students in
                          universities and tertiary institutions as a national
                          marketing communications competition. This challenge
                          offers hundreds of university students around
                          Australia the inspiring opportunity to follow their
                          stars into the marcoms industry by sharpening their
                          communication skills and talents in a real world,
                          hands-on learning experience that is essential career
                          training in the preparation of graduates for the
                          transition from university into professional practice.
                        </p>
                      </li>
                      <li>
                        <p>
                          IAA BIG IDEA aims to foster the professional
                          development of the upcoming generation of
                          communications practitioners, which is central to the
                          IAA's ongoing mission and commitment to education in
                          the industry.
                        </p>
                      </li>
                      <li>
                        <p>
                          “IAA BIG IDEA provides undergraduate students with
                          lots of scope for developing innovative ideas,
                          critical thinking and creative solutions. IAA BIG
                          IDEA, now in its eighteenth year, is recognized for
                          its contribution to the development of tomorrow's
                          generation of industry leaders and in helping
                          participants gain jobs and internships.” says Heather
                          Leembruggen, Chairman Emeritus, IAA Australia, who has
                          steered IAA BIG IDEA since its inception in 2003.
                        </p>
                      </li>
                    </ul>
                    <p>
                      "The IAA Big Idea competition provided a great experience
                      for our participating students with its hands-on, mini
                      agency experience. Stating they participated in the
                      competition enhanced their portfolios and has got noticed
                      for job opportunities in the industry……. We will continue
                      to encourage our students to participate in this
                      competition, so they can be job-ready with an
                      impactfulexperience as Advertising professionals."
                    </p>
                    <h4>
                      <b>
                        Shara Ranasinghe, Lecturer, Marketing Communication
                        &amp; Media - University of Canberrra, Australia
                      </b>
                    </h4>
                    <p>
                      "Thank you for the wonderful opportunity IAA Big Idea has
                      been. The chance to work with a real client to create this
                      campaign was a truly unforgettable experience and a
                      valuable and inspiring taste of the ad world. My teammates
                      and I are excited about what's to come, made all the more
                      real by the connections and experiences forged by IAA Big
                      Idea. I hope to remember IAA Big Idea as the launchpad to
                      an exciting and successful career in advertising".
                    </p>
                    <h4>
                      <b>
                        Jessica Nord, former student - University of Technology
                        Sydney, Australia
                      </b>
                    </h4>
                    <p>
                      Students are invited to devise a marketing solution for a
                      'real-life' client, working in agency-style teams to
                      develop a fully integrated communications solution to a
                      'real-world' business challenge. In response to the client
                      brief, the teams deliver an end-to-end plan from the
                      research stage to the creative concept, right through to
                      the final presentation of their ‘Big Idea’. The winning
                      ‘Big Idea’, as well as all the other 'big Ideas' submitted
                      by the students, are made available to the client with the
                      potential for market implementation.
                    </p>
                    <p>
                      IAA BIG IDEA real-life clients over the past four years
                      have been Adobe, Nestle, Coca Cola, and ANZ Banking Group
                      who have all acknowledged and praised the high quality of
                      workable ideas and marcoms solutions they have received
                      from the student teams from universities and tertiary
                      institutions Australia-wide.
                    </p>
                    <h4>
                      <b>IAA BIG IDEA is designed to challenge students to:</b>
                    </h4>
                    <ul>
                      <li>
                        <b>Work in agency-style teams</b>
                      </li>
                      <li>
                        <b>
                          Produce a marketing solution to a 'real-world'
                          business challenge for a 'real-life' client
                        </b>
                      </li>
                      <li>
                        <b>
                          Develop integrated concepts across all mediums, from
                          research and strategy development to creative
                          conceptualization and presentation standard
                        </b>
                      </li>
                      <li>
                        <b>
                          Be professionally evaluated by a judging panel of
                          respected industry professionals as well as
                          representatives of the client and the support partner
                          organizations.
                        </b>
                      </li>
                    </ul>
                    <p>
                      “The Big Idea competition has taught me the skills
                      necessary to launch my career in the industry and the
                      confidence to pursue it. The program required grit,
                      tenacity, blood, sweat and tears - but I would do it all
                      again! From project management, presenting, thinking on
                      the spot and leading a team through the gamete of emotions
                      and extreme pressure - I know I'm ready for what the
                      industry has to throw at me from the experience of
                      entering this competition.”
                    </p>
                    <h4>
                      <b>
                        Saskia-Jayne Handley, former student- Charles Sturt
                        University, Australia
                      </b>
                    </h4>
                    <p>
                      “This competition allows our students to apply everything
                      they have learnt over all the years of their degree. The
                      authentic experience our students gain from IAA ‘Big Idea’
                      certainly helps make them ready to hit the ground running
                      when they graduate at the end of their year. IAA ‘Big
                      Idea’ is a life changing experience and an amazing launch
                      for our graduates into the real world of advertising!”.
                    </p>
                    <h4>
                      <b>
                        Anne Llewellynn, Lecturer in Advertising - Charles Sturt
                        University, Australia
                      </b>
                    </h4>
                    <p>
                      <b>
                        Here are some memories from our past Big Idea
                        Challenges:
                      </b>
                    </p>
                    <div className="programm-image-box">
                      {loop.map((item,index) =>{
                        return(
<div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src={m11} />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Big Idea Winning Team 2018</h6>
                        </div>
                      </div>
                        )
                      }

                      )}
                      
                      {/* <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src="images/program_img8.png" />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Big Idea 2019</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src="images/program_img9.png" />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>Students presenting during Big Idea 2019</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src="images/program_img10.png" />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Big Idea 2019 Trophy and Certificates</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src="images/program_img11.png" />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Big Idea Winning Team 2019</h6>
                        </div>
                      </div>
                      <div className="programm-image-1">
                        <div className="image-box">
                          <a href="#">
                            <img src="images/program_img12.png" />
                          </a>
                        </div>
                        <div className="img-bottom-heading">
                          <h6>IAA Big Idea Winning Team 2020</h6>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="panel22" role="tabpanel">
                    <br />
                    <h5>IAA Global Education Summit</h5>
                    <p>
                      The International Advertising Association organizes an IAA
                      World Congress every 2-3 years. The next IAA World
                      Congress is scheduled to be held in Malaysia in 2022/23.
                      The IAA plans to dedicate the last day of the congress to
                      an Education Summit where academicians and students along
                      with global speakers and congress attendees can
                      participate in educational presentations and plenary
                      sessions on current topics in global marketing
                      communications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu3" className="container tab-pane fade">
          <br />
          <div
            id="iaa-accredited-institutes"
            className="TableBody"
            style={{ display: "block" }}
          >
            <div className="institutes-logo">
              <h3>IAA Accredited Institutes with their course name</h3>
              <div className="logo-description">
                <div className="ins-logo-img-middle">
                  <div className="title-logo">
                    <h4>Europe:</h4>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <ul>
                        <li>
                          " Bachelor of Business Administration "
                          <ul>
                            <li>
                              (Concentration in Marketing and Public Relations)
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <ul>
                        <li>Master in Digital Marketing &amp; Communication</li>
                        <li>Master in Luxury Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>
                        Bachelor ESP Chef de Projet en Communication et
                        Publicité
                      </p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>
                        Communication for Business, Media, and Complex
                        Organizations
                      </p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>State of the Art International Communication ICC</p>
                    </div>
                  </div>
                </div>
                <div className="ins-logo-img-middle">
                  <div className="title-logo">
                    <h4>ASIA PACIFIC:</h4>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <p>
                        Bachelor of Communication &amp; Media (Marketing
                        Communication)
                      </p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>Bachelor of Communication</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>Bachelor of Commerce (Advertising)</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>Bachelor of Media Communication</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8}/>
                    <div className="overlay-2">
                      <p>Bachelor of Communication (Advertising)</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>Bachelor in Advertising and Public Relations</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <ul>
                        <li>
                          Bachelor of Social Sciences (Honours) in Integrated
                          Communication Management
                        </li>
                        <li>
                          Bachelor of Public Relations &amp; Advertising Major
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <ul>
                        <li>Diploma in Graphic Design</li>
                        <li>Diploma in Marketing and Advertising</li>
                        <li>Diploma in Mass Communication</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>Kobaco Course</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>
                        Master of Arts in Integrated Marketing Communication
                      </p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>
                        Bachelor of Communication (Hons) Branding &amp; Digital
                        Marketing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ins-logo-img-middle">
                  <div className="title-logo">
                    <h4>MIDDLE EAST:</h4>
                  </div>
                  <div className="mid-logo">
                    <img src={m7}/>
                    <div className="overlay-2">
                      <p>Executive Master of Business Administration (EMBA)</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>Managing Marketing Agencies Program</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <ul>
                        <li>
                          {" "}
                          Bachelor of Business Administration
                          <ul>
                            <li>
                              (Major in Advertising and Integrated Marketing
                              Communications)
                            </li>
                          </ul>
                        </li>
                        <li>
                          Bachelor of Fine Arts in Visual Communication
                          <ul>
                            <li>(Major in Advertising)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>Bachelor of Public Relations and Advertising</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <ul>
                        <li>
                          Bachelor of Arts in Communication
                          <ul>
                            <li>(Major in Advertising)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <ul>
                        <li>Bachelor of Advertising Communication</li>
                        <li>Bachelor of Advertising Creative Design</li>
                        <li>Bachelor of Advertising Management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>BA (Hons) Advertising, PR and Branding</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>BA in Advertising &amp; Marketing</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <p>
                        Integrated Strategic Communications Concentration -
                        Undergraduate Level
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ins-logo-img-middle">
                  <div className="title-logo">
                    <h4>LATIN AMERICA:</h4>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>
                        Licenciatura En Comunicaciones Integradas De Marketing
                      </p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>Advertising Communication (Post Graduate Diploma)</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>BA in Advertising</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <ul>
                        <li>Audiovisual Communication and Multimedia</li>
                        <li>Digital and Visual Communication</li>
                        <li>Social Communication - Public Relations</li>
                        <li>Social Communication - Creative Writing</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m8} />
                    <div className="overlay-2">
                      <p>Comunicacion Y Publicidad</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m9} />
                    <div className="overlay-2">
                      <p>Advertising Program - Undergraduate Degree</p>
                    </div>
                  </div>
                  <div className="mid-logo">
                    <img src={m6} />
                    <div className="overlay-2">
                      <p>
                        Undergraduate Degree: Audiovisual and Advertising
                        Communication
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ins-logo-img-middle">
                  <div className="title-logo">
                    <h4>AFRICA:</h4>
                  </div>
                  <div className="mid-logo">
                    <img src={m7} />
                    <div className="overlay-2">
                      <ul>
                        <li>Bachelor of Arts in Marketing Communication</li>
                        <li>
                          Bachelor of Arts in Creative Brand Communication
                        </li>
                        <li>Diploma in Copywriting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
