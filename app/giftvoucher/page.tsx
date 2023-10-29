'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import HeadSection from '../head'


// Logo
import logo from '../../assets/images/l.png'
import logoW from '../../assets/images/l_w.png'
import singleVoucher from '../../assets/images/gift/singleVoucher.png'
import coupleVoucher from '../../assets/images/gift/coupleVoucher.png'
import familyVoucher from '../../assets/images/gift/familyVoucher.png'


// Service Section
import service1 from '../../assets/images/Product/6/5 1.png'
import service2 from '../../assets/images/Product/6/6 1.png'
import service3 from '../../assets/images/Product/6/iStock-1419784151 1.png'

// Footer Image
import { ChangeEvent, useRef, useState } from 'react'
import { useOnScreen } from '../isOnScreen'
 


// Home Page
export default function HomePage() {

  const [mobileNav, setMobileNav] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const [fileMetadata, setFileMetadata] = useState<Object[]>([])
  const [fileContents, setFileContents] = useState<string[]>([]);

  const [submitted, setSubmitted] = useState(false);

  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [test, setTest] = useState<File>()

  const scrollRef = useRef([]);
  const pushRef = (e: never) => scrollRef.current.push(e)

  const isOnScreen = useOnScreen(scrollRef);

  return (
    <>

      <HeadSection />

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
            <nav className={mobileNav ? "navbar navbar-expand-xl navbar-dark  p-4" : "navbar navbar-expand-xl navbar-dark p-4"} style={mobileNav ? {backgroundColor: '#993A25'} : {backgroundColor: ''}}>
            <a className="navbar-brand" href="#">
              <Image src={logo} width={69} height={69} className={styles.topLogo} alt=""></Image>
            </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => mobileNav ? setMobileNav(false) : setMobileNav(true)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                              <a href="/home" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Home</h1></a>
                            </li>
                            <li className="nav-item">
                              <a href="/gallery" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Gallery</h1></a>
                            </li>
                            <li className="nav-item">
                              <a href="/book" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Book Now</h1></a>
                            </li>
                            <li className="nav-item">
                              <a href="/giftvoucher" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-5 pb-5'>Gift Card</h1></a>
                            </li>
                            <li className="nav-item">
                              <a href="/contactus" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Contact Us</h1></a>
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
                <a className="navbar-brand" href="#">
                <Image src={logoW} width={69} height={69} className="d-inline-block align-top mt-4" alt=""></Image>
                </a>
                
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className='nav-link active text-white font-weight-bold m-4 pt-4' aria-current='page'>Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="/gallery" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Gallery</a>
                    </li>
                    <li className="nav-item">
                      <a href="/book" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Book Now</a>
                    </li>
                    <li className="nav-item">
                      <a href="/giftvoucher" className='nav-link text-white font-weight-bold m-4 pt-4' aria-current='page'>Gift Voucher</a>
                    </li>
                </ul>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item mx-2">
                            <a href='/contactus'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; </button></a>
                          </li>
                          <li className="nav-item">
                            <a href='/book'><button type='button' className={styles.contactUsButton}>Book Now</button></a>
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
            <div className='col-md'>
            <div className={styles.titleSection}>
          <h1 className={styles.titleTitleText}>Gift Voucher</h1>          
        </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
        
        {/* Title Section - End */}

        {/*  */}

      </div>

      {/* Single - Start */}
      <div className={styles.weldingBg} ref={pushRef}>
        <div className='container'>
          <div className='row pt-5 pb-5'>
            <div className='col-lg-6'>
              <Image src={singleVoucher} width={475} height={280} className={styles.sectionImage} alt=""></Image>
            </div>
            <div className='col-lg-6'>
              <div >
                  <h1 className={styles.servicesTitle}>Single</h1>
                  <p className={styles.servicesText}><br/>Experience the thrill of water biking with our single rental option! Our premium water bikes, designed for stability and ease of use, provide an exhilarating aquatic cycling adventure.<br/><br/> Equipped with safety gear and a detailed operational briefing, this rental is perfect for solo explorers seeking a unique and memorable outing.<br/><br/></p>
                  <a href='https://buy.stripe.com/test_bIYbMmgSlbrhd44eUU'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single - End */}

      {/* Couple - Start */}
      <div className={styles.weldingBg} ref={pushRef}>
        <div className='container'>
          <div className='row pt-5 pb-5'>
          <div className='col-lg-6'>
              <div >
                  <h1 className={styles.servicesTitle}>Couple</h1>
                  <p className={styles.servicesText}><br/>Discover the romance of our couple water biking rental! Glide across the water&apos;s surface on our premium water bikes, designed for stability and an intimate aquatic adventure.<br/><br/> Each rental includes safety gear and a detailed operational briefing, tailored for couples seeking a unique shared experience.<br/><br/></p>
                  <a href='https://buy.stripe.com/test_7sI3fQ6dH1QHaVWeUV'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
              </div>
            </div>
            <div className='col-lg-6'>
              <Image src={coupleVoucher} width={475} height={280} className={styles.sectionImage} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Couple - End */}

      {/* Family - Start */}
      <div className={styles.weldingBg} ref={pushRef}>
        <div className='container'>
          <div className='row pt-5 pb-5'>
            <div className='col-lg-6'>
              <Image src={familyVoucher} width={475} height={280} className={styles.sectionImage} alt=""></Image>
            </div>
            <div className='col-lg-6'>
              <div >
                  <h1 className={styles.servicesTitle}>Family</h1>
                  <p className={styles.servicesText}><br/>Experience the joy of our family water biking rental! Ride our premium water bikes, crafted for stability and excitement on the water, creating an ideal adventure for all ages.<br/><br/> Each rental package includes safety gear and a comprehensive operational briefing, perfect for families seeking an extraordinary shared outing.<br/><br/></p>
                  <a href='https://buy.stripe.com/test_5kA17I59D0MDfcc4gi'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Family - End */}

      {/* footer - Start */}
      <div className={styles.footerSection}>
        <div className='container pt-3'>
          <div className='row  text-center'>
            <div className='col-md'>
              <div className='row'>
                <div className='col-md-5'>
                  <Image src={logoW} width={69} height={69} alt='approved-industries'/>
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
                <div className='col-md'>
                  <p className={styles.cr}>Links</p>
                  <a href='/' style={{textDecoration: 'none'}}><p className={styles.crs}>Home</p></a>
                  <a href='/gallery' style={{textDecoration: 'none'}}><p className={styles.crs}>Gallery</p></a>
                  <a href='/book' style={{textDecoration: 'none'}}><p className={styles.crs}>Book Now</p></a>
                  <a href='/giftvoucher' style={{textDecoration: 'none'}}><p className={styles.crs}>Gift Voucher</p></a>
                </div>
                <div className='col-md'>
                  <p className={styles.cr}>Contact Us</p>
                  <a href='/' style={{textDecoration: 'none'}}><p className={styles.crs}>Contact Us</p></a>
                </div>
                <div className='col-md'>
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