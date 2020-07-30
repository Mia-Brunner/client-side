import React from 'react'
import styles from './home.module.css'; 

const Home = () => {
  return (
    
    <div data-cy="home">

    <p className={styles.intro}> 
    Looking for an electrician in the Geelong or Golden Plains area?
    </p>
    
    <p className={styles.contact}>
      Call us today: 0411 111 111
    </p>

    <p className={styles.bio}>
      With over 30 years experience we offer our customers expert customer service and quality workmanship at affordable prices
    </p>
    
    <p className={styles.safety}>
      Why choose us?
    </p>

    <p className={styles.list}>
      <ul>
      <li>Safety first: We don't cut corners and never compromise on the safety of our staff or customers</li>
      <li>Professional: We are clean, tidy and respectful technicians and take away the rubbish at the end of the job</li>
      <li> Reliable: We always arrive when we say we will </li>
      <li>Qualified: All of our technicians are qualified to the highest Australian standards and we are more than happy to provide our licences, registrations, and safety compliance paperwork</li>
      </ul> 
    </p>

    <p className={styles.areas}>
    Service Areas: 
    </p>
    
    <p className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403245.7554917117!2d143.5833390665803!3d-37.85192552972934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad3e456e212167b%3A0x3ea8bfa7292cadf3!2sGolden%20Plains%2C%20VIC!5e0!3m2!1sen!2sau!4v1594965287834!5m2!1sen!2sau"></iframe>
  
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402149.99904711003!2d144.18128170744592!3d-38.05181924786575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad42240d49310b5%3A0x8a8a3e72dc573d65!2sGreater%20Geelong%2C%20VIC!5e0!3m2!1sen!2sau!4v1594965980938!5m2!1sen!2sau"></iframe>
    </p>
  </div>
  )
}

export default Home
