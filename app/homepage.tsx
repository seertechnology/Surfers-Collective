'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

// Logo
import logo from '../assets/images/logo.png'
import logoW from '../assets/images/logo.png'

// Vectors
import vector from '../assets/images/Vector_w.png'
import number1 from '../assets/images/embark/01img.png'
import number2 from '../assets/images/embark/02img.png'
import number3 from '../assets/images/embark/03img.png'

import forgeCombined from '../assets/images/infoImgCombined.png'

// Footer Image
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useOnScreen } from './isOnScreen'
import Link from 'next/link'
import Footer from './footer'
import BookModule from './bookModule'
import ContactModule from './contactModule'
 


// Home Page
export default function HomePage() {

  const [mobileNav, setMobileNav] = useState(false);

  const scrollRef = useRef([]);
  const pushRef = (e: never) => scrollRef.current.push(e)

  const isOnScreen = useOnScreen(scrollRef);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <main className={styles.main}>

      {/* background image */}
      {/* hero section */}
        <div className={styles.background} style={mobileNav ? {background: "none", height: "0px"} : {}}>
        {/* Navbar Section - Start */}

          {/* Mobile Menu - Start */}
        <div className={styles.mobileNav}>
        <div className={styles.navbarSection}>
          {/* <div className='container'> */}
            <nav className={mobileNav ? "navbar navbar-expand-xl navbar-dark  p-4" : "navbar navbar-expand-xl navbar-dark p-4"} style={mobileNav ? {backgroundColor: '#A0BDC3', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', height: '100vh', padding: '10px 35px 0 25px'} : {backgroundColor: ''}}>
            <Link className="navbar-brand" href="#">
              <Image src={logo} width={109} height={40} className={styles.topLogo} alt=""></Image>
            </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => mobileNav ? setMobileNav(false) : setMobileNav(true)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                              <Link href="/" className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Home</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/about" className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>About</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/gallery" className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Gallery</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/book"className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Book Now</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/giftvoucher" className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Gift Card</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/contactus" className={`nav-link active text-white font-weight-bold ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1'>Contact Us</h1></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
              </div>
            </div>
          {/* Mobile Menu - End */}

            <div id="containers" style={mobileNav ? {display: "none"} : {}}>
              <div className='container'>
              {/* nav */}

          
              
            {/* Desktop Nav - Start */}
              <div className='row'>
                <div className={styles.desktopNav}>
                <div className={styles.navbarSection}>
                  <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" href="#">
                    <Image src={logo} width={109} height={40} className="d-inline-block align-top mt-4" alt=""></Image>
                    </Link>
                    
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link href="/about" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>About</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/gallery" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Gallery</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/book" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Book Now</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/giftvoucher" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${styles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Gift Voucher</Link>
                        </li>
                    </ul>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto">
                              <li className="nav-item mx-2">
                                <Link data-bs-toggle="modal" data-bs-target="#contactModule" href='/contactus'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; &#160;</button></Link>
                              </li>
                              <li className="nav-item">
                                <Link data-bs-toggle="modal" data-bs-target="#bookModule" href='/book'><button type='button' className={styles.contactUsButton}>Book Now</button></Link>
                              </li>
                          </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            {/* Desktop Nav - End */}

          {/* Navbar Section - End */}

          {/* Title Section - Start */}

              <div className='row'>
                <div className='col-lg'>
                <div className={styles.titleSection}>
                  <h1 className={styles.titleTitleText}>San Francisco&apos;s<br/> ultimate way<br/> to catch the<br/> best waves in<br/> the bay.</h1>
                  <p className={styles.titleSubText}>Picture yourself and your friends cruising through the stunning waters of San Francisco on our innovative, eco-friendly Schiller water bikes. Choose between a half-day or full-day adventure, where you can explore hidden coves, soak in the vibrant sights, and dive into the refreshing bay. Imagine discovering a secluded beach, where you can relax and enjoy a picnic while soaking up the sun.</p>
                  {/* Button Section */}
                <div>
                  <Link data-bs-toggle="modal" data-bs-target="#bookModule" href='#contactUs'><button type='button' className={styles.contactUsButton}>Book Now</button></Link>
                  <Link data-bs-toggle="modal" data-bs-target="#contactModule" href='/services'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; <Image src={vector} width={8} height={12} alt='right-arrow'/></button></Link>
                </div>
              </div>
            </div>
          </div>
              </div>
            </div>
          
          {/* Title Section - End */}

          {/*  */}

        </div>
        <div id="containers" style={mobileNav ? {display: "none"} : {}}>

      
        {/* first section "forging connections..." */}
        <div className={styles.forgeSection}>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h2 className={styles.forgeTitle}>Start your adventure with our exceptional Surfboard Rentals!</h2>
                <div className={styles.forgeBox}></div>
                <p className={styles.forgeSubTitle}>Dream getaways are just a click away. Discover your piece of paradise and reserve your surfboard rental for an amazing adventure!</p>
                <div className='row'>
                <div id="container"  ref={pushRef} className={isOnScreen.includes("container") ? 'container animate__animated animate__fadeIn' : 'container animate__animated animate__fadeOut'}>
                  <div className={styles.forgeBox}>
                    <div className='row'>
                      {/* Industry Expertise */}
                      <div className='col-md-1'>
                        <Image src={number1} width={130} height={110} style={{marginTop: "-25px"}} alt="number-1"/>
                      </div>
                      <div className='col-md pt-2'>
                        <h5 className={styles.forgeBoxTitle}>Top Choice</h5>
                        <p className={styles.forgeBoxText}>Customer comfort and satisfaction are our top priorities. That’s why we select only the finest spots in San Francisco.</p>
                      </div>

                      {/* Flexibility and Accessibility */}
                      <div className='col-md-1'> 
                          <Image src={number2} width={140} height={120} style={{marginTop: "-25px"}} alt='number-2'/>
                      </div>
                      <div className='col-md pt-2'>
                        <h5 className={styles.forgeBoxTitle}>Competitive Price</h5>
                        <p className={styles.forgeBoxText}>We offer great prices while ensuring top-notch quality and service, delivering the best surfboard experience in the bay area.</p>
                      </div>
                      </div>
                      <div className={styles.forgeBox}>
                        <div className='row pt-4'>
                          {/* Skilled Craftsmanship */}
                          <div className='col-md-1'> 
                              <Image src={number3} width={80} height={110} style={{marginTop: "-25px"}} alt='number-3'/>
                          </div>
                          <div className='col-md pt-2'>
                            <h5 className={styles.forgeBoxTitle}>Refund and Reschedule</h5>
                            <p className={styles.forgeBoxText}>If you run into any problems, don’t stress—we’re dedicated to making sure you have an amazing experience, every step of the way.</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className='col-md'>
                <Image src={forgeCombined} width={536} height={639} className={styles.forgeImage} alt='forge-combined-images'/>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {/* Book Module */}
        <BookModule />

        {/* Contact Module */}
        <ContactModule />

      </div>
    </main>
    </>
  )
}