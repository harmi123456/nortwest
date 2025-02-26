import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>

            <header>

                <div className="icons">

                    <div className="icon">
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>

                    <div className="helpline">
                        <i class="fa-solid fa-phone-flip"></i>
                        <p>Help Line: <b>+ 123 456 7890</b></p>
                    </div>

                </div>

                <div className="apply">
                    <button>Apply Now</button>
                </div>

            </header>


            <nav>

                <div className="nav">

                    <Link to='/' >HOME</Link>
                    <Link to='/courses'> COURSES </Link>
                    <Link>PRE ENROLLMENT</Link>

                    <div className="logo">
                        <img src="/img/logo.png" alt="" />
                    </div>

                    <select name="" id="">
                        <option value="">For Student</option>
                        <option value="">New Student Orientation</option>
                        <option value="">Downloads</option>
                        <option value="">Brouchure</option>
                    </select>
                    <Link>STUDENTS FORMS</Link>
                    <Link>CONTACT</Link>

                </div>


                <div className="nav1">

                    <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>

                    <div className="logo">
                        <img src="/img/logo.png" alt="" />
                    </div>


                    {/* Slide-Down Menu */}
                    <div className={`slide-menu ${menuOpen ? "show" : ""}`}>
                        <Link to="/">HOME</Link>
                        <Link to="/courses">COURSES</Link>
                        <Link>PRE ENROLLMENT</Link>

                        <select>
                            <option>For Student</option>
                            <option>New Student Orientation</option>
                            <option>Downloads</option>
                            <option>Brochure</option>
                        </select>

                        <Link>STUDENTS FORMS</Link>
                        <Link>CONTACT</Link>
                    </div>


                </div>

            </nav>
            
        </div>
    )
}
