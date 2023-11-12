'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useRef, useState } from 'react'

// Logo
import singleImage from '../../assets/images/Book/singleImage.png'
import coupleImage from '../../assets/images/Book/coupleImage.png'
import familyImage from '../../assets/images/Book/familyImage.png'


export default function BookFeature() {

  const [isMobile, setIsMobile] = useState(false)

  const scrollRef = useRef([]);
  const pushRef = (e: never) => scrollRef.current.push(e)

  useEffect(() => {
    function checkMobile() {
      window.innerWidth > 1000 ? setIsMobile(false) : setIsMobile(true)
    }
    window.addEventListener("resize", checkMobile)
    checkMobile();
    return() => window.removeEventListener("resize", checkMobile)

  }, [])

    return(
        <>
        { isMobile &&
          <>
          {/* Single - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-md-6'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Single</h1>
                  <Image src={singleImage} width={591} height={436} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Experience the thrill of water biking with our single rental option! Our premium water bikes, designed for stability and ease of use, provide an exhilarating aquatic cycling adventure.<br/><br/> Equipped with safety gear and a detailed operational briefing, this rental is perfect for solo explorers seeking a unique and memorable outing.<br/><br/></p>
                  <a href='https://www.picktime.com/c80a1779-c0f5-4957-86ce-1addfb902b99'><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                </div>
              </div>
            </div>
          </div>
          {/* Single - End */}

          {/* Couple - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-md-6'>
                <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Couple</h1>
                    <Image src={coupleImage} width={585} height={446} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      
                      <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Discover the romance of our couple water biking rental! Glide across the water&apos;s surface on our premium water bikes, designed for stability and an intimate aquatic adventure.<br/><br/> Each rental includes safety gear and a detailed operational briefing, tailored for couples seeking a unique shared experience.<br/><br/></p>
                      <a href='https://www.picktime.com/c80a1779-c0f5-4957-86ce-1addfb902b99'><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Couple - End */}

          {/* Family - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5  pb-5'>
                <div className='col-md-6'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Family</h1>
                  <Image src={familyImage} width={585} height={446} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Experience the joy of our family water biking rental! Ride our premium water bikes, crafted for stability and excitement on the water, creating an ideal adventure for all ages.<br/><br/> Each rental package includes safety gear and a comprehensive operational briefing, perfect for families seeking an extraordinary shared outing.<br/><br/></p>
                  <a href='https://www.picktime.com/c80a1779-c0f5-4957-86ce-1addfb902b99'><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                </div>
              </div>
            </div>
          </div>
          {/* Family - End */}
          </>
        }

        {
          !isMobile &&
          <>
          {/* Single - Start */}
            <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-md-6'>
                  <Image src={singleImage} width={591} height={436} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Single</h1>
                      <p className={styles.servicesText}><br/>Experience the thrill of water biking with our single rental option! Our premium water bikes, designed for stability and ease of use, provide an exhilarating aquatic cycling adventure.<br/><br/> Equipped with safety gear and a detailed operational briefing, this rental is perfect for solo explorers seeking a unique and memorable outing.<br/><br/></p>
                      <a href='https://www-31p.bookeo.com/bookeo/b_swdrfasdfa_start.html?ctlsrc2=AglzPbU2KwmHlv3F5OmwNOQEf6MKwtI8SbhzU%2Fm3Y5s%3D&src=02b'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
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
              <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Couple</h1>
                      <p className={styles.servicesText}><br/>Discover the romance of our couple water biking rental! Glide across the water&apos;s surface on our premium water bikes, designed for stability and an intimate aquatic adventure.<br/><br/> Each rental includes safety gear and a detailed operational briefing, tailored for couples seeking a unique shared experience.<br/><br/></p>
                      <a href='https://www-31p.bookeo.com/bookeo/b_swdrfasdfa_start.html?ctlsrc2=AglzPbU2KwmHlv3F5OmwNOQEf6MKwtI8SbhzU%2Fm3Y5s%3D&src=02b'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <Image src={coupleImage} width={585} height={436} className={styles.sectionImage} alt=""  style={{maxWidth: "100%"}}></Image>
                </div>
              </div>
            </div>
          </div>
          {/* Couple - End */}

          {/* Family - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5  pb-5'>
                <div className='col-md-6'>
                  <Image src={familyImage} width={585} height={446} className={styles.sectionImage} alt="" style={{maxWidth: "100%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Family</h1>
                      <p className={styles.servicesText}><br/>Experience the joy of our family water biking rental! Ride our premium water bikes, crafted for stability and excitement on the water, creating an ideal adventure for all ages.<br/><br/> Each rental package includes safety gear and a comprehensive operational briefing, perfect for families seeking an extraordinary shared outing.<br/><br/></p>
                      <a href='https://www-31p.bookeo.com/bookeo/b_swdrfasdfa_start.html?ctlsrc2=AglzPbU2KwmHlv3F5OmwNOQEf6MKwtI8SbhzU%2Fm3Y5s%3D&src=02b'><button type='button' className={styles.bookSectionButton}>Book Now</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Family - End */}
          </>
        }
      
        </>
    )

}