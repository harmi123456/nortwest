import React from 'react'
import Header from './Header'

export default function Courses() {
  return (

    <div>

      <Header />

      <div className="c_sec1 d-flex align-items-center justify-content-center">
        <h1>COURSES</h1>
        <hr style={{ color: 'white', height: '2px', width: '8%', position: 'relative', top: '-10px' }} />

        <div className="home_icon">
          <i class="fa-solid fa-house-chimney"></i>
          <h5>HOME</h5>
          <div className="round"></div>
          <h5 style={{ color: 'rgb(252, 188, 68)' }}>COURSES</h5>
        </div>

      </div>


      <div className="c_sec2">

        <center>
          <h1 className='mt-5'>Courses</h1>
          <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
          <p>Explore Our Diverse Range of Courses Across Various Fields. Find the Perfect Program to Enhance Your Skills and <br /> Career Path.</p>
        </center>

        <div className="feature container d-flex align-items-center justify-content-evenly ">

          <div className="bussiness">
            <img src="/img/project-management.png" alt="" />
            <h6>Project Management</h6>
          </div>

          <div className="bussiness">
            <img src="/img/business.png" alt="" />
            <h6>Bussiness</h6>
          </div>

          <div className="bussiness">
            <img src="/img/team-leader.png" alt="" />
            <h6>Leadership & Management</h6>
          </div>

          <div className="bussiness">
            <img src="/img/translation.png" alt="" />
            <h6>English</h6>
          </div>

          <div className="bussiness">
            <img src="/img/technical-support.png" alt="" />
            <h6>Information Technology</h6>
            <p>(Cyber security & <br /> telecomunications)</p>
          </div>

          <div className="bussiness">
            <img src="/img/management.png" alt="" />
            <h6>Graduate Diploma of <br /> Management (Learning) </h6>
          </div>

          <div className="bussiness">
            <img src="/img/chef.png" alt="" />
            <h6>Cookery & Hospitality</h6>
          </div>

          <div className="bussiness">
            <img src="/img/construction.png" alt="" />
            <h6>Building & Construction</h6>
          </div>

        </div>

        <div className="current container">
          <a href="#">
            <button>
              Superseded Courses Under Transition - Current Students Only
            </button>
          </a>
        </div>

        <div className="enroll container mt-4">
          <img src="/img/click to enroll.png" alt="" />
        </div>

      </div>


      <div className="c_sec3 container-fluid mt-5">

        <div className="rpl">
          <h2>RECOGNITION OF PRIOR LEARNING (RPL)& <br /> CREDIT TRANSFERS</h2>
          <p className='ms-5 mt-4'>RPL & Credit Transfers is an assessment process that allows for recognisation of competencies <br /> currently held, regardless of how, when or where the learning occurred. RPL assesses the <br /> individual’s prior learning to determine the extent to which that individual is currently competent <br /> against the required learning outcomes, competency outcomes, or standards for entry to, and/or <br /> partial or total completion of a qualification.</p>
        </div>

        <div className="rpl_img">
          <img src="/img/CreditRecognition.png" alt="" />
        </div>

      </div>


      <div className="c_sec4">
        <center>
          <h1 className='mt-5'>Policies & Procedures</h1>
          <hr style={{ width: '60px', height: '4px', color: 'rgb(252, 188, 68)' }} />
          <p>Please check here for a full version of our policies and procedures.</p>
          <div className="read">
            <a href="">
              <button>
                READ ALL POLICIES
              </button>
            </a>
          </div>
        </center>
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
