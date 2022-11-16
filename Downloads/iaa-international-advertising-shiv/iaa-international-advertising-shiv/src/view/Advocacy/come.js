import React from 'react'
import n2 from "../../images/banner-dei-old.jpg";
import n3 from "../../images/andres-head.jpg";
import n4 from "../../images/carol-schuster.jpg";
import n5 from "../../images/in-img.png";

export default function come() {
    const loop= [1,2,3,4,5,6,7,8,9,10,11,12,13];
  return (
    <div>
        <section className="dei_banner clearfix">
    <div className="dei_banner_img">
      <img src={n2} />
    </div>
  </section>
  <section className="dei-dt clearfix">
    <div className="container">
      <div className="dei-main-content">
        <div className="dei-cnt">
          <p>
            Diversity, equity, and inclusion matter. Excuses for ignoring
            diversity, equity, and inclusion in advertising are ringing hollow
            as consumers are crying out for brands and organizations to do
            better.
          </p>
        </div>
        <div className="dt-box">
          <p>
            It is said that ‘Diversity is being invited to the party; inclusion
            is being asked to dance’. No one wants to be invited to a party as a
            spectator. Such a ‘guest’ would rather stay at home. So, I just want
            to encourage everyone – brands, marketers, politicians – not to make
            half-hearted attempts at diversity. Let’s go the whole hog and push
            for proper inclusion. That’s when we can truly harness all the
            benefits.
          </p>
          <h4>Joel Edmund Nettey,</h4>
          <p>
            President and World Chairman of International Advertising
            Association (IAA)
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="dei_tabs clearfix">
    <div className="container">
      <ul className="nav nav-tabs ghaslet">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">
            Vision &amp; Objectives
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu1">
            Campaign
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu2">
            Resources &amp; Best Practice
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu3">
            DE&amp;I Council Members
          </a>
        </li>
      </ul>
      <div className="tab-content shafari">
        <div id="home" className="container tab-pane active">
          <br />
          <p>
            The International Advertising Association Global Diversity &amp;
            Inclusion Council (DE&amp;I) aims to help brands and individuals
            make positive change in the diversity, equity, and inclusivity
            space. Our mission is twofold:
          </p>
          <ul>
            <li>
              1) To become the most diverse, equitable, and inclusive
              association in the MARCOM industry; and
            </li>
            <li>
              2) To serve as inspiration in diversity, equity, and inclusion for
              our members and partners.
            </li>
          </ul>
          <p>
            This includes diversity, equity, and inclusion in areas such as
            race, religion, gender, age, sexual identity and sexual orientation,
            ability, and more.
          </p>
          <div className="dt-box">
            <p>
              “When diversity, equity and inclusion become part of the DNA of an
              organization’s marketing and communications strategy, campaigns
              are not just ticking boxes; but they can have a profound and
              positive effect on the bottom line. Beyond making commercial
              sense, it is also the ethical and right thing to do. Consumers
              connect with marketers who make the effort to win hearts and minds
              and going beyond the transactional relationship.”
            </p>
            <h4>Sheba Nandkeolyar,</h4>
            <p>
              Global Vice President – Diversity, Equity and Inclusion at IAA
              Global and Chair of DE&amp;I Council, IAA Global
            </p>
          </div>
          <div className="dt-box">
            <p>
              “At IAA we see diversity as our strategic advantage not as a duty
              to fulfill. We believe in diversity, equity &amp; inclusion being
              the key drivers of creativity, collaboration and innovation. And,
              given today's digital transformation of the marketing and
              advertising industry, we need a wider range of creative resources
              to respond to constantly evolving consumer behaviors. Without
              diversity we can't deliver bold and innovative ideas and build
              high value brands. So, at IAA we see DE&amp;I as our secret recipe
              for staying relevant.”
            </p>
            <h4>Dagmara Szulce,</h4>
            <p>
              International Advertising Association Global Executive Director
            </p>
          </div>
        </div>
        <div id="menu1" className="container tab-pane fade">
          <br />
          <p>
            We are proud to launch the IAA North Star campaign. As The Global
            Compass of Marketing Communications, we will help the communication
            industry navigate the implementation of the North Star values in
            their own company cultures. We will help them navigate by the Star.
            And like any real compass it will point us in the right direction.
            The North Star campaign captures the values of creativity, advocacy,
            education, collaboration, professional development, diversity,
            equity and inclusion, which will be our guide to transforming the
            marketing and communications industry into a more creative,
            innovative and inclusive industry.
          </p>
          <div className="camp-video">
            <h2 className="come-one">
              <span />
              <span />
              <span />
              <span />
              Come One. Come All.
            </h2>
            <video poster="https://staging.iaaglobal.org/storage/bulk_images/video-pic.jpg">
              <source
                src="https://staging.iaaglobal.org/storage/bulk_images/campaign-video-new.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="abt-camp-athr">
            <div className="athr-img">
              <img src={n3} />
            </div>
            <div className="camp-athr-dt">
              <h4>Andres Hernandez</h4>
              <p>
                Being a creative in New York City is something I always dreamed
                of while growing up in Colombia. As with any dream, however, it
                was not easy to achieve, but well worth the struggle. The
                Photography industry here overflows with talented artists from
                all over the world, which is what makes New York City so unique.
                As an immigrant from Latin America who faced all of the
                difficulties associated with being the first generation to come
                here, it has definitely been a challenge to try and rise through
                the ranks, but I know that I bring my individuality to the craft
                as do so many others. Diversity in the creative community is the
                magic that breeds new ideas. When I heard about the IAA campaign
                and its goal to promote diversity in the creative sector, not
                only did I identify with it, but also saw it as an opportunity
                to give back.
              </p>
              <p>
                While having a conversation with Dagmara Szulce in a cab
                crossing New York City one day, we realized that we could join
                forces as like-minded individuals in creating the IAA campaign.
                As she told me about the purpose behind this new project, it
                quickly resonated with me and I jumped at the opportunity of
                working on something I’m truly passionate about. I’m so grateful
                to have had the opportunity to shoot with so many extraordinary
                professionals.
              </p>
            </div>
          </div>
          <div className="press-rel">
            <a href="#">Press Release</a>
          </div>
          {loop.map((item,index) =>{
                return(
                    <div>
                    <div className="camp-spkr-img">
                      <img src={n4} />
                    </div>
                    <div className="dt-box">
                      <p>
                        “Having lived and worked across the globe my entire life, my
                        experience has taught me that great ideas can come from anywhere
                        and anyone. Being open to people from all walks of life creates
                        opportunity beyond our wildest imagination. Our only obstacle is
                        our own lack of vision and the ability to see beyond ourselves.”
                      </p>
                      <h4>Carol Schuster</h4>
                      <p>Business Information and Technology Advisor at Lafayette 148</p>
                    </div>
                    </div>
                )
            }

            )}
        
          {/* <div className="camp-spkr-img">
            <img src="images/camp-spkr-img2.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Creativity and innovation, fueled by DE&amp;I, are the currency
              that cultivate the perceptions and actions of the people we will
              serve today and in the future. As our industry continues to shape
              our culture, we therefore must reflect, empower and accurately
              represent the increasingly diverse communities we serve.”
            </p>
            <h4>Adrian Adaramoye</h4>
            <p>Global Partnership Lead, Facebook</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img3.jpg" />
          </div>
          <div className="dt-box">
            <p>“Diversity is the strongest source of creativity and growth”</p>
            <h4>Ameneh Atai</h4>
            <p>GM of Commercial Strategy, Nielsen</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img4.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Identity and cultural affiliations are often steering how people
              live their lives and interact with brands; however, 72% say most
              advertising doesn’t represent the world around them. Consumers
              want to see advertising that reflects more diversity because their
              roots and heritage are more important today than ever before. And
              the events over the last year have reminded us about continued
              disparities and underrepresentation in our society. According to
              our research, 80% agree how businesses express themselves after
              these events, such as the Racial Justice Movement, will
              permanently affect buying decisions.
            </p>
            <p>
              Diversity and cultural relevance in advertising is proven to lift
              consumer actions -- consumers are more likely to learn additional
              information about a brand, more likely to recommend and more
              likely to repurchase when cultural insight is at its highest. That
              is why Inclusive &amp; Multicultural Marketing is more important
              than ever. It is the intentional practice that helps us make
              informed brand decisions that – in aggregate – positively reflect
              the diversity of the world around us. Understanding the diverse
              mosaic of our consumers, creating ads that culturally resonate and
              then aligning with culture-forward content is the ultimate
              combination that leads to higher brand relevance and ultimately
              better business.”
            </p>
            <h4>Sarah Carberry</h4>
            <p>Head of US Multicultural Strategy &amp; Sales, Google</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img5.jpg" />
          </div>
          <div className="dt-box">
            <p>
              "As someone who is left-brained, pondering 'how diversity drives
              creativity' was quite a challenge for me. Creativity is often
              attributed to the arts and imagination, whereas my thoughts are
              mainly founded in analysis and facts. It wasn't until I looked
              inward and examined how even my own personal identities, as both a
              veteran and LGBTQ+, allow me to navigate challenges that require
              an objective solution. From data storytelling to ensuring a
              company's policies lead with inclusion, diversity of experiences
              and identities unlocks the ability for multiple voices to be
              heard, a necessity when authoring terms and conditions to a global
              audience."
            </p>
            <h4>Anna Valenza</h4>
            <p>NA Advertising Policy Manager, TikTok</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img6.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Creativity and innovation require that we take the best of what
              makes us human and use that to help others access their own
              humanity. But we cannot connect to the true vibrancy and dynamism
              of that humanity without DE&amp;I”
            </p>
            <h4>Viviane Scott</h4>
            <p>Litigation Associate, Global Advertising Lawyers Alliance</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img7.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “We are sometimes told that to see things differently, we should
              look at it as if it were through the eyes of a child. The same can
              be said about diversity: diversity ushers in different
              perspectives, diversity drives newness, and diversity allows us to
              be bold - in our work, in our thoughts and in our actions.
              Creating and allowing space for our opinions and our viewpoints is
              not only a conduit to inclusivity, but also an act of resistance
              against the old guard.”
            </p>
            <h4>Trina McDonald</h4>
            <p>Human Resources Business Partner Lead at TikTok</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img8.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Diversity fosters an open and inclusive environment without which
              creativity and inspirations will drain.”
            </p>
            <h4>Lingjiao Mo</h4>
            <p>Digital Marketer, MediaMath</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img9.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Diversity is a major step towards achieving true globalization,
              progressive countries and strong economies. Diversity eradicates
              biases and prejudices, and overall helps move towards a utopian
              inclusive ecosystem”
            </p>
            <h4>Sudarshan Ramrajan</h4>
            <p>Marketing &amp; Content Manager, DePuy Synthes</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img10.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Diversity creates a rich environment where differing points of
              view are naturally represented. Encouraging differing points of
              view is valuable as it uncovers fresh ideas and innovative
              thinking. An organization that reflects the diversity of the world
              we live in is better positioned to be relevant, authentic and will
              ultimately develop innate empathy and understanding”
            </p>
            <h4>Angus Kneale</h4>
            <p>Chief Creative at Preymaker</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img11.jpg" />
          </div>
          <div className="dt-box">
            <p>
              "It's cliche to say that creativity comes from thinking "outside
              the box." But as members of underrepresented communities, we've
              often been excluded from that box anyway. So our thoughts and
              ideas are constantly shaped by unique experiences which innately
              fuel innovation."
            </p>
            <h4>Wilburt Carpenter</h4>
            <p>Industry Relations Manager, TikTok</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img12.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “Building products with diversity, equity and inclusion in mind
              forces us to get outside of our old frame of reference and
              approach old problems in new ways. It's my personal mission to
              ensure that technologies are designed to meet the needs of people
              who have historically been left out of product development,
              because it means we will build better products for everyone.”
            </p>
            <h4>Shannon Levis</h4>
            <p>Program Manager, Product Testing, Facebook</p>
          </div>
          <div className="camp-spkr-img">
            <img src="images/camp-spkr-img13.jpg" />
          </div>
          <div className="dt-box">
            <p>
              “An environment that is diverse, equitable and inclusive shines a
              light on us all and it is in that light that humanity grows
              through the concrete of disharmony; paving the way for innovation,
              creativity and ultimately love.”
            </p>
            <h4>Anna Diop Día</h4>
            <p>Growth Associate, StrawberryFrog</p>
          </div> */}
        </div>
        <div id="menu2" className="container tab-pane fade">
          <br />
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="reso-tab">
                <ul className="nav md-pills pills-secondary d-flex flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel21"
                      role="tab"
                    >
                      Get Started
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel22"
                      role="tab"
                    >
                      DE&amp;I in Workplace
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel23"
                      role="tab"
                    >
                      DE&amp;I in Communications
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-12">
              <div className="tab-content urnal">
                <div
                  className="tab-pane fade in show active"
                  id="panel21"
                  role="tabpanel"
                >
                  <br />
                  <p>
                    The key to unlocking the power of diversity, equity and
                    inclusion starts with improving one’s understanding about
                    diversity, equity and inclusion issues and how you can
                    implement them in practice. Whether it is a matter of hiring
                    candidates from diverse or multicultural backgrounds,
                    ensuring safe and non-discriminatory work environments, or
                    fostering equal representation in the advertising industry,
                    diversity and inclusion is relevant in different contexts.
                    Below is a curated collection of diversity, equity and
                    inclusion best practice resources to help you understand the
                    issues and use these best practice tools to positively
                    impact our workplace by making it more diverse and
                    inclusive.
                  </p>
                </div>
                <div className="tab-pane fade" id="panel22" role="tabpanel">
                  <br />
                  <p>
                    No one deserves to be treated unfairly based on the colour
                    of their skin, gender, religion, sexual orientation, ability
                    and more. Many minority groups often face discrimination and
                    are marginalised in the workplace. Inclusion is important to
                    make everyone feel valued and acknowledge how their
                    differences contribute to the organisation. At IAA, we are
                    dedicated to uplifting the voices of employees of diverse
                    backgrounds and helping them feel safe and empowered in the
                    workplace.
                  </p>
                  <div className="wrkplace">
                    <ul>
                      <li>
                        <a href="#">
                          Shattering Sterotypes: How Today's Women Over 50 are
                          Redefining Whats Possible On-Screen, at Work, and at
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#">TikToks Community Guidelines</a>
                      </li>
                      <li>
                        <a href="#">Countering hate on TikTok</a>
                      </li>
                      <li>
                        <a href="#">New tools to combat bullying on TikTok</a>
                      </li>
                      <li>
                        <a href="#">#CreateKindness on TikTok</a>
                      </li>
                      <li>
                        <a href="#">
                          How TikTok is supporting Black communities and
                          promoting diversity and inclusion
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          What TikTok Learned From TikTok's Inaugural Inclusion
                          Summit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="panel23" role="tabpanel">
                  <br />
                  <p>
                    Diversity, equity and inclusion in communications
                    contributes to higher levels of trust and loyalty when
                    marketers take the time to meaningfully understand diverse
                    customer groups in greater depth and drive inclusive
                    representation. They represent strategic and competitive
                    advantages which are not only essential to the bottom line
                    of brands, but indicate the willingness of brands to go
                    further and reflect the values and/or cultural beliefs of
                    their customers. IAA seeks to empower brands to adopt
                    diversity, equity and inclusion and leverage them to truly
                    resonate with diverse audiences while obtaining a higher
                    ROI.
                  </p>
                  <div className="wrkplace">
                    <ul>
                      <li>
                        <a href="#">
                          Nielsen: The Olympics is the Biggest Platform for
                          Gender Equality in Global Sports
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: Visibility of Disability: Answering the Call
                          for Disability Inclusion in Media
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: Over The Rainbow: How Brands Can Take Action
                          with Advertising Beyond Pride Month
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: Cannes Lions Live 2021: Measuring Progress
                          Toward Better Latinx Representation in Content
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: Being Seen On Screen: Diverse Representation
                          and Inclusion on TV
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: The New Black Family Culture: Navigating
                          Crises Through Content
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nielsen: A Cultural Turning Point: Breaking Our
                          Silence on Racial Injustice
                        </a>
                      </li>
                      <li>
                        <a href="#">TikTok Transparency Report</a>
                      </li>
                      <li>
                        <a href="#">
                          Introducing the TikTok for Black Creatives incubator
                          program
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          TikTok Introducing TikTok's LGBTQ+ Trailblazers 🌈
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          TikTok Honoring the Asian &amp; Pacific Islander
                          community
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          TikTok Celebrating Blackness past, present, and future
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu3" className="container tab-pane fade">
          <br />
          <div className="linkdin-box">
            <ul>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Sheba Nandkeolyar</h3>
                      <p>Chair (Australia)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Sasan Saeidi</h3>
                      <p>Council Member (United Arab Emirates)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Dagmara Szulce</h3>
                      <p>Council Member (United States)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Carol Schuster</h3>
                      <p>Council Member (United States)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Kirsty Giordani</h3>
                      <p>Council Member (United Kingdom)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Megha Tata</h3>
                      <p>Council Member (India)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Scott Reed</h3>
                      <p>Council Member (United States)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="link-cnt">
                    <div className="in-img">
                      <img src={n5} />
                    </div>
                    <div className="in-name">
                      <h3>Morana Bakula</h3>
                      <p>Council Member (Canada)</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="dei-news-letter clearfix">
    <div className="container">
      <div className="dei-news-main-cnt">
        <div className="dei-form">
          <h3>Want to stay up to date with our news and events?</h3>
          <p>Subscribe to our IAA Newsletter</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <div className="sub_btn">
                <a href="#">Subscribe</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
