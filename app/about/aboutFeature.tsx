'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useRef, useState } from 'react'

// Logo
import about1 from '../../assets/images/about/images/1.png'
import about2 from '../../assets/images/about/images/2.png'
import about3 from '../../assets/images/about/images/3.png'


export default function AboutFeature() {

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
                <div className='col-xl-6'>
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Experience the unthinkable!</h1>
                  <Image src={about1} width={522} height={300} className={styles.sectionImage} alt="" style={{maxWidth: "90%", display: "block", marginLeft: "auto", marginRight: "auto"}}></Image>
                </div>
                <div className='col-xl-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Immerse yourself in the thrill of surfing with our premium surfboard rentals, where excitement meets ease and fun. Our boards are perfect for all skill levels, offering a safe and eco-friendly way to enjoy a fantastic day on the water!<br/><br/>

Crafted for performance and comfort, our surfboards represent the best San Francisco has to offer. With their sleek design and advanced technology, you’ll feel confident riding the waves. Escape the busy city life and dive into the stunning beauty of our coastline. Whether you're aiming to catch some exhilarating waves or simply want to relax on a hidden beach, our rentals provide the perfect opportunity to enjoy the best of the Bay Area.<br/><br/>

We offer rentals at top surf locations throughout San Francisco, each featuring breathtaking views, golden beaches, and a vibrant coastal atmosphere. Experience iconic spots where the waves roll in, framed by the majestic backdrop of the city.<br/><br/>

A self-guided surfing adventure gives you the freedom to explore at your own pace, whether you’re a seasoned pro or a first-time surfer. With our expert tips and local knowledge, you'll be ready to make the most of your day on the water. <br/><br/></p>
                </div>
              </div>
            </div>
          </div>
          {/* Single - End */}

          {/* Couple - Start */}
          <div className={styles.weldingBg} ref={pushRef}>
            <div className='container'>
              <div className='row pt-5 pb-5'>
                <div className='col-xl-6 text-center'>
                <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Cancellation Policy</h1>
                    <Image src={about2} width={536} height={350} className={styles.sectionImage} alt="" style={{maxWidth: "90%"}}></Image>
                </div>
                <div className='col-xl-6 justify-content-center justify-content-center align-items-center mx-auto'>
                  <div >
                      <p className={styles.servicesText} style={{textAlign:"center"}}><br/>
                      We want you to have the best experience possible with our surfboard rentals. If your plans change, we’ve made our cancellation policy straightforward:<br/><br/>

                      Cancellation Notifications: If you need to cancel or modify your reservation, please contact us at least 24 hours before your scheduled rental time.<br/><br/>

                      Full Refunds: Cancellations made more than 24 hours in advance will receive a full refund.<br/><br/>

                      Late Cancellations: Cancellations made less than 24 hours before your rental time may incur a cancellation fee, or you may receive a partial refund.<br/><br/>

                      We appreciate your understanding and look forward to providing you with an unforgettable experience!<br/><br/>
                      </p>
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
                  <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Additional Information</h1>
                  <Image src={about3} width={548} height={250} className={styles.sectionImage} alt="" style={{maxWidth: "90%", display: "block", marginLeft: "auto", marginRight: "auto"}}></Image>
                </div>
                <div className='col-xl-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Rental Duration - Our surfboards are available for half-day and full-day rentals. Please specify your preferred duration when booking.<br/><br/>

                    Age Requirements - All renters must be at least 18 years old. Minors may rent with parental consent and supervision.<br/><br/>
                    Safety Gear - We provide optional safety gear, including leashes and rash guards, to enhance your surfing experience. Please ask our staff if you need any additional equipment.<br/><br/>
                    Local Knowledge: Our team is happy to share tips on the best surf spots and conditions.
                  </p>
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
                  <Image src={about1} width={522} height={550} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-sm-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Discover the extraordinary!</h1>
                      <p className={styles.servicesText}><br/>Immerse yourself in the thrill of surfing with our premium surfboard rentals, where excitement meets ease and fun. Our boards are perfect for all skill levels, offering a safe and eco-friendly way to enjoy a fantastic day on the water!<br/><br/>

                      Crafted for performance and comfort, our surfboards represent the best San Francisco has to offer. With their sleek design and advanced technology, you’ll feel confident riding the waves. Escape the busy city life and dive into the stunning beauty of our coastline. Whether you're aiming to catch some exhilarating waves or simply want to relax on a hidden beach, our rentals provide the perfect opportunity to enjoy the best of the Bay Area.<br/><br/>

                      We offer rentals at top surf locations throughout San Francisco, each featuring breathtaking views, golden beaches, and a vibrant coastal atmosphere. Experience iconic spots where the waves roll in, framed by the majestic backdrop of the city.<br/><br/>

                      A self-guided surfing adventure gives you the freedom to explore at your own pace, whether you’re a seasoned pro or a first-time surfer. With our expert tips and local knowledge, you'll be ready to make the most of your day on the water. <br/><br/></p>
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
                      <h1 className={styles.servicesTitle}>Cancellation Policy</h1>
                      <p className={styles.servicesText}><br/>
                      We want you to have the best experience possible with our surfboard rentals. If your plans change, we’ve made our cancellation policy straightforward:<br/><br/>

                      Cancellation Notifications: If you need to cancel or modify your reservation, please contact us at least 24 hours before your scheduled rental time.<br/><br/>

                      Full Refunds: Cancellations made more than 24 hours in advance will receive a full refund.<br/><br/>

                      Late Cancellations: Cancellations made less than 24 hours before your rental time may incur a cancellation fee, or you may receive a partial refund.<br/><br/>

                      We appreciate your understanding and look forward to providing you with an unforgettable experience!<br/><br/>
                      </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <Image src={about2} width={515} height={386} className={styles.sectionImage} alt=""  style={{maxWidth: "100%"}}></Image>
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
                  <Image src={about3} width={525} height={315} className={styles.sectionImage} alt="" style={{maxWidth: "100%"}}></Image>
                </div>
                <div className='col-md-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Additional Information</h1>
                      <p className={styles.servicesText}><br/>Rental Duration - Our surfboards are available for half-day and full-day rentals. Please specify your preferred duration when booking.<br/><br/>

                      Age Requirements - All renters must be at least 18 years old. Minors may rent with parental consent and supervision.<br/><br/>
                      Safety Gear - We provide optional safety gear, including leashes and rash guards, to enhance your surfing experience. Please ask our staff if you need any additional equipment.<br/><br/>
                      Local Knowledge: Our team is happy to share tips on the best surf spots and conditions.
                      </p>
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