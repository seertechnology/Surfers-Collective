'use client'

import styles from './page.module.css'
import logoW from '../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* footer - Start */}
      <div className={styles.footerSection}>
          <div className='container pt-3 text-center'>
            <div className='row'>
              <div className='col-md'>
                <div className='row'>
                  <div className='col-md-5 pb-3'>
                    <Image src={logoW} width={109} height={40} alt='surfers-collective-logo'/>
                  </div>
                </div>
                <div className='row-md'>
                  <div className='col-md-5'>
                    <p className='footer-text text-white opacity-50'>Dream getaways are just a click away. Discover your piece of paradise.</p>
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
                      <p className={styles.crs}>2024 Surfers Collective. All right reserved.</p>
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
    </>
  )
}