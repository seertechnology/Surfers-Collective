'use client'

import Image from 'next/image'
import styles from './page.module.css'
import mainStyles from '../page.module.css'
import Head from 'next/head'
import Link from 'next/link'

//Components
import HeadSection from '../head'
import GiftFeature from './giftFeature'

// Logo
import logo from '../../assets/images/logo.png'
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
import Footer from '../footer'
import ContactModule from '../contactModule'
import BookModule from '../bookModule'
 


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
    <div className='animate__animated animate__fadeIn'>

      <HeadSection />

    <main className={styles.main}>

      {/* background image */}
      {/* hero section */}
      <div className={styles.background}>
        {/* navbar start */}
        
        {/* navbar end */}
        {/* Title Section - Start */}

        {/* Navbar Section - Start */}
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
                              <Link href="/" className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Home</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/about" className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>About</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/gallery" className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Gallery</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/book"className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Book Now</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/giftvoucher" className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1 pb-5'>Gift Card</h1></Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/contactus" className={`nav-link active text-white font-weight-bold ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'><h1 className='pt-1'>Contact Us</h1></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
              </div>
            </div>
          {/* end mobile menu */}

        <div id="containers" style={mobileNav ? {display: "none"} : {}}>
          <div className='container'>
            {/* nav */}      
            
          {/* nav */}
            <div className='row'>
              <div className={styles.desktopNav}>
              <div className={styles.navbarSection}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <Link className="navbar-brand" href="/">
                  <Image src={logo} width={109} height={40} className="d-inline-block align-top mt-4" alt=""></Image>
                  </Link>
                  
                  <ul className="navbar-nav ms-auto">
                      {/* <li className="nav-item">
                        <Link href="/" className='nav-link active text-white font-weight-bold m-4 pt-4' aria-current='page'>Home</Link>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/about" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>About</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/gallery" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${mainStyles.navlinks}`}style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/book" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Book Now</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/giftvoucher" className={`nav-link active text-white font-weight-bold m-4 pt-4 ${mainStyles.navlinks}`} style={{color: '#EFFDFF', opacity: '0.6'}} aria-current='page'>Gift Voucher</Link>
                      </li>
                  </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                              <Link data-bs-toggle="modal" data-bs-target="#contactModule" href='/contactus'><button type='button' className={styles.viewServicesButton}>Contact Us &#160; </button></Link>
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
            <div className='row'>
              <div className='col-md'>
              <div className={styles.titleSection}>
            <h1 className={styles.titleTitleText}>Gift Voucher</h1>          
          </div>
              </div>
              <div className='col'></div>
            </div>
          </div>
        </div>
        
        {/* Title Section - End */}

        {/*  */}

      </div>
      <div id="containers" style={mobileNav ? {display: "none"} : {}}>
      <div>
      <GiftFeature />

      <Footer />

      {/* Book Module */}
      <BookModule />

      {/* Contact Module */}
      <ContactModule />

      </div>
      </div>
    </main>
    </div>
  )
}