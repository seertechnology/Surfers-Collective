'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useRef, useState } from 'react'

// Logo
import singleVoucher from '../../assets/images/gift/singleVoucher.png'
import coupleVoucher from '../../assets/images/gift/coupleVoucher.png'
import familyVoucher from '../../assets/images/gift/familyVoucher.png'

import singleMobile from '../../assets/images/gift/singleMobile.png'
import coupleMobile from '../../assets/images/gift/coupleMobile.png'
import familyMobile from '../../assets/images/gift/familyMobile.png'


export default function GiftFeature() {

  const [isMobile, setIsMobile] = useState(false)

  const scrollRef = useRef([]);
  const pushRef = (e: never) => scrollRef.current.push(e)

  useEffect(() => {
    function checkMobile() {
      window.innerWidth > 1300 ? setIsMobile(false) : setIsMobile(true)
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
                <div className='col-xl-6 mx-auto'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Single</h1>
                  <Image src={singleMobile} width={279} height={201} className={styles.sectionImage} style={{margin: "auto", display: "block", maxWidth: "90%"}} alt=""></Image>
                </div>
                <div className='col-xl-6 text-center'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Treat someone special to an unforgettable surfing experience with our Solo Surfboard Rental gift card! The recipient will have the chance to ride the waves solo on a high-quality surfboard designed for stability and performance.<br/><br/>This gift card includes a complete rental package with essential safety gear and a thorough orientation, ensuring they feel confident and ready to embrace the ocean. It's the perfect gift for adventure seekers looking to explore the stunning waters of San Francisco!<br/><br/></p>
                  <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                </div>
              </div>
            </div>
          </div>
          {/* Single - End */}

          {/* Couple - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-xl-6'>
                <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Couple</h1>
                    <Image src={coupleMobile} width={279} height={200} className={styles.sectionImage} style={{margin: "auto", display: "block", maxWidth: "90%"}} alt=""></Image>
                </div>
                <div className='col-xl-6 text-center'>
                  <div >
                      <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Give the gift of shared adventure with our Couples' Surfboard Rental gift card! This perfect present allows a pair to enjoy a romantic and exhilarating surfing experience.<br/><br/>The gift card includes a premium surfboard rental for two, complete with essential safety gear and a personalized orientation to ensure a fun and safe outing. It’s an ideal way for couples to bond while riding the waves of San Francisco!<br/><br/></p>
                      <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
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
                <div className='col-xl-6'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Family</h1>
                  <Image src={familyMobile} width={279} height={201} className={styles.sectionImage} style={{margin: "auto", display: "block", maxWidth: "90%"}} alt=""></Image>
                </div>
                <div className='col-xl-6 text-center'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Surprise a family with a day of excitement and connection through our Family Surfboard Rental gift card! This thoughtful gift offers a complete experience, featuring premium surfboard rentals that are perfect for all ages.<br/><br/>Each gift card includes essential safety gear and a comprehensive orientation, ensuring a safe and enjoyable time on the waves. It’s the ideal way to create lasting memories and quality moments together in the beautiful waters of San Francisco!<br/><br/></p>
                  <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
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
                  <Image src={singleVoucher} width={549} height={446} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Single</h1>
                      <p className={styles.servicesText}><br/>Treat someone special to an unforgettable surfing experience with our Solo Surfboard Rental gift card! The recipient will have the chance to ride the waves solo on a high-quality surfboard designed for stability and performance.<br/><br/>This gift card includes a complete rental package with essential safety gear and a thorough orientation, ensuring they feel confident and ready to embrace the ocean. It's the perfect gift for adventure seekers looking to explore the stunning waters of San Francisco!<br/><br/></p>
                      <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
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
                      <p className={styles.servicesText}><br/>Give the gift of shared adventure with our Couples' Surfboard Rental gift card! This perfect present allows a pair to enjoy a romantic and exhilarating surfing experience.<br/><br/>The gift card includes a premium surfboard rental for two, complete with essential safety gear and a personalized orientation to ensure a fun and safe outing. It’s an ideal way for couples to bond while riding the waves of San Francisco!<br/><br/></p>
                      <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <Image src={coupleVoucher} width={616.12} height={378} className={styles.sectionImage} style={{margin: "auto", display:"block"}} alt=""></Image>
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
                  <Image src={familyVoucher} width={604} height={457} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Family</h1>
                      <p className={styles.servicesText}><br/>Surprise a family with a day of excitement and connection through our Family Surfboard Rental gift card! This thoughtful gift offers a complete experience, featuring premium surfboard rentals that are perfect for all ages.<br/><br/>Each gift card includes essential safety gear and a comprehensive orientation, ensuring a safe and enjoyable time on the waves. It’s the ideal way to create lasting memories and quality moments together in the beautiful waters of San Francisco!<br/><br/></p>
                      <a data-bs-toggle="modal" data-bs-target="#bookModule" ><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
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