import React, { useState } from "react";
import Navigation from "../components/navigation/navigation";
import type { HeadFC, PageProps } from "gatsby";
import StylesComponent from "../components/styles";

// CSS
import "../sass/page-specific/homepage.scss"
import common_queries_list from "../resources/common-queries";
import Footer from "../components/footer/footer";

const HomePage: React.FC<PageProps> = () => {
  const [queryIndex, setQueryIndex] = useState<number>(0)

  return (
    <React.Fragment>
      <StylesComponent/>
      <Navigation/>

      {/* Hero */}
      <div className="hero-outer-container">
        <div className="hero-inner-container container-width">
          <h1>Utility switching<br/>made&nbsp;easier</h1>

          <div id="trustpilot-box">
            <img
              src="/images/trustpilot-5star-with-title.png"
              alt="Rated 5 stars on Trustpilot"
              title="5 star trustpilot rating"
            />
            <p>6,900+ reviews</p>
          </div>
        </div>
      </div>

      {/* Savings section */}
      <div className="savings-section-outer-container">
        <div className="savings-section-inner-container container-width">
          <h2>Join 10,000s of households and save with Utility Switchboard</h2>

          <p>Between January 2021 - March 2021, we saved 10% of customers <u>at least £180</u> on their annual energy bills. Added to further by the huge savings on TV & Broadband bills.</p>

          <a 
            href="#"
            className="standard-button green"
          >Start saving</a>

          <div className="direct-debit-logos-wrapper">
            <img
              src="/images/energy-switch-guarantee-logo.png"
              alt="Energy switch guarantee logo"
            />

            <img
              src="/images/direct-debit-logo.png"
              alt="Direct debit logo"
            />
          </div>
        </div>
      </div>

      {/* Common queries */}
      <div className="common-queries-outer-container">
        <div className="common-queries-inner-container">
          <h2>Common queries</h2>

          <p>Read through our most common queries and questions, find your answer quickly or give us call so we can walk you through it.</p>

          {/* Large devices version */}
          <div className="common-queries-app-container">
            <ul className="common-queries-options">
              {common_queries_list.map((query, index) => (
                <li className={queryIndex === index ? 'active' : 'inactive'} onClick={() => setQueryIndex(index)}>{query.name}</li>
              ))}
            </ul>

            <div className="common-queries-content" style={queryIndex === 0 ? { borderTopLeftRadius: 0} : { borderTopLeftRadius: 10 }}>
              <p>{common_queries_list[queryIndex].content}</p>
              
              <div className="common-queries-content-links">
                <a className="call-us-now-box" href="tel:+4402039927717">
                  <span>Call us now</span>
                  <p className="telephone-link black">020&nbsp;3992&nbsp;7717</p>
                </a>

                <span>or</span>

                <a className="standard-text-link">Read full guide</a>
              </div>
            </div>
          </div>

          {/* Medium / small devices version */}
          {
            common_queries_list.map((query, index) => (
              <React.Fragment>
                <input
                  checked={queryIndex === index}
                  type="radio"
                  className="standard-accordion-trigger invisible"
                  name="query-list"
                  value={index}
                  id={'query_' + index}
                  onChange={() => setQueryIndex(index)}
                />

                <label className="standard-accordion-wrapper pink-cream common-queries-app-sm" htmlFor={'query_' + index}>
                  <div className="standard-accordion-header"><span>{query.name}</span></div>

                  <div className="standard-accordion-content">
                    <p>{query.content}</p>

                    <div className="common-queries-content-links">
                      <a className="call-us-now-box" href="tel:+4402039927717">
                        <span>Call us now</span>
                        <p className="telephone-link black">020&nbsp;3992&nbsp;7717</p>
                      </a>

                      <span>or</span>

                      <a className="standard-text-link">Read full guide</a>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))
          }
          
        </div>
      </div>

      <div className="separator" />

      {/* Our process */}
      <div className="our-process-outer-container">
        <div className="our-process-inner-container">
            <h2>Our process</h2>

            {/* Large devices */}
            <table className="our-process-app-container">
              <tbody>
                <tr>
                  <th>Step one</th>
                  <th className="gap"/>
                  <th>Step two</th>
                  <th className="gap"/>
                  <th>Step three</th>
                </tr>
                <tr>
                  <td className="our-process-step-box one">
                    <img src="/images/emojis/magnifying-glass.png"/>
                    <h3>Browse the best tariffs</h3>

                    <p>Well talk you through your options and handpick you the best fit for you</p>
                  </td>
                  <td/>
                  <td className="our-process-step-box two">
                    <img src="/images/emojis/ok-hand.png"/>
                    <h3>Choose</h3>

                    <p>Pick the tariff that you'd like to sign up to.</p>
                  </td>
                  <td/>
                  <td className="our-process-step-box three">
                    <img src="/images/emojis/check-mark.png"/>
                    <h3>Done</h3>

                    <p>...and as simple as that, you can save £100s on your utility bills.</p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Small / medium devices */}
            <div className="our-process-step-box sm-md one left">
              <img src="/images/emojis/magnifying-glass.png"/>
              <h3>Browse the best tariffs</h3>

              <p>Well talk you through your options and handpick you the best fit for you</p>
            </div>

            <div className="our-process-step-box sm-md two right">
              <img src="/images/emojis/ok-hand.png"/>
              <h3>Choose</h3>

              <p>Pick the tariff that you'd like to sign up to.</p>
            </div>

            <div className="our-process-step-box sm-md three left">
              <img src="/images/emojis/check-mark.png"/>
              <h3>Done</h3>

              <p>...and as simple as that, you can save £100s on your utility bills.</p>
            </div>

            <p>The process of switching your gas, electricity, tv or broadband bills with Utility Switchboard is extremely simple. We take care of everything for you. No need to cancel anything, we'll do that for you.</p>
        </div>
      </div>

      <Footer/>
    </React.Fragment>
  )
}

export default HomePage

export const Head: HeadFC = () => (
  <script src="https://kit.fontawesome.com/fc576cdb67.js" crossOrigin="anonymous" async></script>
)