'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'

// Logo
import logo from '../../assets/images/l_w.png'

//services images
import cover from '../../assets/images/services-page/cutting-metal-with-plasma-equipment 1.png'
import serviceImage1 from '../../assets/images/services-page/8 1.png'
import serviceImage2 from '../../assets/images/services-page/9 1.png'
import serviceImage3 from '../../assets/images/services-page/Services Feature.png'

// Partners Images
import partner1 from '../../assets/images/Logos/Unknown-e.png'
import partner2 from '../../assets/images/Logos/jjs_waste_final_web_rgb1-e.png'
import partner3 from '../../assets/images/Logos/Astral Steel-bw 1.png'
import partner4 from '../../assets/images/Logos/Logo-40-e.png'
import partner5 from '../../assets/images/Logos/customcolor_logo_transparent_background-1-e.png'

// Footer Image
import approvedIndustries from '../../assets/images/Transparent Logo 2.png'
import HeadSection from '../head'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { useOnScreen } from '../isOnScreen'


// Home Page
export default function OurServices() {
  const [mobileNav, setMobileNav] = useState(false);


  const scrollRef = useRef([]);
  const pushRef = (e: never) => scrollRef.current.push(e)

  const isOnScreen = useOnScreen(scrollRef);

  console.log({isOnScreen});
  
  
  return (
    
    <>
      <HeadSection />
    <div className=''>

    <main className={styles.main}>

      {/* background image */}
      {/* hero section */}


      <div className={styles.background}>


      {/* mobile menu */}
      <div className={styles.mobileNav}>
        <div className={styles.navbarSection}>
          <nav className={mobileNav ? "navbar navbar-expand-lg navbar-dark bg-dark p-4" : "navbar navbar-expand-lg navbar-dark p-4"}>
          <Link className="navbar-brand" href="#">
            <Image src={logo} width={233.76} height={64.11} className={styles.topLogo} alt=""></Image>
          </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => mobileNav ? setMobileNav(false) : setMobileNav(true)}>
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto text-center">
                          <li className="nav-item">
                            <Link href="/" className='nav-link active text-white font-weight-bold' aria-current='page'>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/#contactUs" className='nav-link active text-white font-weight-bold' aria-current='page'>Contact Us</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
            </div>
          </div>

        {/* navbar start */}
      <div className='container'>
        <div className='row'>
        <div className={styles.desktopNav}>
              <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" href="#">
                <Image src={logo} width={233.76} height={64.11} className="d-inline-block align-top mt-4" alt=""></Image>
                </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                            <Link href="/" className='nav-link active text-black font-weight-bold' aria-current='page'>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/#contactUs" className='nav-link active text-black font-weight-bold' aria-current='page'>Contact Us</Link>
                          </li>
                      </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        {/* navbar end */}
        {/* Title Section - Start */}
          <div>
            <div className={styles.titleSection}>
              <h1 className={styles.titleTitleText}>Our Services</h1>
              <p className={styles.titleSubText}>We offer a complete line of welding services along with general labour and repairs necessary for industrial and domestic jobs.</p>
              {/* Button Section */}
            </div>
          </div>
        {/* Title Section - End */}

        {/*  */}

      </div>

      {/* Welding - Start */}
        <div className={styles.weldingBg} ref={pushRef}>
            <div className='d-flex justify-content-end'>
                <div className={styles.servicesRightSection}>
                    <h1 className={styles.servicesRightTitle}>On-site and Mobile Welding</h1>
                    <p className={styles.servicesRightText}>Onsite welding and mobile welding are two versatile and crucial services within the welding industry. <br/><br/>Onsite welding involves performing welding operations directly at the location where the work is needed, eliminating the need to transport large structures or equipment to a separate welding facility. <br/><br/>This convenience is particularly valuable for projects involving heavy machinery, infrastructure repairs, or construction sites.</p>
              </div>
            </div>
        </div>
      {/* Welding - End */}

      {/* Construction - Start */}
        <div className={styles.constructionBg}>
          <div id="construction"  ref={pushRef} className={isOnScreen.includes("construction") ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
              <div className='d-flex'>
                  <div className={styles.servicesLeftSection}>
                      <h1 className={styles.servicesLeftTitle}>Construction Welding</h1>
                      <p className={styles.servicesLeftText}>Construction welding is a vital and widespread process used across numerous industries to join metals and alloys together. <br/><br/>This versatile technique involves melting the edges of two or more metal components and fusing them together to create a strong and durable bond. <br/><br/>Skilled welders, equipped with specialised tools and safety gear, meticulously control the welding process to ensure precision and structural integrity.</p>
                  </div>
              </div>
        </div>
      </div>

      {/* Construction - End */}

      {/* Posts - Start */}
      <div className=''>
        <div className={styles.postsBg}>
          <div id="posts"  ref={pushRef} className={isOnScreen.includes("posts") ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
              <div className='d-flex justify-content-end'>
                  <div className={styles.servicesRightSection}>
                      <h1 className={styles.servicesRightTitle}>Posts and Beams</h1>
                      <p className={styles.servicesRightText}>Posts and panels are fundamental components in construction and structural engineering, playing crucial roles in providing support, stability, and aesthetic appeal to various structures. <br/><br/>Beams are horizontal or inclined load-bearing members that distribute the weight of the building or structure to its supporting columns or walls. <br/><br/>They are typically made of materials like wood, steel, or reinforced concrete and come in various shapes, such as I-beams, H-beams, and box beams.</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
      {/* Posts End */}

      {/* Other Services - Start */}
      <div className={styles.includeBg}>
        <div className='row'>
          <div id="includes"  ref={pushRef} className={isOnScreen.includes("includes") ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
            <h3 className={styles.includeTitle}>Our Services Include</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-md text-center'>
                  <p className={styles.includeText}>Mobile welding for building supports</p>
                  <p className={styles.includeText}>Universal beams (U.B)</p>
                  <p className={styles.includeText}>Parallel flange channels (PFC)</p>
                </div>
                <div className='col-md text-center'>
                  <p className={styles.includeText}>Beam support posts (SHS or RHS)</p>
                  <p className={styles.includeText}>Stub posts (SHS or RHS)</p>
                  <p className={styles.includeText}>Cleats</p>
                </div>
                <div className='col-md text-center'>
                  <p className={styles.includeText}>Splay cut beams</p>
                  <p className={styles.includeText}>Excess beam removal</p>
                  <p className={styles.includeText}>Support angle</p>
                  <p className={styles.includeText}>Flange plate (PFC+FL)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      {/* Other Services - End */}

      {/* fourth section "Trusted by some of..." - Start */}
      <div className={styles.partnerSection}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <p className={styles.trustedText}>TRUSTED BY SOME OF SYDNEY’S LEADING CONSTRUCTION COMPANIES</p>
            </div>
            <div className='col-md'>
              {/* Partner Logos */}
              <Image src={partner1} width={115} height={115} className={styles.partnerLogo} alt='partner-logo-1'/>
              <Image src={partner2} width={99} height={56} className={styles.partnerLogo} alt='partner-logo-2'/>
              <Image src={partner3} width={156} height={48} className={styles.partnerLogo} alt='partner-logo-3'/>
              <Image src={partner4} width={174} height={49} className={styles.partnerLogo} alt='partner-logo-4'/>
              <Image src={partner5} width={157} height={91} className={styles.partnerLogo} alt='partner-logo-5'/>

            </div>
          </div>
        </div>
      </div>
      {/* fourth section "Trusted by some of..." - End */}

      {/* footer - Start */}
      <div className={styles.footerSection}>
        <div className='container'>
          <div className='row d-flex align-items-center text-center'>
            <div className='col'>
              <div className='row'>
                <div className='col-md-4'>
                  <p className={styles.approvedIndustriesText}>PART OF THE APPROVED INDUSTRIES COMPANY</p>
                </div>
                <div className='col-md-2'>
                  <Image src={approvedIndustries} width={200} height={122.44} alt='approved-industries-logo'/>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <p className={styles.cr}>COPYRIGHT 2023</p>
            </div>
            <div className='col-md'>
              <p className={styles.tnc}>TERMS AND CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer - End */}

    </main>
    </div>
    </>
  )
}