'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useRef, useState } from 'react'

// Logo
import singleImage from '../../assets/images/about/images/1.png'
import coupleImage from '../../assets/images/about/images/2.png'
import familyImage from '../../assets/images/about/images/3.png'


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
                  <Image src={singleImage} width={450} height={450} className={styles.sectionImage} alt="" style={{maxWidth: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}}></Image>
                </div>
                <div className='col-xl-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Our Schiller water bikes are the ultimate mix of water sports and cycling, allowing an easy, fun and safe way to experience a day out on the water in an eco-friendly manner requiring no skill or prior training making it perfect for all ages!<br/><br/>

Schiller water bike is the most advanced of its kind in the world. There is no better way to escape the busy crowds whether it’s sightseeing you have in mind, or simply wanting to discover your own secluded beach to laze the day away. Also, a great alternative for the cycling enthusiasts who would prefer weaving through moorings as opposed to the notorious Sydney traffic!<br/><br/>

We offer rentals on Pittwater and Middle Harbour. Both locations offer stunningly beautiful waterways that include breathtaking national parks, prize-winning waterfront houses and golden beaches to laze the day away on.<br/><br/>

A self-guided tour on one of our Schiller water bikes will provide you with the freedom and opportunity to experience a bit of each.<br/><br/>
We will be offering self guided rentals on Pittwater and Middle Harbour as well as various other locations throughout the region, TBC.<br/><br/>
Gift vouchers also available.<br/><br/></p>
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
                <h1 className={styles.servicesTitle} style={{textAlign:"center"}}>Cancellation Policy</h1>
                    <Image src={coupleImage} width={536} height={405} className={styles.sectionImage} alt="" style={{maxWidth: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}}></Image>
                </div>
                <div className='col-xl-6'>
                  <div >
                      
                      <p className={styles.servicesText} style={{textAlign:"center"}}><br/>
• Full refund applies for cancellations up to 48 hours prior to scheduled rental time..<br/><br/>

• Cancellations within 48 hours of scheduled rental time will receive a voucher for equal value of original booking. Valid for 25 months.<br/><br/>

• No shows will be charged full price.<br/><br/>

Local conditions are to be assessed and determined by Sydney Water Bike Rentals staff.<br/><br/>

In the event of unsafe weather forecast, we will offer a full refund, reschedule or credit.<br/><br/></p>
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
                  <Image src={familyImage} width={548} height={330} className={styles.sectionImage} alt="" style={{maxWidth: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}}></Image>
                </div>
                <div className='col-xl-6'>
                  <p className={styles.servicesText} style={{textAlign:"center"}}><br/>Please arrive 15 minutes prior to your booking to complete any last-minute details.<br/><br/>

Don’t forget to bring anything you may need for a day on the water:<br/><br/>
– Hat                          <br/><br/>
– Sunnies                  <br/><br/>
– Sunscreen<br/><br/>
– Towel<br/><br/>
– Water<br/><br/><br/><br/></p>
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
                  <Image src={singleImage} width={550} height={550} className={styles.sectionImage} alt=""></Image>
                </div>
                <div className='col-sm-6'>
                  <div >
                      <h1 className={styles.servicesTitle}>Experience the unthinkable!</h1>
                      <p className={styles.servicesText}><br/>Our Schiller water bikes are the ultimate mix of water sports and cycling, allowing an easy, fun and safe way to experience a day out on the water in an eco-friendly manner requiring no skill or prior training making it perfect for all ages!<br/><br/>

Schiller water bike is the most advanced of its kind in the world. There is no better way to escape the busy crowds whether it’s sightseeing you have in mind, or simply wanting to discover your own secluded beach to laze the day away. Also, a great alternative for the cycling enthusiasts who would prefer weaving through moorings as opposed to the notorious Sydney traffic!<br/><br/>

We offer rentals on Pittwater and Middle Harbour. Both locations offer stunningly beautiful waterways that include breathtaking national parks, prize-winning waterfront houses and golden beaches to laze the day away on.<br/><br/>

A self-guided tour on one of our Schiller water bikes will provide you with the freedom and opportunity to experience a bit of each.<br/><br/>
We will be offering self guided rentals on Pittwater and Middle Harbour as well as various other locations throughout the region, TBC.<br/><br/>
Gift vouchers also available.<br/><br/></p>
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
• Full refund applies for cancellations up to 48 hours prior to scheduled rental time..<br/><br/>

• Cancellations within 48 hours of scheduled rental time will receive a voucher for equal value of original booking. Valid for 24 months.<br/><br/>

• No shows will be charged full price.<br/><br/>

Local conditions are to be assessed and determined by Sydney Water Bike Rentals staff.<br/><br/>

In the event of unsafe weather forecast, we will offer a full refund, reschedule or credit.<br/><br/></p>
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
                      <h1 className={styles.servicesTitle}>Additional Information</h1>
                      <p className={styles.servicesText}><br/>Please arrive 15 minutes prior to your booking to complete any last-minute details.<br/><br/>

Don’t forget to bring anything you may need for a day on the water:<br/><br/>
– Hat                          <br/><br/>
– Sunnies                  <br/><br/>
– Sunscreen<br/><br/>
– Towel<br/><br/>
– Water<br/><br/>
<br/><br/></p>
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