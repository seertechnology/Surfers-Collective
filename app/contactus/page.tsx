'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import HeadSection from '../head'


// Logo
import logo from '../../assets/images/l.png'
import logoW from '../../assets/images/l_w.png'

// Vectors
import vector from '../../assets/images/Vector_w.png'
import number1 from '../../assets/images/Layout/6/Frame 75.png'
import number2 from '../../assets/images/Number2/Layout/6/Frame 75.png'
import number3 from '../../assets/images/Number3/Layout/6/Frame 75.png'

// Forge Section
import forge1 from '../assets/images/Layout/6/2 6.png'
import forge2 from '../assets/images/Layout/6/IMG_0576 3.png'
import forge3 from '../assets/images/Layout/6/4 1.png'

import forgeCombined from '../../assets/images/infoImageCombined.png'

// Service Section
import service1 from '../../assets/images/Product/6/5 1.png'
import service2 from '../../assets/images/Product/6/6 1.png'
import service3 from '../../assets/images/Product/6/iStock-1419784151 1.png'

// Contact Information Images
import homeVector from '../../assets/images/homeVector.png'
import phoneVector from '../../assets/images/phoneVector.png'
import messageVector from '../../assets/images/messageVector.png'

// Partners Images
import partner1 from '../../assets/images/Logos/Unknown-e.png'
import partner2 from '../assets/images/Logos/jjs_waste_final_web_rgb1-e.png'
import partner3 from '../assets/images/Logos/Astral Steel-bw 1.png'
import partner4 from '../assets/images/Logos/Logo-40-e.png'
import partner5 from '../assets/images/Logos/customcolor_logo_transparent_background-1-e.png'

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

  //functions start

  
  const handleSendAttachments = () => {

    console.log('beginning handling send attachments...')
    if (files) {
      console.log('l:80: files exist')

      let newObject = []

      for(let i = 0; i < files.length; i++) {
        newObject.push({
          name: files[i].name,
          type: files[i].type,
          size: files[i].size,
        })
      }

      // const attachmentsInfo = files.map((file) => ({
      //   name: file.name,
      //   type: file.type,
      //   size: file.size,
      //   lastModified: file.lastModified,
      // }));
      
      // const attachmentsJSON = JSON.stringify(newObject);
      // console.log('Attachments JSON:', attachmentsJSON);
      console.log(newObject)
      setFileMetadata(newObject);
      return newObject
    } else {
      return []
    }
  }

  const setAttachments = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files: FileList | null = event.target.files;

      if (files) {
        console.log('files exist')
        const filesArray = Array.from(files);
        setFiles(filesArray);

        const contentPromises = filesArray.map(async (file, y) => {
          const content = await readFileAsDataURL(file);
          return { [y]: {content: content, type: file.type, name: file.name} };
        });
  
        try {
          const contentObjects = await Promise.all(contentPromises);
          const mergedContents = Object.assign({}, ...contentObjects);
          console.log(mergedContents)
          setFileContents(mergedContents);
        } catch (error) {
          console.error('Error reading attachment contents:', error);
        }
    }
  }
  
  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          resolve(result);
        } else {
          reject(new Error('Unable to read file'));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const checkCompleteFields = ():Boolean => {
    if (name == '' || email == '' || phone == '' || service != 'Service Type' && service == '' || message == '') {
      setAlert('Please complete all fields.')
      return false
    } else {
      setAlert('')
      return true
    }
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
    setService('')
    setMessage('')
    setFiles([])
  }

  const sendEmail = async () => {

    console.log("starting send email request...")

    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message,
        files: files,
        fileContents: fileContents
      })
    })

    if (!res.ok) {
      setAlert('Failed to fetch data')
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const subscribeEmail = async () => {

    console.log("starting subscribe request...")

    const res = await fetch('/api/subscribe', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
      })
    })

    if (!res.ok) {
      setAlert('Failed to fetch data')
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    setLoading(true);


    if (checkCompleteFields() != true) {
      setAlert("Please complete all fields")
      setLoading(false);
      return 
    }
    
    try {
      await sendEmail()
      await subscribeEmail()
    } catch (error) {
      console.error(error);
      setLoading(false);
      setAlert('Error submitting form.');
      return
    }

    setLoading(false);
    setSent(true);
    setAlert("Request successfully sent.");
    resetForm();
    
    return
  }
  //functions end

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
            </div>
            <div className='row'>
              <div className='col-md'>
              <div className={styles.titleSection}>
            <h1 className={styles.titleTitleText}>Contact Us</h1>          
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
      {/* third section "Contact us..." - Start */}
        <div  id="contactUs" className={styles.contactUsSection}>
          <div className='container'>
            <div className='row'>
              <h3 className={styles.contactTitle}>SERVICES CONTACT</h3>
              <h2 className={styles.contactSubTitle}>Contact Us</h2>
            </div>
            <div className='row'>
              <div className='col-md'>
                {/* form - start */}
                <div className={styles.formSection1}>
                  <form className="row g-3" onSubmit={submitForm}> 
                    <div className="col-md-6">
                      <input type="text" placeholder='Full Name' className="form-control rounded-1 mb-2" id="inputName" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder='Email Address' className="form-control rounded-1 mb-2" id="inputEmail"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <input type="phone" placeholder='Phone Number' className="form-control rounded-1  mb-2" id="inputPhone"  value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                    <select id="inputService" className="form-select rounded-1  mb-2" value={service} onChange={(e) => {setService(e.target.value); console.log(service)}} required>
                      <option>Enquiry Type</option>
                      <option>General</option>
                      <option>Order</option>
                    </select>
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control rounded-1  mb-2" placeholder='Message' id="inputMessage" rows={3}  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='col-md-12 mb-2'>
                        <input type="checkbox" className="form-check-input mx-1" id="exampleCheck1" required/>
                      <label className="form-check-label" htmlFor="exampleCheck1">I agree that the data I submit will be collected and stored.</label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className={!sent ? styles.submitButton : styles.submitButtonSent} disabled={loading || sent}>{loading ? "Sending..." : sent ? "Sent" : "Submit"}</button>
                    </div>
                    <div>
                      <p className={sent? 'text-success' : 'text-danger'}>{sent ? "Your request has been sent" : alert}</p>
                    </div>
                  </form>
                </div>
                {/* form -end */}
              </div>

              {/* services contact section 2 - start */}
                {/* <div id="contact" ref={pushRef} className={isOnScreen.includes("contact") ? 'col-md animate__animated animate__fadeIn' : 'col-md animate__animated animate__fadeOut'}>
                <div className={styles.formSection2}>
                  <div className='row'></div>
                    <h5 className={styles.contactDetailTitle}>High Quality Results</h5>
                    <p className={styles.contactDetailText}>Industry trained that can meet and exceed your requirements</p>
                  <div className='row'>
                    <h5 className={styles.contactDetailTitle}>Extensive Experience</h5>
                    <p className={styles.contactDetailText}>With over 25 years industry experience we deliver exceptional service across Sydney</p>
                  </div>  
                  <div className='row'>
                    <h5 className={styles.contactDetailTitle}>Reliable Service</h5>
                    <p className={styles.contactDetailText}>Available 7 days a week</p>
                  </div>
                </div>
              </div> */}
              {/* services contact section 2 - end */}
            </div>
          </div>
        </div>

        {/* third section "Contact us..." - End */}

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