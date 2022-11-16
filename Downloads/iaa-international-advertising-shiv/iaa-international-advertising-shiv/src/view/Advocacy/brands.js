import React from 'react'
import z1 from "../../images/brand.jpg";
import z2 from "../../images/download.png";
import z3 from "../../images/brand2.jpg";
import z4 from "../../images/brand4.jpg";
import z5 from "../../images/brand5.jpg";
import z6 from "../../images/brand6.jpg";
import z7 from "../../images/brand7.jpg";

export default function brands() {
    const loop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  return (
    <div>
        <section className="why-brands clearfix">
    <div className="why-brands-banner-img">
      <img src={z1} className="img-fluid"/>
    </div>
  </section>
  <section className="why-brands_tabs clearfix">
    <div className="container">
      {/* Nav tabs */}
      <ul className="nav nav-tabs appro">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">
            Why Brands Matter Report 2020
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu1">
            The Campaing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu2">
            Case Studies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu3">
            Videos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#menu4">
            Leaders View
          </a>
        </li>
      </ul>
      <div className="tab-content roved">
        <div id="home" className="container tab-pane active">
          <br />
          <div className="why-brands-text">
            <p>
              <strong>What is the purpose of a strong brand:</strong> to attract
              customers, to build loyalty, to motivate staff? All true, but for
              a commercial brand at least, the first answer must always be ‘to
              make money’. Huge investments are made in the design, launch, and
              ongoing promotion of brands. Given their potential financial
              value, this makes sense. Unfortunately, most organizations fail to
              go beyond that, missing huge opportunities to effectively make use
              of what are often their most important assets. Monitoring of brand
              performance should be the next step, but is often sporadic. Where
              it does take place, it frequently lacks financial rigor and is
              heavily reliant on qualitative measures, poorly understood by
              non-marketers.
            </p>
            <p>
              As a result, marketing teams struggle to communicate the value of
              their work and boards then underestimate the significance of their
              brands to the business. Skeptical finance teams, unconvinced by
              what they perceive as marketing mumbo jumbo, may fail to agree
              necessary investments. What marketing spend there is, can end up
              poorly directed as marketers are left to operate with insufficient
              financial guidance or accountability. The end result can be a slow
              but steady downward spiral of poor communication, wasted
              resources, and a negative impact on the bottom line.
            </p>
            <p>
              Brand Finance bridges the gap between marketing and finance. Our
              teams have experience across a wide range of disciplines from
              market research and visual identity, to tax and accounting. We
              understand the importance of design, advertising, and marketing,
              but we also believe that the ultimate and overriding purpose of
              brands is to make money. That is why we connect brands to the
              bottom line.
            </p>
            <p>
              By valuing brands, we provide a mutually intelligible language for
              marketing and finance teams. Marketers then have the ability to
              communicate the significance of what they do, and boards can use
              the information to chart a course that maximizes profits. Without
              knowing the precise, financial value of an asset, how can you know
              if you are maximizing your returns? If you are intending to
              license a brand, how can you know you are getting a fair price? If
              you are intending to sell, how do you know what the right time is?
              How do you decide which brands to discontinue, whether to rebrand
              and how to arrange your brand architecture? Brand Finance has
              conducted thousands of brand and branded business valuations to
              help answer these questions.
            </p>
            <p>
              Brand Finance’s research revealed the compelling link between
              strong brands and stock market performance.{" "}
              <strong>
                It was found that investing in highly-branded companies would
                lead to a return almost double that of the average for the
                S&amp;P 500 as a whole.
              </strong>
            </p>
            <p>
              Acknowledging and managing a company’s intangible assets taps into
              the hidden value that lies within it. The following report is a
              first step to understanding more about brands, how to value them
              and how to use that information to benefit the business.{" "}
            </p>
            <h6>-David Haigh, CEO, Brand Finance</h6>
            <div className="why-brands-text-logo">
              <img src={z2}  className="img-fluid"/>
            </div>
            <a href="#">View the Why Brands Matter 2020 Report</a>
          </div>
        </div>
        <div id="menu1" className="container tab-pane fade">
          <br />
          <div className="why-brands-text">
            <p>
              It is an undeniable fact that the COVID-19 pandemic has
              fundamentally altered our world and how we as humans, interact
              with our environment.
            </p>
            <p>
              Its impact has been massive and governments across the world have
              been encumbered with a multi-faceted problem. Not only have they
              had to bear the responsibility of finding innovative ways to
              protect their people but they are also having to find ways to
              either build resilience to withstand the impact of the COVID-19
              pandemic on their economies or finding ways to kick-start
              economies that have been severely hit by the impact of the
              pandemic.
            </p>
            <p>
              Fact is, brands will play a leading role in re-starting the pulse
              of economies across the world.
              <br />
              Brands convey the source, quality and authenticity of products.
              Brands represent creativity, innovation and optimism. Strong
              brands restore consumer confidence and brand competition can
              rebuild economic strength. In fact, research shows that the
              importance of brands actually increases during times of crisis.
            </p>
            <p>
              This is why the IAA is launching a global campaign to promote the
              role brands can play in driving economic revival.
            </p>
            <p>
              Our campaign visuals show the benefits brands bring to consumers -
              choice, trust, identity, pride and passion amongst many others. At
              the same time, they highlight what will be lost to all of us if we
              lived in a world without brands. It would be a poorer world with
              less choice, less clarity and less trust.
            </p>
            <p>
              These are reasons why brands matter ... and why at the IAA, we
              love brands!
              <br />
              These indeed are tough times for Countries, People and Brands. But
              one thing’s for certain: <strong>“This too, shall pass!”</strong>
            </p>
            <p>
              As is becoming my custom, let me end this with an African proverb
              that puts our roles in perspective: It says, “where you will sit
              when you are old, shows where you stood in your youth”.
            </p>
            <p>
              In other words, the actions all of us – Governments, Citizens,
              Brands and Marketeers - take now, will determine where we will be
              in the future. It is the brands that show up during times of
              crises that will be remembered when the dust of this pandemic and
              every other crisis settle. I encourage all of us to commit
              ourselves to ensuring the success of this campaign. Let me also
              use this opportunity, on behalf of the International Advertising
              Association, to call on governments and all brands around the
              world to work together to create an environment that gives
              consumers the confidence to invest in brands that matter to them;
              an environment where brands are protected and nurtured and allowed
              to fulfill their full potential"
            </p>
            <h6>-Joel E Nettey,</h6>
            <p>
              World President &amp; Chairman, International Advertising
              Association
            </p>
            <h5>
              So, Why Brands Matter? Here are the Ads that are part of the{" "}
              <strong>Why Brands Matter</strong> initiative
            </h5>
            <p>
              <iframe
                width="100%"
                height={400}
                src="https://www.youtube.com/embed/7Vq7yRE3asU"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </p>
            <p>
              <strong>Nations, regions, cities: they are all brands.</strong>{" "}
              They provide us with a source of pride and belonging.
            </p>
            <p>
              While many countries have not covered themselves in glory through
              the pandemic, either via their slow and inept responses to the
              COVID outbreak or their handling of its resulting negative
              economic impacts causing international reputational damage as a
              result. How lasting is this damage to the nation as a brand? Will
              it have long-term economic consequences once global trade
              recovers? Or is this merely all reputational? What type of
              nation-branding can help recover lost prestige, capitalise on
              new-found brand equity?
            </p>
            <p>
              <img src={z3} />
            </p>
            <p>
              <strong>Brands excite our emotions.</strong> The world is a richer
              and more diverse place with brands
            </p>
            <p>
              Identities bring emotions. We may know things, but without
              emotions carried by signs and colours, the world will be just much
              less. Less engaging, less proud and less loveable
            </p>
            <p>
              Brands equal choice and freedom. Without brands our freedom to
              choose is constrained
            </p>
            <p>
              Without branding, consumers struggle to identify those core values
              or differentiate between products and services, reducing their
              understanding, lessening their choice.
            </p>
            <p>
              <img src={z4} />
            </p>
            <p>
              <strong>Brands offer trust, reassurance and clarity.</strong>{" "}
              These benefits are even more important in these difficult times.
            </p>
            <p>
              Brands matter, whether impulse purchases, products or experiences
              we buy regularly without thinking, we buy out of a sense of trust
              and comfort, familiarity and perceived value for money. Many
              consumers will be reluctant to part with their money – or will not
              have much money to spend; they will look to spend it in trusted
              places with trusted names. They will seek much-needed reassurance
              in unsettling times.
            </p>
            <p>
              <img src={z3} />
            </p>
            <h6>
              How we look, how we think and how we act all combine to create our
              own unique brand.
            </h6>
            <p>
              As some entire sectors fight to reinvent themselves and even
              survive, all manner of brands are pivoting to sell products,
              services and experiences they have not offered before and often
              via channels that were not once as significant to them. A new
              focus on digital touchpoints, remote sales and service models and
              scaling of new offerings through digital platforms is required.
              Which habits have gone temporarily and which are permanent
              changes? And how do brands react fast?
            </p>
            <p>
              <img src={z3} />
            </p>
            <h5>This is why brands matter. </h5>
            <p>
              A brand is a promise to consumers. It’s a commitment to quality,
              trust and standards. Through their distinctive logos, packaging
              and colors, brands express their values and vision. Let’s work
              together to make sure brands have a future and consumers are free
              to choose.
            </p>
          </div>
        </div>
        <div id="menu2" className="container tab-pane fade">
          <br />
          <div className="why-brands-study-text">
            <h5>1. Aeroflot Case Study</h5>
            <p>
              <a href="#">Aeroflot</a> Group is Russia’s largest airline group
              and ranks among the top 20 globally by passenger numbers. In 2019
              the Group had 41.3% market share in Russia and carried more than
              60.7 million passengers.
            </p>
            <p>
              <img src={z5} className="img-fluid"/>
            </p>
          </div>
          <div className="why-brands-text">
            <a href="#">View Case Study</a>
          </div>
        </div>
        <div id="menu3" className="container tab-pane fade">
          <br />
          <div className="why-brands-text">
            <h5>Sir Martin Sorrell: Brands represent trust</h5>
            <p>
              <img src={z6} />
            </p>
            <p>
              With the world in crisis due to Covid-19, it’s easy to see why the
              importance of brands is being overlooked and questioned. Consumers
              are increasingly cautious about where they put their money, what
              brands they choose to trust, and what those brands represent.
              However, with brands so intrinsically linked to GDP, we must
              consider the role that brands can play in rebuilding the economy
              and pioneering the new normal. With this in mind, we have
              assembled some of the greatest minds from digital, industry,
              government, and agencies to give their opinions on the burning
              question of Why Brands Matter.
            </p>
            <p>
              As part of the International Advertising Association’s Why Brands
              Matter campaign,{" "}
              <strong>Sir Martin Sorrell, Chairman of S4 Capital,</strong> gives
              his opinion on why it’s important to have brands as beacons of
              trust during uncertain times. That’s why Covid-19 has seen some
              brands do extraordinarily well; consumers are turning to brands,
              people, and institutions they trust during times of crisis. As
              technology changes the way consumers interact, it’s up to those
              brands to lead the way and the role of government to support these
              changes through re-educating and retraining. Covid-19 can be a
              time for opportunity, and governments and the private sector
              should work together to ensure this can happen.
            </p>
            <a href="#">View Full Video</a>
          </div>
          <div className="why-brands-text">
            <h5>Maher Nasser: The Social Purpose of Brands</h5>
            <p>
              <img src={z6} />
            </p>
            <p>
              With the world in crisis due to Covid-19, it’s easy to see why the
              importance of brands is being overlooked and questioned. Consumers
              are increasingly cautious about where they put their money, what
              brands they choose to trust, and what those brands represent.
              However, with brands so intrinsically linked to GDP, we must
              consider the role that brands can play in rebuilding the economy
              and pioneering the new normal. With this in mind, we have
              assembled some of the greatest minds from digital, industry,
              government, and agencies to give their opinions on the burning
              question of Why Brands Matter.
            </p>
            <p>
              As part of the International Advertising Association’s Why Brands
              Matter campaign,{" "}
              <strong>
                Maher Nasser, Director of the Outreach Division for the United
                Nations,
              </strong>{" "}
              gives his view on how essential it is for brands to have a larger
              social purpose. With younger generations increasingly calling for
              brands to have an active and genuine interest in improving their
              world, Maher talks about how brand responsibility and how
              important it is for brands to not exist within a bubble and be a
              force for good. With sustainability and the climate crisis looming
              at the forefront of everyone’s minds, Nasser stresses how
              essential it is for brands to unite with governments to accomplish
              a greater goal.
            </p>
            <a href="#">View Full Video</a>
          </div>
          <div className="why-brands-text">
            <h5>George Gabor Burt: Brands as the Drivers of Innovation</h5>
            <p>
              <img src={z6} />
            </p>
            <p>
              With the world in crisis due to Covid-19, it’s easy to see why the
              importance of brands is being overlooked and questioned. Consumers
              are increasingly cautious about where they put their money, what
              brands they choose to trust, and what those brands represent.
              However, with brands so intrinsically linked to GDP, we must
              consider the role that brands can play in rebuilding the economy
              and pioneering the new normal. With this in mind, we have
              assembled some of the greatest minds from digital, industry,
              government, and agencies to give their opinions on the burning
              question of Why Brands Matter.
            </p>
            <p>
              As part of the International Advertising Association’s Why Brands
              Matter campaign,{" "}
              <strong>
                George Gabor Burt, Founder of The Slingshot Framework,
              </strong>{" "}
              gives his valuable insight on how brands can be a key driver of
              innovation and positive change in times of extreme crisis. In
              these uncertain times, George Gabor Burt tells us why he believes
              that brands will be instrumental in reimagining our new normal,
              why redefining the boundaries of brands is essential, and the
              importance of consumer centricity in every aspect. Perhaps by
              embracing innovation and putting consumers at the forefront,
              Covid-19 could be an opportunity for brand holders who are truly
              listening to consumers.
            </p>
            <a href="#">View Full Video</a>
          </div>
          <div className="why-brands-text">
            <h5>Carla Michelotti: Brands in Economic Recovery</h5>
            <p>
              <img src={z6} />
            </p>
            <p>
              With the world in crisis due to Covid-19, it’s easy to see why the
              importance of brands is being overlooked and questioned. Consumers
              are increasingly cautious about where they put their money, what
              brands they choose to trust, and what those brands represent.
              However, with brands so intrinsically linked to GDP, we must
              consider the role that brands can play in rebuilding the economy
              and pioneering the new normal. With this in mind, we have
              assembled some of the greatest minds from digital, industry,
              government, and agencies to give their opinions on the burning
              question of Why Brands Matter.
            </p>
            <p>
              As part of the International Advertising Association’s Why Brands
              Matter campaign, the IAA’s own{" "}
              <strong>
                Carla Michelotti, Vice President for Self-Regulation,
              </strong>{" "}
              shares with us her views on the current relationship between
              regulators and brands. Brands are increasingly under threat from
              excess regulation under the guise of concern for citizens; this
              relationship damages credibility in both governments and brands,
              leaving consumers disappointed and untrusting. With spending at an
              all time low, governments need consumers to be able to invest in
              brands to boost the economy. Yet how can this happen when
              governments are squashing brand identity? Only with proper
              government support can brands, and our economies, be allowed to
              thrive.
            </p>
            <a href="#">View Full Video</a>
          </div>
          <div className="why-brands-text">
            <h5>Brands Representing their Countries</h5>
            <p>
              <img src={z6} />
            </p>
            <p>
              With the world in crisis due to Covid-19, it’s easy to see why the
              importance of brands is being overlooked and questioned. Consumers
              are increasingly cautious about where they put their money, what
              brands they choose to trust, and what those brands represent.
              However, with brands so intrinsically linked to GDP, we must
              consider the role that brands can play in rebuilding the economy
              and pioneering the new normal. With this in mind, we have
              assembled some of the greatest minds from digital, industry,
              government, and agencies to give their opinions on the burning
              question of Why Brands Matter.
            </p>
            <p>
              As part of the International Advertising Association’s Why Brands
              Matter campaign, some of the leading minds from the public and
              private sector give us their views on why brands are fundamental
              for a robust economy. How well governments support and work with
              brands owners in these uncertain times is crucial. Brands are
              proving critical for pioneering the way forward into a new digital
              era. There is no strong economy without strong brands. Talking
              about this are:
            </p>
            <ul>
              <li>
                <b>Brian Solis,</b> Founder, Salesforce
              </li>
              <li>
                <b>Nicola Mendelsohn,</b> VP EMEA, Facebook
              </li>
              <li>
                <b>Tim Hames,</b> Director General, BVCA
              </li>
              <li>
                <b>Ed Vaizey,</b> Former Minister for Culture, Communications
                and Creative Industries
              </li>
            </ul>
            <a href="#">View Full Video</a>
          </div>
        </div>
        <div id="menu4" className="container tab-pane fade">
          <br />
          {loop.map((item,index) =>{
            return(
                <div className="leadersview-tab-text">
                <h3>Sir Martin Sorrell, Executive Chairman, S4 Capital</h3>
                <p>
                  "The global economy, globalization, is in reverse. Technology is
                  disenfranchising, disrupting, dis-intermediating, certain
                  established industries. Globalization has done that too.
                  Governments' role, together with the private sector, must be to
                  re-educate, retrain, to encourage labour to be more mobile, to
                  give incentives for mobility"
                </p>
                <p>
                  <img src={z7} className="img-fluid"/>
                </p>
              </div>
            )
          }

          )}
   
       
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
