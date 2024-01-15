'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

// Logo
import logo from '../assets/images/l.png'
import logoW from '../assets/images/l_w.png'

// Vectors
import vector from '../assets/images/Vector_w.png'
import number1 from '../assets/images/embark/01img.png'
import number2 from '../assets/images/embark/02img.png'
import number3 from '../assets/images/embark/03img.png'

import forgeCombined from '../assets/images/infoImageCombined.png'

// Footer Image
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useOnScreen } from './isOnScreen'
import Link from 'next/link'
 


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
      <div className={styles.background}>
        {/* navbar start */}
        
        {/* navbar end */}
        {/* Title Section - Start */}


        {/* mobile menu */}
        <div className={styles.mobileNav}>
        <div className={styles.navbarSection}>
          {/* <div className='container'> */}
            <nav className={mobileNav ? "navbar navbar-expand-xl navbar-dark  p-4" : "navbar navbar-expand-xl navbar-dark p-4"} style={mobileNav ? {backgroundColor: '#116C89'} : {backgroundColor: ''}}>
            <Link className="navbar-brand" href="#">
              <Image src={mobileNav ? logoW : logo} width={130} height={130} className={styles.topLogo} alt=""></Image>
            </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => mobileNav ? setMobileNav(false) : setMobileNav(true)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                              <Link href="/" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Home</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/about" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>About</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/gallery" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Gallery</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/book" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Book Now</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/giftvoucher" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-5 pb-5'>Gift Card</h1></Link>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </nav>
              </div>
            </div>
          {/* end mobile menu */}

        
        <div className='container'>
          {/* nav */}

      
          
        {/* nav */}
          <div className='row'>
            <div className={styles.desktopNav}>
            <div className={styles.navbarSection}>
              <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" href="#">
                <Image src={logo} width={130} height={130} className="d-inline-block align-top mt-4" alt=""></Image>
                </Link>
                
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" className='nav-link active text-white font-weight-bold m-4 pt-4' aria-current='page'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className='nav-link active text-white font-weight-bold m-4 pt-4' aria-current='page'>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/gallery" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/book" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Book Now</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/giftvoucher" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Gift Voucher</Link>
                    </li>
                </ul>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item mx-2">
                            <Link href='/contactus'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; </button></Link>
                          </li>
                          <li className="nav-item">
                            <Link href='/book'><button type='button' className={styles.contactUsButton}>Book Now</button></Link>
                          </li>
                      </ul>
                  </div>
                </nav>
              </div>
            </div>
            {/* <div className='col'> */}
            {/* <Image src={logo} width={233.76} height={64.11} alt='logo'/> */}

            {/* </div> */}
            {/* <div className='col-7'> */}
              
            {/* </div> */}
          </div>
          <div className='row'>
            <div className='col-lg'>
            <div className={styles.titleSection}>
              <h1 className={styles.titleTitleText}>Sydney&apos;s<br/> newest and<br/> easiest way to<br/> get out on the<br/> water.</h1>
              <p className={styles.titleSubText}>Picture yourself and loved ones riding around Sydney&apos;s glorious waterways on one of our state-of-the-art eco-friendly Schiller water bikes. Spend a half or full day exploring, swimming, sightseeing, searching for that picture perfect deserted beach to pull up on for a picnic. An unforgettable experience creating memories that will last a lifetime.</p>
              {/* Button Section */}
            <div>
              <Link href='#contactUs'><button type='button' className={styles.contactUsButton}>Book Now</button></Link>
              <Link href='/services'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; <Image src={vector} width={8} height={12} alt='right-arrow'/></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        {/* Title Section - End */}

        {/*  */}

      </div>
      {/* first section "forging connections..." */}
      <div className={styles.forgeSection}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className={styles.forgeTitle}>Embark on unforgettable journeys with our Water Biking Rentals</h2>
              <div className={styles.forgeBox}></div>
              <p className={styles.forgeSubTitle}>Picture-perfect getaways are just a click away. Find your slice of paradise, and book your water bike rental for an incredible experience.</p>
              <div className='row'>
              <div id="container"  ref={pushRef} className={isOnScreen.includes("container") ? 'container animate__animated animate__fadeIn' : 'container animate__animated animate__fadeOut'}>
                <div className={styles.forgeBox}>
                  <div className='row'>
                    {/* Industry Expertise */}
                    <div className='col-md-1'>
                      <Image src={number1} width={130} height={110} alt="number-1"/>
                    </div>
                    <div className='col-md pt-2'>
                      <h5 className={styles.forgeBoxTitle}>Best Choice</h5>
                      <p className={styles.forgeBoxText}>We always prioritise our customer comfort and satisfaction. That’s why we only choose the best locations in Sydney.</p>
                    </div>

                    {/* Flexibility and Accessibility */}
                    <div className='col-md-1'> 
                        <Image src={number2} width={140} height={120} alt='number-2'/>
                    </div>
                    <div className='col-md pt-2'>
                      <h5 className={styles.forgeBoxTitle}>Competitive Price</h5>
                      <p className={styles.forgeBoxText}>We offer affordable prices but don’t compromise on quality or service. Offering you the best of water biking.</p>
                    </div>
                    </div>
                    <div className={styles.forgeBox}>
                      <div className='row'>
                        {/* Skilled Craftsmanship */}
                        <div className='col-md-1'> 
                            <Image src={number3} width={80} height={110} alt='number-3'/>
                        </div>
                        <div className='col-md pt-2'>
                          <h5 className={styles.forgeBoxTitle}>Refund and Reschedule</h5>
                          <p className={styles.forgeBoxText}>Don’t worry if suddenly you have a problem and want to reschedule or refund, you can get fully compensated (terms and conditions apply).</p>
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

      {/* footer - Start */}
      <div className={styles.footerSection}>
        <div className='container pt-3'>
          <div className='row  text-center'>
            <div className='col-md'>
              <div className='row'>
                <div className='col-md-5'>
                  <Image src={logoW} width={130} height={130} alt='swbr'/>
                </div>
              </div>
              <div className='row-md'>
                <div className='col-md-5'>
                  <p className='footer-text text-white'>Sydney Water Bike Rentals. Your gateway to a
water biking adventure.</p>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='row'>
                <div className='col-md py-3'>
                  <p className={styles.cr}>Links</p>
                  <Link href='/' style={{textDecoration: 'none'}}><p className={styles.crs}>Home</p></Link>
                  <Link href='/gallery' style={{textDecoration: 'none'}}><p className={styles.crs}>Gallery</p></Link>
                  <Link href='/book' style={{textDecoration: 'none'}}><p className={styles.crs}>Book Now</p></Link>
                  <Link href='/giftvoucher' style={{textDecoration: 'none'}}><p className={styles.crs}>Gift Voucher</p></Link>
                </div>
                <div className='col-md py-3'>
                  <p className={styles.cr}>Contact Us</p>
                  <Link href='/' style={{textDecoration: 'none'}}><p className={styles.crs}>Contact Us</p></Link>
                </div>
                <div className='col-md py-3'>
                  <p className={styles.cr}>Follow Us</p>
                  <p className={styles.crs}>Facebook</p>
                  <p className={styles.crs}>Instagram</p>
                  <p className={styles.crs}>Twitter</p>
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.hrl}/>
          <div className='row'>
            <div className='col-md  text-center'>
                    <p className={styles.crs}>2023 Sydney Water Bike Rentals. All right reserved.</p>
            </div>
            <div className='col-md'>
            </div>
            <div className='col-md'>
              <div className='row  text-center'>
                <div className='col-md'>
                  <p className={styles.crs}><u>Privacy Policy</u></p>
                </div>
                <div className='col-md'>
                  <p className={styles.crs}><u>Terms of Service</u></p>
                </div>
                <div className='col-md'>
                  <p className={styles.crs}><u>Cookies Settings</u></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer - End */}

    </main>
    </>
  )
}