'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import HeadSection from '../head'


// Logo
import logo from '../../assets/images/l.png'
import logoW from '../../assets/images/l_w.png'

//gallery images
import gallery1 from '../../assets/images/gallery/1.png'
import gallery2 from '../../assets/images/gallery/2.png'
import gallery3 from '../../assets/images/gallery/3.png'
import gallery4 from '../../assets/images/gallery/4.png'
import gallery5 from '../../assets/images/gallery/5.png'
import gallery6 from '../../assets/images/gallery/6.png'
import gallery7 from '../../assets/images/gallery/7.png'
import gallery8 from '../../assets/images/gallery/8.png'
import gallery9 from '../../assets/images/gallery/9.png'

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


        <div className={styles.mobileNav}>
        <div className={styles.navbarSection}>
          {/* <div className='container'> */}
            <nav className={mobileNav ? "navbar navbar-expand-xl navbar-dark  p-4" : "navbar navbar-expand-xl navbar-dark p-4"} style={mobileNav ? {backgroundColor: '#116C89'} : {backgroundColor: ''}}>
            <Link className="navbar-brand" href="#">
              <Image src={logo} width={130} height={130} className={styles.topLogo} alt=""></Image>
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
                              <Link href="/contactus" className='nav-link active text-white font-weight-bold' aria-current='page'><h1 className='pt-4 pb-5'>Contact Us</h1></Link>
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
              <div className='col-md'>
              <div className={styles.titleSection}>
            <h1 className={styles.titleTitleText}>Gallery</h1>          
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
        {/* second section "Our services..." */}
        <div className={styles.ourServicesContainer}>
          <div className='container hidden'>
            <div className='row pt-3 pb-3'>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 1 */}
                <Image src={gallery1} width={350} height={350} style={{borderRadius: '15px'}} alt='welders-welding-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 2 */}
                <Image src={gallery2} width={350} height={350} style={{borderRadius: '15px'}} alt='steel-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 3 */}
                <Image src={gallery3} width={350} height={350} style={{borderRadius: '15px'}} alt='residential-frame' id="service"/>
              </div>
            </div>
            <div className='row pt-3 pb-3'>
              <div className='col text-center'>
                {/* Image 1 */}
                <Image src={gallery4} width={350} height={350} style={{borderRadius: '15px'}} alt='welders-welding-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 2 */}
                <Image src={gallery5} width={350} height={350} style={{borderRadius: '15px'}} alt='steel-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 3 */}
                <Image src={gallery6} width={350} height={350} style={{borderRadius: '15px'}} alt='residential-frame' id="service"/>
              </div>
            </div>
            <div className='row pt-3 pb-3'>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 1 */}
                <Image src={gallery7} width={350} height={350} style={{borderRadius: '15px'}} alt='welders-welding-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 2 */}
                <Image src={gallery8} width={350} height={350} style={{borderRadius: '15px'}} alt='steel-beams' id="service"/>
              </div>
              <div className='col text-center pt-3 pb-3'>
                {/* Image 3 */}
                <Image src={gallery9} width={350} height={350} style={{borderRadius: '15px'}} alt='residential-frame' id="service"/>
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
                    <Image src={logoW} width={130} height={130} alt='approved-industries'/>
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
      </div>

    </main>
    </>
  )
}