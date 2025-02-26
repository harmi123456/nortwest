import React, { useState } from 'react'
import Header from './Header'

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Header />

      {/* //section 1 */}

      <div className="sec1">

        <div className="container-fluid">

          <div id="rightSlideCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >

            {/* Carousel Indicators */}
            <div className="carousel-indicators">

              <button type="button" data-bs-target="#rightSlideCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
              <button type="button" data-bs-target="#rightSlideCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>

            </div>

            {/* Carousel Slides */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">

                <div className="d-flex align-items-center slide1" >
                  <div className='inner_div'>
                    <div className="welcome ms-3">WELCOME TO NORTWEST</div>
                    <h1 className='heading mt-4'>Connecting Students Worldwide for a Brighter Future.</h1>
                    <div className="learn">
                      <div className="view1">LEARN MORE</div>
                      <div className="view2">VIEW COURSES</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Slide 2 */}
              <div className="carousel-item">

                <div className="d-flex align-items-center slide2">
                  <div className='inner_div'>
                    <div className="welcome ms-3">WELCOME TO NORTWEST</div>
                    <h1 className='heading mt-4'>Global Learning, Endless Opportunities for Every Student.</h1>
                    <div className="learn">
                      <div className="view1">LEARN MORE</div>
                      <div className="view2">VIEW COURSES</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Slide Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#rightSlideCarousel" data-bs-slide="prev" >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#rightSlideCarousel" data-bs-slide="next" >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>

        </div>


      </div>

      {/* //Section 2 */}

      <div className="container sec2">

        <div className="content">
          <h1 className='fw-bold ms-5 mt-5'>Welcome !</h1>
          <p className='ms-5 fs-2 fw-lighter'>We're International Education Academy</p>
          <div className="nort ms-5">
            <p>Nortwest College has been Australia’s premier provider of education  to overseas students since 2007. Nortwest College focuses on up-to-date, industry-endorsed courses in Business, Management, Project Management, IT, Trade, Commercial Cookery and Hospitality Management, and English. We have students from all over the world studying with us and experiencing life, study, and work in Australia with our support.</p>
          </div>
        </div>

        <div className="content">

          <div className="expert" style={{ backgroundColor: '#307ad5' }}>
            <div className="icon-img">
              <img src="/img/panel-icon.png" alt="" />
            </div>
            <div className="numbers">
              <h2>12</h2>
              <p>EXPERT FACULTY</p>
            </div>
          </div>

          <div className="expert ms-5" style={{ backgroundColor: "#e948ae" }}>
            <div className="icon-img">
              <img src="/img/panel-icon.png" alt="" />
            </div>
            <div className="numbers">
              <h2>68</h2>
              <p>BEST TEACHERS</p>
            </div>
          </div>

          <div className="expert" style={{ backgroundColor: '#f9bd44' }}>
            <div className="icon-img">
              <img src="/img/panel-icon.png" alt="" />
            </div>
            <div className="numbers">
              <h2>120</h2>
              <p>ONLINE COURSES</p>
            </div>
          </div>

          <div className="expert ms-5" style={{ backgroundColor: '#10c45c' }}>
            <div className="icon-img">
              <img src="/img/panel-icon.png" alt="" />
            </div>
            <div className="numbers">
              <h2>689</h2>
              <p>SCHOLARSHIP</p>
            </div>
          </div>

        </div>

      </div>


      {/* //Section 3 */}

      <div className="container sec3">
        <center>
          <h1>Our Campus </h1>
          <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
          <p>Welcome to our educational institution with three campuses in different cities, offering quality learning <br /> opportunities nationwide.</p>
        </center>

        <div className="campus">

          <div className="george">

            <div className="img d-flex align-items-center">
              <div className="campus_logo d-flex align-items-center ms-3  mt-5 ">
                <img src="/img/logo.png" alt="" />
              </div>
            </div>

            <h5 className='mt-3 ms-3'>George Street Campus</h5>
            <div className="location ms-3">
              <i class="fa-solid fa-location-crosshairs"></i>
              <span className='ms-2'>SYDNEY</span>
            </div>

          </div>

          <div className="george">
            <div className="img d-flex align-items-center">
              <div className="campus_logo d-flex align-items-center ms-3  mt-5 ">
                <img src="/img/logo.png" alt="" />
              </div>
            </div>

            <h5 className='mt-3 ms-3'>York Street Campus</h5>
            <div className="location ms-3">
              <i class="fa-solid fa-location-crosshairs"></i>
              <span className='ms-2'>SYDNEY</span>
            </div>
          </div>

          <div className="george">
            <div className="img d-flex align-items-center">
              <div className="campus_logo d-flex align-items-center ms-3  mt-5 ">
                <img src="/img/logo.png" alt="" />
              </div>
            </div>

            <h5 className='mt-3 ms-3'>Adelaide Campus</h5>
            <div className="location ms-3">
              <i class="fa-solid fa-location-crosshairs"></i>
              <span className='ms-2'>ADELAIDE</span>
            </div>
          </div>

          <div className="george">
            <div className="img d-flex align-items-center">
              <div className="campus_logo d-flex align-items-center ms-3  mt-5 ">
                <img src="/img/logo.png" alt="" />
              </div>
            </div>

            <h5 className='mt-3 ms-3'>Melbourne Campus</h5>
            <div className="location ms-3">
              <i class="fa-solid fa-location-crosshairs"></i>
              <span className='ms-2'>MELBOURNE</span>
            </div>
          </div>

        </div>

      </div>


      {/* //Section 4 */}
      <div className="container-fluid sec4">

        <center>
          <h1>Academic</h1>
          <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
          <p>Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting <br /> projection off. Connection stimulated estimating excellence an to impression.</p>
        </center>

        <div className="container mt-5">

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon">
              <i class="fa-solid fa-arrow-trend-up"></i>
            </div>

            <div className="con">
              <h4>TEST YOUR ENGLISH</h4>
              <button>TEST NOW</button>
            </div>

          </div>

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon" style={{ color: '#47cce0' }}>
              <i class="fa-solid fa-desktop"></i>
            </div>

            <div className="con">
              <h4>STUDENT SUPPORT SERVICE</h4>
              <button>VIEW DETAIL</button>
            </div>

          </div>

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon" style={{ color: 'green' }}>
              <i class="fa-solid fa-database"></i>
            </div>

            <div className="con">
              <h4>ONLINE FORMS</h4>
              <button>VIEW FORM</button>
            </div>

          </div>

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon">
              <img src="/img/panel-icon.png" style={{ width: '70%', marginTop: '-30px' }} alt="" />
            </div>

            <div className="con">
              <h4>ENROLMENT FORM</h4>
              <button>VIEW FORM</button>
            </div>

          </div>

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon">
              <i class="fa-solid fa-arrow-trend-up"></i>
            </div>

            <div className="con">
              <h4>INTAKE DATES</h4>
              <button>VIEW DATES</button>
            </div>

          </div>

          <div className="test d-flex align-items-center justify-content-center">

            <div className="test_icon" style={{ color: 'green' }}>
              <i class="fa-solid fa-fill-drip"></i>
            </div>

            <div className="con">
              <h4>DOWNLOAD BROCHURE</h4>
              <button>DOWNLOAD NOW</button>
            </div>

          </div>


        </div>
      </div>


      {/* //Section 5 */}
      <div className="container-fluid sec5 ">

        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/DKz_EEoJRs4?autoplay=1&mute=1&loop=1&playlist=DKz_EEoJRs4"
          title="Campus Tour of the Wharton School in Philadelphia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>


        <div className="video_header ">
          <hr style={{ width: '10%', height: '3px', color: 'rgb(252, 188, 68)' }} />
          <h1>CAMPUS STORY</h1>
          <hr style={{ width: '10%', height: '3px', color: 'rgb(252, 188, 68)' }} />
        </div>

        <h3 className='text-center' style={{ color: 'rgb(252, 188, 68)' }}>MELBOURNE CAMPUS</h3>

        <p className='text-center mt-3'>Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity <br /> but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly <br /> estimating introduced stimulated why but motionless. </p>


        <div className="video-overlay">
          <button className="play-button" onClick={() => setShowVideo(true)}>
            <i class="fa-solid fa-play"></i>
          </button>
        </div>


        {/* Video Modal */}
        {showVideo && (
          <div className="video-popup">
            <div className="video-container">
              <button className="close-button" onClick={() => setShowVideo(false)}>
                ❌
              </button>
              <iframe
                className="popup-video"
                src="https://www.youtube.com/embed/DKz_EEoJRs4?autoplay=1&mute=0"
                title="Campus Tour of the Wharton School in Philadelphia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>


      {/* //section 6 */}
      <div className=" container sec6">
        <h3 className='mt-5'>Latest News</h3>
        <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
        <p className='text-center'>Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting <br /> projection off. Connection stimulated estimating excellence an to impression.</p>

        <div className="blog mt-5">

          <div className="blog-items">
            <img src="https://website.nortwest.edu.au/assets/img/800x600.png" alt="" />
            <div className="calender">
              <i class="fa-solid fa-calendar-days"></i> &nbsp; <span>14 JUN, 2020</span>
            </div>
            <p className='fs-5 mt-3 ms-3 fw-bold'>Inquietude assistance precaution any impression man sufficient.</p>
            <button className="readMore ms-3">
              <i class="fa-solid fa-plus"></i> <span>READ MORE</span>
            </button>
          </div>

          <div className="blog-items">
            <img src="https://website.nortwest.edu.au/assets/img/800x600.png" alt="" />
            <div className="calender">
              <i class="fa-solid fa-calendar-days"></i> &nbsp; <span>14 JUN, 2020</span>
            </div>
            <p className='fs-5 mt-3 ms-3 fw-bold'>Inquietude assistance precaution any impression man sufficient.</p>
            <button className="readMore ms-3">
              <i class="fa-solid fa-plus"></i> <span>READ MORE</span>
            </button>
          </div>

          <div className="blog-items">
            <img src="https://website.nortwest.edu.au/assets/img/800x600.png" alt="" />
            <div className="calender">
              <i class="fa-solid fa-calendar-days"></i> &nbsp; <span>14 JUN, 2020</span>
            </div>
            <p className='fs-5 mt-3 ms-3 fw-bold'>Inquietude assistance precaution any impression man sufficient.</p>
            <button className="readMore ms-3">
              <i class="fa-solid fa-plus"></i> <span>READ MORE</span>
            </button>
          </div>

        </div>

      </div>


      {/* //Footer */}
      <footer className='mt-5'>

        <center>
          <h3 className='mt-5'>OUR LOCATIONS</h3>
          <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
        </center>

        <div className="footer_div">

          <div className="locations">

            <h5>GEORGE STREET CAMPUS</h5>

            <div className="mobile">
              <i className='fa-solid fa-mobile'></i>
              <span>+61 449 955 272 </span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>sso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>LEVEL 2, 531 GEORGE STREET <br /> SYDNEY NSW 2000 Australia </span>
            </div>


          </div>

          <div className="locations">

            <h5>York Street Campus</h5>

            <div className="mobile">
              <i className='fa-solid fa-mobile'></i>
              <span>+61 469 738 090 </span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>englishsso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span> Level 2, The Grace Hotel Building <br /> 77 York Street Sydney NSW 2000 <br /> Australia</span>
            </div>


          </div>

          <div className="locations">

            <h5>Adelaide Campus</h5>

            <div className="mobile">
              <i className='fa-solid fa-mobile'></i>
              <span>+61 492 938 782 </span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>sso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span> englishsso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>   Suite 1,Level 2 66-68 Grenfell <br /> Street Adelaide SA 5000 Australia</span>
            </div>

          </div>

          <div className="locations">

            <h5>MELBOURNE CAMPUS</h5>

            <div className="mobile">
              <i className='fa-solid fa-mobile'></i>
              <span>+61 4426 254 486</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>sso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span> englishsso@nortwest.edu.au</span>
            </div>

            <div className="mobile">
              <i className='fa-solid fa-envelop'></i>
              <span>Level 9, 108 Lonsdale st, <br /> Melbourne VIC</span>
            </div>

          </div>

        </div>

        <div className="footer_2">

          <div className="about" >

            <h4>About</h4>
            <p>Nortwest College has been Australia’s premier provider of education to overseas students since 2007. We have students from all over the world studying with us and experiencing life, study, and work in Australia with our support.</p>
          </div>

          <div className="about">

            <h4>Usefull Links</h4>
            <ul>
              <li>All Courses</li>
              <li>Downloads</li>
              <li>Student Forms</li>
              <li>Calendar</li>
              <li>Faq</li>
              <li>Agent Application</li>
              <li>Policies & Procedures</li>
              <li>Brochure</li>
            </ul>

          </div>

          <div className="about">
            <h4>Support</h4>
            <ul>
              <li>Documentation</li>
              <li>Forums</li>
              <li>Language Packs</li>
              <li>Release Statusr</li>
              <li>Faq</li>
              <li>LearnPress</li>
              <li>Feedback</li>
              <li>Forums</li>
            </ul>
          </div>

          <div className="about">
            <h4>Affiliation</h4>
            <div className="affiliation_img">

              <div className="footer_affiliation">
                <img src="https://website.nortwest.edu.au/assets/img/velg-logo.png" alt="" />
              </div>

              <div className="footer_affiliation">
                <img src="https://website.nortwest.edu.au/assets/img/NRT_logo-1.jpg" alt="" />
              </div>

              <div className="footer_affiliation">
                <img src="https://website.nortwest.edu.au/assets/img/Australian_Qualifications_Framework_(logo).png" alt="" />
              </div>

            </div>

          </div>

        </div>

        <div className="footer_bottom container">
          <p>© Nortwest Pty Ltd, ABN 17 123 969 175, CRICOS 03256G, RTO ID 91781 trading as City Institute All rights reserved <span style={{ color: 'yellow' }}> Powered by HL Group</span> </p>
          <div className="footer_icons">
            <a href="https://www.facebook.com/nortwestedu/" target='_blank'> <i class="fa-brands fa-square-facebook"></i></a>
            <a href="https://www.instagram.com/nortwesteducation/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

      </footer>

    </div>
  )
}
