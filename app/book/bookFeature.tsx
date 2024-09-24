'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useRef, useState } from 'react'

// Logo
import singleImage from '../../assets/images/Book/singleImage.png'
import coupleImage from '../../assets/images/Book/coupleImage.png'
import familyImage from '../../assets/images/Book/familyImage.png'

import singleMobile from '../../assets/images/Book/singleMobile.png'
import coupleMobile from '../../assets/images/Book/coupleMobile.png'
import familyMobile from '../../assets/images/Book/familyMobile.png'


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
                <div className='col-md-6 text-center'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Single</h1>
                  <Image src={singleMobile} width={279} height={200} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6 text-center'>
                  <p className={styles.servicesText} style={{textAlign:"center", opacity: '0.63'}}><br/>Unleash your inner surfer with our individual surfboard rental option! Our high-performance boards are designed for stability and ease, providing an exciting way to tackle the waves.<br/><br/> Each rental comes with essential safety gear and a thorough orientation, making it perfect for solo riders eager for an unforgettable surfing experience. Get ready to catch some amazing waves in San Francisco!<br/><br/></p>
                  <a data-bs-toggle="modal" data-bs-target="#bookModule" href=''><button type='button' className={styles.bookSectionButton} style={{width:"100%"}}>Book Now</button></a>
                </div>
              </div>
            </div>
          </div>
          {/* Single - End */}

          {/* Couple - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-md-6 text-center'>
                <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Couple</h1>
                    <Image src={coupleMobile} width={279} height={230} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6 text-center'>
                  <div >
                      <p className={styles.servicesText} style={{textAlign:"center", opacity: '0.63'}}><br/>Share an unforgettable experience with our couples’ surfboard rental! Ride the waves together on our high-quality surfboards, designed for stability and ease, making it a perfect choice for partners.<br/><br/>Each rental includes essential safety gear and a personalized orientation, ensuring you both feel confident and ready to enjoy the ocean. Dive into the adventure and make special memories in the vibrant waters of San Francisco!<br/><br/></p>
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
                <div className='col-md-6 text-center'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Family</h1>
                  <Image src={familyMobile} width={279} height={261} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-md-6 text-center'>
                  <p className={styles.servicesText} style={{textAlign:"center", opacity: '0.63'}}><br/>Dive into the fun with our family surfboard rental! Our top-quality boards are designed for stability and excitement, making it the perfect choice for all ages to ride the waves together.<br/><br/>Each rental package includes essential safety gear and a thorough orientation, ensuring your family has a safe and unforgettable day on the water. Make lasting memories as you surf the stunning coastline of San Francisco!<br/><br/></p>
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
                  <Image src={singleImage} width={549} height={446} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Single</h1>
                      <p className={styles.servicesText} style={{opacity: '0.63'}}><br/>Unleash your inner surfer with our individual surfboard rental option! Our high-performance boards are designed for stability and ease, providing an exciting way to tackle the waves.<br/><br/> Each rental comes with essential safety gear and a thorough orientation, making it perfect for solo riders eager for an unforgettable surfing experience. Get ready to catch some amazing waves in San Francisco!<br/><br/></p>
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
                  <Image src={coupleImage} width={585} height={446} className={styles.sectionImage} alt=""  style={{maxWidth: "100%"}}></Image>
                </div>
              <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Couple</h1>
                      <p className={styles.servicesText} style={{opacity: '0.63'}}><br/>Share an unforgettable experience with our couples’ surfboard rental! Ride the waves together on our high-quality surfboards, designed for stability and ease, making it a perfect choice for partners.<br/><br/>Each rental includes essential safety gear and a personalized orientation, ensuring you both feel confident and ready to enjoy the ocean. Dive into the adventure and make special memories in the vibrant waters of San Francisco!<br/><br/></p>
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
                <div className='col-md-6'>
                  <Image src={familyImage} width={604} height={457} className={styles.sectionImage} alt="" style={{maxWidth: "100%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Family</h1>
                      <p className={styles.servicesText} style={{opacity: '0.63'}}><br/>Dive into the fun with our family surfboard rental! Our top-quality boards are designed for stability and excitement, making it the perfect choice for all ages to ride the waves together.<br/><br/>Each rental package includes essential safety gear and a thorough orientation, ensuring your family has a safe and unforgettable day on the water. Make lasting memories as you surf the stunning coastline of San Francisco!<br/><br/></p>
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